require 'base64'

class DonationsController < ApplicationController
	skip_before_action :authorized, only: [:create]

	def index
		render json: Donation.all
	end

	def active
		@active = Donation.all.select do |d|
			# Check if each donation is still active based on the time it was created and its duration.
			# Time.now comes back in seconds, so we divide by 60 to compare in minutes.
			(Time.now - d.created_at) / 60 < d.duration_minutes
		end
		render json: @active
	end

	def show
		render json: Donation.find(params[:id])
	end

	def create
		@donation = Donation.new(donation_params)
		if @donation.valid?
			@donation.save
			render json: { donation: DonationSerializer.new(@donation) }, status: :created
		else
			render json: { error: 'failed to create donation' }, status: :unprocessable_entity
		end
	end

	def update
		id = params[:id].to_i
		@donation = Donation.find(id)
		if Donation.new(donation_params).valid?
			@donation.update(donation_params)
			render json: { donation: DonationSerializer.new(@donation) }, status: :accepted
		else
			render json: { error: 'failed to update donation' }, status: :unprocessable_entity
		end
	end

	def make_claim
		donation_id = params[:id]
		client_id = params[:client_id]

		# No multiple claims by one client on one donation
		if Claim.find_by(donation_id: donation_id, client_id: client_id)
			render json: { error: 'claim already exists for this client and donation' }, status: :unprocessable_entity
			return
		end

		qr_code = Base64.encode64({ 'client_id': params[:client_id], 'donation_id': params[:id] }.to_json).chomp
		claim_params = {
			client_id: params[:client_id],
			donation_id: params[:id],
			qr_code: qr_code,
			completed: false,
			time_claimed: Time.now,
			canceled: false,
		}
		@claim = Claim.new(claim_params)
		if @claim.valid?
			@claim.save
			render json: { claim: ClaimSerializer.new(@claim) }, status: :accepted
		else
			render json: { error: 'failed to create claim' }, status: :unprocessable_entity
		end
	end

	private

	def donation_params
		params.require(:donation).permit(
			:id,
			:canceled,
			:donor_id,
			:duration_minutes,
			:food_name,
			:image_url,
			:measurement,
			:per_person,
			:pickup_location,
			:start_time,
			:total_servings
		)
	end
end
