from django.urls import path
from .views import CreateUser, BlacklistTokenUpdate

app_name = 'users'

urlpatterns = [
    path('signup/', CreateUser.as_view(), name='create_user'),
    path('logout/blacklist/', BlacklistTokenUpdate.as_view(), name='blacklist')
]
