class WebsitesController < ApplicationController
  before_action :find_website, only: [:show, :edit, :update, :destroy]

  def index
    @websites = Website.all.order("created_at ASC")
  end

  def show
  end

  def edit
  end

  def update
    if @website.update(website_params)
      redirect_to @website
    else
      render 'edit'
    end
  end

  def destroy
    @website.destroy
    redirect_to '/websites'
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

  def find_website
    @website = Website.find(params[:id])
  end
end
