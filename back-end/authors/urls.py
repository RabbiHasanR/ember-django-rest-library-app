from django.urls import path
from .views import AuthorList, AuthorDetail

urlpatterns = [
    path('<int:pk>/', AuthorDetail.as_view()),
    path('', AuthorList.as_view()),
]