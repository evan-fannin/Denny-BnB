from .views import index

from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('', index),
    path('list', index),
    path('house/<str:house_name>', index),
    path('house/<str:house_name>/images', index),
    path('create', index),
    path('calendar', index),
    path('book/<str:house_name>', index),
    path('signup', index),
    path('login', index),
    path('user-bookings/', index),
]
