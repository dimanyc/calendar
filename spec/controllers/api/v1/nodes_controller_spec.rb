require 'rails_helper'

RSpec.describe Api::V1::SlotsController, type: :controller do

  describe 'GET#index' do

    it 'should respond with a 200' do

      get :index
      expect(response.status)
        .to eq(204)
    end

  end # GET#index

end
