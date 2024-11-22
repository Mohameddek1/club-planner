from django.urls import path
from .views import AddSpeakerAPIView, AddEventAPIView

urlpatterns = [
    path('add-speaker/', AddSpeakerAPIView.as_view(), name='add_speaker_api'),
    path('add-event/', AddEventAPIView.as_view(), name='add_event_api'),
]
