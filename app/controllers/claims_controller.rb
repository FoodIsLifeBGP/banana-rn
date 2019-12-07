class ClaimsController < ApplicationController
	def index
		@claims = Claim.all
	end

	def show
	end

	def new
	end

	def create
		@claim = Claim.create(claim_params)
		if @claim.valid?
				@token = encode_token(claim_id: @claim.id)
				render json: { claim: ClaimSerializer.new(@claim), jwt: @token }, status: :created
		else
			render json: { error: 'failed to create claim' }, status: :not_acceptable
		end
	end

	def edit
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
		params.require(:claim).permit(:completed)
	endoy
	end
end
