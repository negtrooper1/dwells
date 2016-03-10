class WritingController < ApplicationController
  before_action :find_piece, only: [:show, :edit, :update, :destroy]

  def index
    @pieces = Writing.all.order("created_at ASC")
  end

  def show
  end

  def edit
  end

  def update
  end

  def new
  end

  def destroy
  end

  def create
  end

  private

  def piece_params
  end

  def find_piece
  end
end
