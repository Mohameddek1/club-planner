from django.urls import path
from .views import AddSpeakerAPIView, AddEventAPIView, EventListAPIView, SpeakerListAPIView

urlpatterns = [
    path('add-speaker/', AddSpeakerAPIView.as_view(), name='add_speaker_api'),
    path('add-event/', AddEventAPIView.as_view(), name='add_event_api'),
    path('', EventListAPIView.as_view(), name='event_list_api'),
    path('speakers', SpeakerListAPIView.as_view(), name='speakers'),
]
