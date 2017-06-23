class Api::V1::SlotsController < Api::V1::BaseController

  def index
    respond_with Slot.all
  end

  def destroy
    respond_with Slot.destroy(params[:id])
  end

end
