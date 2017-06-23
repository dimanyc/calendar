Rails.application.routes.draw do

  root to: 'pages#index'

  namespace :api, defaults: { format: 'json' } do
    namespace :v1 do
      resources :slots
    end
  end

end
