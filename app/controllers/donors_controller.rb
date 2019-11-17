class DonorsController < ApplicationController
	skip_before_action :authorized, only: [:create, :account_status]

	def index
		@donors = Donor.all
	end

	def show
		id = params[:id].to_i
		authorized_id = decoded_token[0]['donor_id']
		if id != authorized_id
			render json: { error: 'Unauthorized' }, status: :forbidden
			return
		end
		@donor = Donor.find(id)

		render json: @donor.donations, include: 'claims', status: :ok
	end

	def new
	end

	def create
		@donor = Donor.new(donor_params)
		if @donor.valid?
			@donor.has_applied = true
			@donor.account_status = 'pending'
			@donor.save
			@token = encode_token(donor_id: @donor.id)
			session[:donor_id] = @donor.id
			render json: { donor: DonorSerializer.new(@donor), jwt: @token }, status: :created
		else
			render json: { error: 'failed to create donor' }, status: :not_acceptable
		end
	end

	def account_status
		id = params[:id].to_i
		status = params[:status]

		@donor = Donor.find(id)
		success_message = { message: "Donor id: #{id} status changed to #{status}. Was: #{@donor.account_status}" }
		failure_message = { error: "Donor id: #{id} status not changed to #{status}.  Remained: #{@donor.account_status}" }

		case status
		when 'approved'
			success = @donor.update_attribute(:account_status, 'approved')
		when 'pending'
			success = @donor.update_attribute(:account_status, 'pending')
		when 'active'
			success = @donor.update_attribute(:account_status, 'active')
		when 'suspended'
			success = @donor.update_attribute(:account_status, 'suspended')
		end

		success ?
			(render json: success_message, status: :updated) :
			(render json: failure_message, status: :not_acceptable)
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
			:terms_of_service,
			claims_attributes: [
				:id,
				:donation_id,
				:client_id,
				:qr_code,
				:completed,
				:canceled
			],
			donations_attributes: [
				:canceled,
				:claims,
				:donor_id,
				:food_name,
				:image_url,
				:measurement,
				:per_person,
				:pickup_location,
				:total_servings
			],
		)
	end
end
