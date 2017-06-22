# class NodesController < ApplicationController
module V1

  class NodesController < ActionController::API

    include AbstractController::Translation
    include ActionController::MimeResponds

    # respond_to :json

    def index
      respond_to do |format|
        # format.html
        format.json {
          @nodes = Node.all
        }
      end
    end

  end

end
