from django.contrib import admin
from .models import User,ProductImage,Product
# Register your models here.
@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display=['id','name','email']

class ProductImagesInLine(admin.StackedInline):
    model = ProductImage
@admin.register(ProductImage)
class ProductImageAdmin(admin.ModelAdmin):
    list_display = ['product']


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['product_name','product_price']
    prepopulated_fields = {'product_name':('product_name',)}
    inlines = [
        ProductImagesInLine,
    ]
