class VendorsController < ApplicationController
	skip_before_action :authorized, only: [:create]

	def index
		@vendors = Vendor.all
	end

	def show
	end

	def new
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
		if @vendor.update(vendor_params)
			redirect_to vendor_path(@vendor)
		else
			flash[:errors] = @vendor.errors.full_messages
			redirect_to edit_vendor_path
		end
	end

	def destroy
		@vendor.destroy
		flash[:message] = "Successfully Deleted Vendor Profile"

		# place redirect to home page here
	end

	private

	def vendor_params
		params.require(:vendor).permit(:organization_name, :admin_email, :password_hash)
	end
end
