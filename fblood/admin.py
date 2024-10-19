from django.contrib import admin
 # Import the model you want to register
from .models import Donar_donate_info,PreviousInfo,OTP,Feedback,BloodGroup,Districts_list

# Register your models here.
 

# Register your model
admin.site.register(Donar_donate_info)
admin.site.register(PreviousInfo)
admin.site.register(OTP)
admin.site.register(Feedback)
admin.site.register(BloodGroup)
admin.site.register(Districts_list)
