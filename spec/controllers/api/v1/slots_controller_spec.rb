require 'rails_helper'

RSpec.describe Api::V1::SlotsController, type: :controller do

  describe 'GET#index' do

    it 'should respond with a 204' do
      get :index, format: :json
      expect(response.status)
        .to eq(200)
    end

    it 'should include all Slot records in the response' do
      slots = create_list(:slot, 3)
      get :index, format: :json
      json_response = JSON.parse(response.body)
      expect(json_response)
        .to eq(slots)
    end

  end #GET#index

end
