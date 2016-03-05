class WebdesignController < ApplicationController
  def wdhome
    @websites = Website.all.order("created_at DESC")
  end
end
