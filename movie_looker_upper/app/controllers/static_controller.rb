class StaticController < ApplicationController
  def index
  end

  def show
    @imdb_id = params[:id]
    render component: 'Movie', props: {imdb_id: @imdb_id} 
  end
end
