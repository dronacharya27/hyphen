from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import Product,User
from .serializers import ProductSerializer,CustomerUserSerializer
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response
import json
# Create your views here.

class ProductViewSet(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class= ProductSerializer
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    parser_classes = (MultiPartParser, FormParser)

class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = CustomerUserSerializer

    def google_save_data(self,request):
        if(request.method=='POST'):
            existing_user = User.objects.filter(email=request.data.get('email')).first()
        
            if(existing_user):
                    refresh = RefreshToken.for_user(existing_user)
                    print(refresh)
                    access = str(refresh.access_token)
                    
                    return Response({"refresh":str(refresh),"access":access},status=status.HTTP_200_OK)
            else:
                serializer = CustomerUserSerializer(data=request.data)
                if(serializer.is_valid()):
                    new_user=serializer.save()
                    new_user = User.objects.get(email = new_user)
                    new_user.is_active=True
                    new_user.save()
                    refresh = RefreshToken.for_user(new_user)
                    access = json.dumps(refresh.access_token)
                    return Response({"data":str(new_user),"access":access,"refresh":str(refresh)},status=status.HTTP_200_OK)
                return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    