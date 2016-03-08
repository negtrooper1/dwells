class WebsitesController < ApplicationController
  def index
    @website = Website.all.order("created_at DESC")
  end

  def show
    @website = Website.find(params[:id])
  end

  def new
    @website = Website.new
  end

  def create
    @website = Website.new(website_params)
    if @website.save
      flash[:success] = "Website added to db!"
      redirect_to '/websites'
    else
      render 'new'
    end
  end
    
  private
2
  def website_params
    params.require(:website).permit(:title, :body, :site_url, :subtitle, :logo_link)
  end
end
