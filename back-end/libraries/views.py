from rest_framework import generics

from .models import Library
from .serializers import LibrarySerializer

class LibraryList(generics.ListCreateAPIView):
    queryset = Library.objects.all()
    serializer_class = LibrarySerializer

class LibraryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Library.objects.all()
    serializer_class = LibrarySerializer
