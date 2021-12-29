from rest_framework import permissions


# class HouseDetailPermission(permissions.BasePermission):
#
#     message = 'You can only view Tremont!'
#
#     def has_object_permission(self, request, view, obj):
#         # print("I'm being used!")
#         # return obj.name == "Tremont"
#         return True

class UserBookingPermission(permissions.BasePermission):
    message = 'This booking is restricted to the user who created it.'

    def has_object_permission(self, request, view, obj):
        print("being used")
        return obj.user == request.user
