class ClientAuthController < ApplicationController
	skip_before_action :authorized, only: [:create]

	def create
		@client = Client.find_by(email: client_login_params[:email])
		#User#authenticate comes from BCrypt
		if @client && @client.authenticate(client_login_params[:password])
			# encode token comes from ApplicationController
			session[:client_id] = @client.id
			token = encode_token({ client_id: @client.id })
			render json: { client: ClientSerializer.new(@client), jwt: token }, status: :accepted
		else
			render json: { message: 'Invalid email or password' }, status: :unauthorized
		end
	end

	private

	def client_login_params
		params.require(:client).permit(:email, :password)
	end
end