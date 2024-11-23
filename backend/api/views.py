from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Event, Speaker
from .serializers import EventSerializer, SpeakerSerializer

class AddSpeakerAPIView(APIView):
    def post(self, request):
        serializer = SpeakerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SpeakerListAPIView(APIView):
    def get(self, request):
        speakers = Speaker.objects.all()  # Get all speakers
        serializer = SpeakerSerializer(speakers, many=True)  # Serialize the speakers
        return Response(serializer.data, status=status.HTTP_200_OK)

class AddEventAPIView(APIView):
    def post(self, request):
        serializer = EventSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class EventListAPIView(APIView):
    def get(self, request):
        events = Event.objects.all()  # Get all events
        serializer = EventSerializer(events, many=True)  # Serialize the events
        return Response(serializer.data, status=status.HTTP_200_OK)

