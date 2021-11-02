from api.models import House, HouseImage, Booking
from users.models import CustomUser
from api.serializers import HouseSerializer, \
    CreateHouseSerializer, \
    CreateHouseImageSerializer, \
    HouseImageSerializer, \
    CalendarBookingSerializer, \
    CreateBookingSerializer, \
    UserBookingSerializer
from api.auth import HouseDetailPermission
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView


# Create your views here.
class GetHouses(APIView):
    serializer_class = HouseSerializer
    parser_classes = [MultiPartParser, FormParser]
    permission_classes = [AllowAny]

    def get(self, request, format=None):
        houses = House.objects.all()
        if houses:
            data_list = HouseSerializer(houses, many=True).data
            for i, house in enumerate(houses):
                images = house.images.all()
                images = HouseImageSerializer(images, many=True).data
                data_list[i]['images'] = images
            return Response(data_list, status=status.HTTP_200_OK)
        return Response({'No Results': 'No houses have been created.'},
                        status=status.HTTP_404_NOT_FOUND)


class GetHouse(APIView, HouseDetailPermission):
    serializer_class = HouseSerializer
    parser_classes = [MultiPartParser, FormParser]
    permission_classes = [HouseDetailPermission]

    def get(self, request, format=None):
        #   Handling multiple words in name and capitalization of each
        name = request.GET.get('name').split()
        for i, word in enumerate(name):
            word = word.capitalize()
            name[i] = word
        name = " ".join(name)

        if name is not None:
            houses = House.objects.filter(name=name)
            if houses:
                house = houses[0]
                self.check_object_permissions(request, house)
                images = house.images.all()
                print(images)
                images = HouseImageSerializer(images, many=True).data
                data = HouseSerializer(house).data
                data['images'] = images
                print(data['images'])
                return Response(data, status=status.HTTP_200_OK)
            return Response({'House Not Found': 'A house with this name does not exist.'},
                            status=status.HTTP_404_NOT_FOUND)
        return Response({'Bad Request': 'Name parameter not found in request'}, status=status.HTTP_400_BAD_REQUEST)


class CreateHouseView(APIView):
    serializer_class = CreateHouseSerializer
    parser_classes = [MultiPartParser, FormParser]

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        print(request.data)
        print(request.FILES.values())

        if serializer.is_valid():
            serialized_images = []
            for image in request.FILES.values():
                print(repr(image))
                image_serializer = CreateHouseImageSerializer(data={'image': image})
                print(image_serializer.is_valid())
                if image_serializer.is_valid():
                    serialized_images.append(image_serializer.validated_data)
            name = serializer.validated_data.get('name')
            address = serializer.validated_data.get('address')
            price_per_night = serializer.validated_data.get('price_per_night')

            queryset = House.objects.filter(address=address)

            if queryset.exists():
                house = queryset[0]
                house.name = name
                house.price_per_night = price_per_night
                house.save(update_fields=['name', 'price_per_night'])
                for validated_data in serialized_images:
                    image = validated_data.get('image')
                    house_image = HouseImage(image=image, house=house)
                    house_image.save()
                return Response(HouseSerializer(house).data, status=status.HTTP_200_OK)
            else:
                house = House(name=name, address=address, price_per_night=price_per_night)
                house.save()
                for validated_data in serialized_images:
                    image = validated_data.get('image')
                    house_image = HouseImage(image=image, house=house)
                    house_image.save()
                return Response(HouseSerializer(house).data, status=status.HTTP_201_CREATED)

            return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)


class CreateHouseBooking(APIView):
    serializer_class = CreateBookingSerializer
    parser_classes = [MultiPartParser, FormParser]
    permission_classes = [IsAuthenticated]

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data, context={'request': request})
        if serializer.is_valid():
            booking = serializer.save()
            if booking:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class GetHouseBookings(APIView):
    serializer_class = CalendarBookingSerializer
    parser_classes = [MultiPartParser, FormParser]

    def get(self, request, format=None):
        name = request.GET.get('houseName')

        if name is not None:
            houses = House.objects.filter(name=name)
            if houses:
                house = houses[0]
                bookings = house.bookings.all()
                data = CalendarBookingSerializer(bookings, many=True).data
                return Response(data, status=status.HTTP_200_OK)
            return Response({'House Not Found': 'A house with this name does not exist.'},
                            status=status.HTTP_404_NOT_FOUND)
        return Response({'Bad Request': 'Name parameter not found in request'}, status=status.HTTP_400_BAD_REQUEST)


class GetUserBookings(APIView):
    serializer_class = CalendarBookingSerializer
    parser_classes = [MultiPartParser, FormParser]
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        user = request.user
        if user:
            bookings = user.bookings.all()
            data = UserBookingSerializer(bookings, many=True).data
            return Response(data, status=status.HTTP_200_OK)
        return Response({'User Not Found': 'No such user exists.'},
                        status=status.HTTP_404_NOT_FOUND)
