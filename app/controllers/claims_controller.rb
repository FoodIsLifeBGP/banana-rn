class ClaimsController < ApplicationController
	def create
		@claim = Claim.create(claim_params)
		if @claim.valid?
			@token = encode_token(claim_id: @claim.id)
			render json: { claim: ClaimSerializer.new(@claim), jwt: @token }, status: :created
		else
			render json: { error: 'failed to create claim' }, status: :unprocessable_entity
		end
	end

	def update
		if @claim.update(claim_params)
			redirect_to claim_path(@claim)
		else
			flash[:errors] = @claim.errors.full_messages
			redirect_to edit_claim_path
		end
	end

	private

	def claim_params
		params.require(:claim).permit(:client_id,
			:donation_id,
			:qr_code,
			:completed,
			:time_claimed,
			:canceled
		)
	end
end
