from django.urls import path
from .views import LibraryList, LibraryDetail

urlpatterns = [
    path('<int:pk>/', LibraryDetail.as_view()),
    path('', LibraryList.as_view()),
]