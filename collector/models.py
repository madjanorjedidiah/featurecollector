from django.db import models

# Create your models here.



class Collect(models.Model):
	feature_name = models.CharField(max_length=50, null=True, blank=True)
	lat = models.FloatField(null=True, blank=True)
	lon = models.FloatField(null=True, blank=True)


	def __str__(self):
		return self.feature_name

