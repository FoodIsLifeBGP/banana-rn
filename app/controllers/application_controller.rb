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
    #   puts "request.headers:", request.headers['Authorization']
      request.headers['Authorization']
    end

    def decoded_token
      if auth_header
        token = auth_header.split(' ')[1]
        # puts "token from headers:", token
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

    def current_vendor
      if decoded_token
        vendor_id = decoded_token[0]['vendor_id']
        puts "found vendor:", Vendor.find_by(id: vendor_id)
        @vendor = Vendor.find_by(id: vendor_id)
      end
    end

    def logged_in?
        puts "logged in?:", !!current_vendor
      !!current_vendor
    end

    def authorized
      render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
    end
end
