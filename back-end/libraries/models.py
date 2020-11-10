from django.db import models

class Library(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=250)
    phone = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
