from django.db import models
from libraries.models import Library
from authors.models import Author

class Book(models.Model):
    title = models.CharField(max_length=100)
    release_year = models.DateField()
    library = models.ForeignKey(Library, on_delete=models.CASCADE)
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title