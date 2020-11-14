from django.urls import path
from .views import InvitationList, InvitationDetail

urlpatterns = [
    path('<int:pk>/', InvitationDetail.as_view()),
    path('', InvitationList.as_view()),
]