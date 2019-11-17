class ApplicationController < ActionController::API
	before_action :authorized

    def encode_token(payload)
      # should store secret in env variable
      payload_copy = Marshal.load(Marshal.dump(payload))
      puts "encode token:", JWT.encode(payload_copy, 'my_s3cr3t')
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
        puts "found donor:", Donor.find_by(id: donor_id)
        @donor = Donor.find_by(id: donor_id)
      end
    end

    def logged_in?
      puts "logged in?:", !!current_donor
      !!current_donor
    end

    def authorized
      render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
    end
end
