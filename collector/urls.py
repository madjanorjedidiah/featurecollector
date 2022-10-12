from django.urls import path
from . import views

urlpatterns = [
	path('', views.index, name='map'),
	path('save_feature', views.save_feature, name='save_feature'),
]