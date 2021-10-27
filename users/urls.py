from django.urls import path
from .views import CreateUser

app_name = 'users'

urlpatterns = [
    path('signup/', CreateUser.as_view(), name='create_user')
]
