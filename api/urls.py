from api import views

from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('houses/', views.HouseList.as_view()),
    path('houses/<int:pk>/', views.HouseDetail.as_view()),
    path('create-house/', views.CreateHouseView.as_view()),
    path('get-house/', views.GetHouse.as_view()),
    path('get-houses/', views.GetHouses.as_view()),
    path('create-booking/', views.CreateHouseBooking.as_view()),
    path('get-bookings/', views.GetHouseBookings.as_view()),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]

urlpatterns = format_suffix_patterns(urlpatterns)
