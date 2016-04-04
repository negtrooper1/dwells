class HomeController < ApplicationController
  def home
    @images = Dir.glob("app/assets/images/gallery/*.jpg").sort
    @websites = Website.all.order("created_at ASC")
    @writings = Writing.all.order("created_at ASC")
  end
end
