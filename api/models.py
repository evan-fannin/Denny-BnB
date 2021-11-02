from django.db import models
from users.models import CustomUser
# Create your models here.


class House(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    price_per_night = models.DecimalField(max_digits=6, decimal_places=2)


class HouseImage(models.Model):
    image = models.ImageField(upload_to='frontend/static/images', default='frontend/static/images/default.png')
    house = models.ForeignKey(House, related_name='images', on_delete=models.CASCADE)


class Booking(models.Model):
    start_date = models.CharField(max_length=100)
    end_date = models.CharField(max_length=100)
    price_per_night = models.DecimalField(max_digits=10, decimal_places=2)
    house_name = models.CharField(max_length=100)
    house = models.ForeignKey(House, related_name='bookings', on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, related_name='bookings', on_delete=models.CASCADE)

