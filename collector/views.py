from django.shortcuts import render
from django.http import HttpResponse
from .models import *




def index(request):
	return render(request, 'index.html')


def save_feature(request):
	if request.method == 'POST':
		feature_name = request.POST.get('feature_name')
		lat = request.POST.get('lat')
		lon = request.POST.get('lon')

		save_data = Collect.objects.create(feature_name=feature_name, lat=lat, lon=lon)
		return HttpResponse('done')
	return render(request, 'index.html')

