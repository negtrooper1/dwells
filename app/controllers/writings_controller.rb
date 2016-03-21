class WritingsController < ApplicationController
  before_action :find_writing, only: [:show, :edit, :update, :destroy]

  def index
    @writings = Writing.all.order("created_at ASC")
  end

  def show
  end

  def edit
  end

  def update
    if @writing.update(writing_params)
      redirect_to @writing
    else
      render 'edit'
    end
  end

  def new
    @writing = Writing.new
  end

  def destroy
    @writing.destroy
    redirect_to '/writings'
  end

  def create
    @writing = Writing.new(writing_params)
    if @writing.save
      flash[:success] = "Writing added to db!"
      redirect_to '/writings'
    else
      render 'new'
    end
  end

  private

  def writing_params
    params.require(:writing).permit(:title, :url)
  end

  def find_writing
    @writing = Writing.find(params[:id])
  end
end
