from rest_framework import serializers
from api.models import House, HouseImage, Booking


class CreateBookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ['start_date', 'end_date', 'price_per_night', 'house_name']

    def create(self, validated_data):
        house_name = validated_data.get('house_name')
        queryset = House.objects.filter(name=house_name)
        house = queryset[0]
        user = self.context['request'].user
        instance = self.Meta.model(**validated_data, user=user, house=house)
        instance.save()
        return instance


# class CreateUserBookingSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = UserBooking
#         fields = ['start_date', 'end_date', 'price_per_night']
#
#     def create(self, validated_data):
#         user = self.context['request'].user
#         instance = self.Meta.model(**validated_data, user=user)
#         instance.save()
#         return instance


class CalendarBookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ['start_date', 'end_date']


class UserBookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ['id', 'start_date', 'end_date', 'price_per_night', 'house_name']


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

