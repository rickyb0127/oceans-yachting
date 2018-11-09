Rails.application.routes.draw do
  root 'welcome#index'
  post '/get_screen_size', to: 'welcome#get_screen_size'
end
