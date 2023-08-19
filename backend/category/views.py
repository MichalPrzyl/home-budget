from django.shortcuts import render
from rest_framework import generics
from category.serializers import CategorySerializer
from category.models import Category


class CategoryView(generics.ListAPIView, generics.CreateAPIView):
    
    serializer_class = CategorySerializer
    queryset = Category.objects.all()

    
    def get(self, request):
        return self.list(request)
    
    def post(self, request):
        print(f"post fgunction")
        return self.create(request)