from rest_framework import serializers
from .models import Event, Speaker

class SpeakerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Speaker
        fields = ['id', 'name']

class EventSerializer(serializers.ModelSerializer):
    # Display speaker names in GET responses
    speakers = serializers.StringRelatedField(many=True, read_only=True)
    # Accept speaker IDs in POST requests
    speaker_ids = serializers.PrimaryKeyRelatedField(
        queryset=Speaker.objects.all(), many=True, write_only=True
    )

    class Meta:
        model = Event
        fields = ['id', 'title', 'date', 'time', 'location', 'budget', 'speakers', 'speaker_ids']

    def create(self, validated_data):
        # Extract speaker IDs from the validated data
        speaker_ids = validated_data.pop('speaker_ids', [])
        event = Event.objects.create(**validated_data)
        event.speakers.set(speaker_ids)
        return event
