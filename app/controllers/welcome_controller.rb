class WelcomeController < ApplicationController
  def index
    @images = Dir.glob("app/assets/images/gallery/*.jpg").sort
    @websites = Website.all.order("created_at ASC")
    @writings = Writing.all.order("created_at ASC")
    @post = Post.last
  end
end
