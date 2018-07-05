from django.shortcuts import render, HttpResponse

# Create your views here.
def index(request):
    return HttpResponse('hello Django')

def home(request):
    return render(request, 'index.html')

def newpage(request):
    return render(request, 'newpage.html')