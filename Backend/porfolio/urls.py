from . import views
from django.urls import path
from django.contrib import admin
from django.views.generic import View

urlpatterns = [
    # Project and Category endpoints
    path('project/', views.ProjectListeCreatView.as_view()),
    path('project/<int:id>/', views.ProjectRetrieveUpdateDestroyAPIView.as_view()),
    path('category/', views.CategoryListeCreatView.as_view()),
    path('category/<int:id>/', views.CategoryRetrieveUpdateDestroyAPIView.as_view()),
    
    # Service endpoints
    path('service/', views.ServiceListCreateView.as_view()),
    path('service/<int:id>/', views.ServiceRetrieveUpdateDestroyAPIView.as_view()),
    
    # Authentication endpoints
    path('auth/register/', views.register_user, name='register'),
    path('auth/login/', views.login_user, name='login'),
    path('auth/profile/', views.get_user_profile, name='profile'),
]
 