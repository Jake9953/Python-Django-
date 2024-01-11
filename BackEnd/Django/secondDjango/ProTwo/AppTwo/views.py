from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index_view(requests):
  return HttpResponse('<em>My Second App<?em>')


def help(request):
  help_Dic = {'help_insert':'HELP PAGE'}
  return render(request,'AppTwo/help.html',context=help_Dic)