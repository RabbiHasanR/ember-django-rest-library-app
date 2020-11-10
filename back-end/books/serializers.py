from rest_framework import serializers

from .models import Book

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ('id', 'title', 'release_year', 'library', 'author', 'created_at')