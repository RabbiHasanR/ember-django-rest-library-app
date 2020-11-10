from django.db import models

class Contact(models.Model):
    email = models.CharField(max_length=50)
    message = models.CharField(max_length=250)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.email
