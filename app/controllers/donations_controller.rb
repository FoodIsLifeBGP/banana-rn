class DonationsController < ApplicationController
	def index
	end

	def active
		@active = Donation.all.select do |d|
			(Time.now - d.start_time) / 60 < d.duration_minutes
		end
		render json: @active
	end

	def show
		render json: Donation.find(params[:id])
	end

	def create
	end

	def edit
	end

	def update
	end

	def destroy
	end
end
