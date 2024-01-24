from djoser.serializers import UserCreateSerializer
from .models import User,Product,ProductImage
from rest_framework import serializers
class CustomerUserSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model=User
        fields = ['id','name','email','password']
        extra_kwargs = {
            'password':{'write_only':True}
        }


class ProductImageSerializer(serializers.ModelSerializer):
       class Meta:
        model = ProductImage
        fields= ['id','image']

class ProductSerializer(serializers.ModelSerializer):
    product_img = ProductImageSerializer(many=True,read_only=True)
    uploaded_images = serializers.ListField(
        child = serializers.ImageField(max_length = 1000000,allow_empty_file = False,use_url = False),
        write_only=True
    )
    class Meta:
        model= Product
        fields = ['id','product_name','product_head_title','product_sub_title','product_description','product_ingredient','product_use','product_price','product_quantity','product_img','uploaded_images','product_main_img','product_what_it','product_what_does','product_how_does','product_how_use','product_when_use']
        
    def create(self, validated_data):
        uploaded_images = validated_data.pop("uploaded_images")
        product = Product.objects.create(**validated_data)
        for image in uploaded_images:
            ProductImage.objects.create(product=product,image = image)
        
        return product