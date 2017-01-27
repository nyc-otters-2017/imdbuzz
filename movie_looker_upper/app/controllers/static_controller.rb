class StaticController < ApplicationController
  def index
  end

  def show
    @imdb_id = params[:id]
    render component: 'Movie' 
  end
end
