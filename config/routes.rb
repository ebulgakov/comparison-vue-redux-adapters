Rails.application.routes.draw do
  get 'vue/index'

  root 'vue#index'
end
