class DonationsController < ApplicationController
	def index
		@donations = Donation.all
	end

	def active
		@active = Donation.all.select do |d|
			(Time.now - d.start_time) / 60 < d.duration_minutes
		end
		render json: @active
	end

	def show
		render json: Donation.find(params[:id])
	end

	def create
		@donation = Donation.create(donation_params)
		if @donation.valid?
			@token = encode_token(donation_id: @donation.id)
			render json: { donation: DonationSerializer.new(@donation), jwt: @donation }, status: :created_at
		else
			render json: { error: 'failed to create donation' }, status: :not_acceptable
		end
	end

	def edit
	end

	def update
		if @doantion.update(donation_params)
			redirect_to donation_path(@donation)
		else
			flash[:errors] = @donation.errors.full_messages
			redirect_to edit_donation_path
		end
	end

	private

	def donations_params
		params.requier(:donations).permit(:food_name, :measurement, :per_person, :total_servings, :start_time, :duration_minutes, :image_url, :canceled)
	end

end
