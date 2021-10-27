from rest_framework import permissions


class HouseDetailPermission(permissions.BasePermission):

    message = 'You can only view Tremont!'

    def has_object_permission(self, request, view, obj):
        # print("I'm being used!")
        # return obj.name == "Tremont"
        return True