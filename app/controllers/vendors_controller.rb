class VendorsController < ApplicationController
	skip_before_action :authorized, only: [:create]

	def index
	end

	def show
	end

	def create
		@vendor = Vendor.create(vendor_params)
		if @vendor.valid?
				@token = encode_token(vendor_id: @vendor.id)
				render json: { vendor: VendorSerializer.new(@vendor), jwt: @token }, status: :created
		else
			render json: { error: 'failed to create vendor' }, status: :not_acceptable
		end
	end

	def edit
	end

	def update
	end

	def destroy
	end

	private

	def vendor_params
		params.require(:vendor).permit(:organization_name, :admin_email, :password_hash)
	end
end
