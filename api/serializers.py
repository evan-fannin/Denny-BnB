from rest_framework import serializers
from api.models import House, HouseImage, Booking


class CreateBookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ['start_date', 'end_date']


class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ['id', 'start_date', 'end_date', 'house']


class CreateHouseImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = HouseImage
        fields = ['image']


class HouseImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = HouseImage
        fields = ['image', 'house']


class HouseSerializer(serializers.ModelSerializer):

    class Meta:
        model = House
        fields = ['id', 'name', 'address', 'price_per_night']


class CreateHouseSerializer(serializers.ModelSerializer):
    images = HouseImageSerializer(many=True, read_only=True)

    class Meta:
        model = House
        # these fields can be a subset of the full model because these are for POST requests
        fields = ['name', 'address', 'price_per_night', 'images']

