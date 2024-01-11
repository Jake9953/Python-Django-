from django.conf.urls import url
from django.urls import path
from AppTwo import views

urlpatterns = [
  path("",views.help, name='help')
]
