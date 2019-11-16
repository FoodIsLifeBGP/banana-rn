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
		@donor = Donor.create(donor_params)
		if @donor.valid?
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
		params.require(:donor).permit(:organization_name, :admin_email, :password_hash)
	end
end
