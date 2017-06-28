from django.shortcuts import render

def home(request):
    return render(request, 'home.html', {})

def Sasha(request):
    return render(request, 'Sasha.html', {})

def Ozie(request):
    return render(request, 'Ozie.html', {})
