from rest_framework import serializers

from .models import Invitation

class InvitationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Invitation
        fields = ('id', 'email', 'created_at')