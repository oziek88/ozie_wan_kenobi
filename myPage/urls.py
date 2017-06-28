from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.home, name='home'),
    url(r'^Sasha/$', views.Sasha, name='Sasha'),
    url(r'^Ozie/$', views.Ozie, name='Ozie')
]