from django.db import models

# Create your models here.
class Product(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=200)
    price = models.CharField(max_length=30)

    # Website 
    ebay = models.CharField(max_length=50)
    subito = models.CharField(max_length=50)
    vinted = models.CharField(max_length=50)

    class Meta:
        verbose_name = "Product"
        verbose_name_plural = "Products"

    def __str__(self):
        return f'{self.title}'