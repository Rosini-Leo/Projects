from django.shortcuts import render
from .models import Product

def home_view(request):
    return render(request, 'public/base.html')


def products_view(request):

    product = Product.objects.all()
    context = {"products" : product}
    return render(request, 'public/Products.html',context)