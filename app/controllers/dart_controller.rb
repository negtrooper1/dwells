class DartController < ApplicationController
  def arthome
    @images = Dir.glob("app/assets/images/gallery/*.jpg").sort
  end
end


