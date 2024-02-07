from django.contrib import admin
from django.urls import path,include
from rest_framework.routers import DefaultRouter 
from . import views
router = DefaultRouter() 
router.register('product',views.ProductViewSet,basename='Product')

router.register('user',viewset=views.UserViewSet,basename='user')

urlpatterns = [
    path('auth/',include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('',include(router.urls)),  
    path('users/google_save/', views.UserViewSet.as_view({'post': 'google_save_data'}), name='user-google-save'),
]
