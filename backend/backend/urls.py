
from django.contrib import admin
from django.urls import path

from category.views import CategoryView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('category', CategoryView.as_view()),
]
