class ClientsController < ApplicationController
  def index
    @clients = Client.all
  end

  def show
  end

  def new
  end

  def create
    @client = Client.create(client_params)
    if @client.valid?
        @token = encode_token(client_id: @client.id)
        render json: { client: ClientSerializer.new(@client), jwt: @token }, status: :created
    else
      render json: { error: 'failed to create client' }, status: :not_acceptable
    end
  end

  def edit
  end

  def update
    if @client.update(client_params)
      redirect_to client_path(@client)
    else
      flash[:errors] = @client.errors.full_messages
      redirect_to edit_client_path
    end
  end

  private

  def client_params
    params.require(:client).permit(:email, :password)
  end
end
