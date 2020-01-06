class DonorAuthController < ApplicationController
	skip_before_action :authorized, only: [:create]
 
	def create
		@donor = Donor.find_by(email: donor_login_params[:email])
		#User#authenticate comes from BCrypt
		if @donor && @donor.authenticate(donor_login_params[:password])
			# encode token comes from ApplicationController
			session[:donor_id] = @donor.id
			token = encode_token({ donor_id: @donor.id })
			render json: { donor: DonorSerializer.new(@donor), jwt: token }, status: :accepted
		else
			render json: { message: 'Invalid email or password' }, status: :unauthorized
		end
	end

	private

	def donor_login_params
		params.require(:donor).permit(:email, :password)
	end
end