Rails.application.routes.draw do

  root to: 'pages#index'

  namespace :v1, defaults: { format: :json } do
    resources :nodes, only: :index, controller: :nodes
  end

end
