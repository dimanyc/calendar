class PagesController < ApplicationController

  def index
    @nodes = Node.all
  end

end
