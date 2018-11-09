class WelcomeController < ApplicationController
  def index
  end

  def get_screen_size
    @session[:screen_size] = params[:screen_size]
    redirect_to "/"
  end
end
