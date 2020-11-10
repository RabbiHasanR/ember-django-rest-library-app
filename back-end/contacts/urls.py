from django.urls import path
from .views import ContactList, ContactDetail

urlpatterns = [
    path('<int:pk>/', ContactDetail.as_view()),
    path('', ContactList.as_view()),
]