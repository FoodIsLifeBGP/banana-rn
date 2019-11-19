class DonationsController < ApplicationController

	def index
		render json: Donation.all
	end

	def active
		@active = Donation.all.select do |d|
			# Check if each donation is still active based on the time it was created and its duration.
			# Time.now comes back in seconds, so we divide by 60 to compare in minutes.
			(Time.now - d.start_time) / 60 < d.duration_minutes
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
			render json: { error: 'failed to create donation' }, status: :not_acceptable
		end
	end

	def edit
	end

	def update
		id = params[:donation_id].to_i
		puts "-"*50, id
		@existing_donation = Donation.find(id)
		puts @existing_donation
		@donation = Donation.new(donation_params)
		if @donation.valid?
			@existing_donation.update(donation_params)
			render json: { donation: DonationSerializer.new(@donation) }, status: :updated
		else
			render json: { error: 'failed to create donation' }, status: :not_acceptable
		end
	end

	private

	def donation_params
		params.require(:donation).permit(:food_name,
			:measurement,
			:per_person,
			:total_servings,
			:start_time,
			:duration_minutes,
			:image_url,
			:canceled,
			:donor_id,
			:canceled,
			:pickup_location,
			:id,
			:donation_id,
		)
	end
end
