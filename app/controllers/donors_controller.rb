class DonorsController < ApplicationController
	skip_before_action :authorized, only: [:create]

	def index
		@donors = Donor.all
	end

	def show
	end

	def new
	end

	def create
		@donor = Donor.new(donor_params)
		if @donor.valid?
				@donor.has_applied = true
				@donor.save
				@token = encode_token(donor_id: @donor.id)
				render json: { donor: DonorSerializer.new(@donor), jwt: @token }, status: :created
		else
			render json: { error: 'failed to create donor' }, status: :not_acceptable
		end
	end

	def edit
	end

	def update
		if @donor.update(donor_params)
			redirect_to donor_path(@donor)
		else
			flash[:errors] = @donor.errors.full_messages
			redirect_to edit_donor_path
		end
	end

	private

	def donor_params
		params.require(:donor).permit(
			:organization_name,
			:email,
			:password,
			:address_street,
			:address_city,
			:address_state,
			:address_zip,
			:business_license,
			:account_status,
			:pickup_location,
			:has_applied,
			:is_approved,
		)
	end
end
