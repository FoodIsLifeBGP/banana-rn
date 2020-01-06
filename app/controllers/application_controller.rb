class ApplicationController < ActionController::API
	before_action :authorized

    def encode_token(payload)
      # should store secret in env variable
      payload_copy = Marshal.load(Marshal.dump(payload))
      # puts "encode token:", JWT.encode(payload_copy, 'my_s3cr3t')
      JWT.encode(payload, 'my_s3cr3t')
    end

    def auth_header
      # { Authorization: 'Bearer <token>' }
      request.headers['Authorization']
    end

    def decoded_token
      if auth_header
        token = auth_header.split(' ')[1]
        # header: { 'Authorization': 'Bearer <token>' }
        begin
          puts "decoded token:", JWT.decode(token, 'my_s3cr3t', true, algorithm: 'HS256')
          JWT.decode(token, 'my_s3cr3t', true, algorithm: 'HS256')
        rescue JWT::DecodeError
          puts "decode error"
          nil
        end
      end
    end

    def current_donor
      if decoded_token
        donor_id = decoded_token[0]['donor_id']
        client_id = decoded_token[0]['client_id']
        @user = nil
        if donor_id
          @user = Donor.find(donor_id)
        elsif client_id
          @user = Client.find(client_id)
        end
      end
    end

    def logged_in?
      !!current_donor
    end

    def authorized
      render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
    end
end
