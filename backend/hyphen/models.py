from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser


class UserManager(BaseUserManager):
    def create_user(self, email, name, password=None):
        if not email:
            raise ValueError("Users must have an email address")

        user = self.model(
            email=self.normalize_email(email),
            name=name
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, name, password=None):
        user = self.create_user(
            email,
            password=password,
            name=name,
        )
        user.is_admin = True
        user.save(using=self._db)
        return user

# USER MODEL
class User(AbstractBaseUser):
    email = models.EmailField(
        verbose_name="email address",
        max_length=255,
        unique=True,
    )
    name = models.CharField(max_length=50)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    created_At = models.DateTimeField(auto_now_add=True)
    updated_At = models.DateTimeField(auto_now=True)

    objects = UserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["name"]

    def __str__(self): 
        return self.email

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        return self.is_admin

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        return True

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        return self.is_admin
    

# PRODUCT MODEL
class Product(models.Model):
    product_name = models.CharField(max_length=255)
    product_head_title = models.CharField(max_length=255)
    product_sub_title = models.CharField(max_length=255)
    product_description = models.CharField(max_length=2000)
    product_what_it =models.CharField(max_length=500,blank=True,null=True,default='')
    product_what_does =models.CharField(max_length=500,blank=True,null=True,default='')
    product_how_does =models.CharField(max_length=500,blank=True,null=True,default='')
    product_ingredient = models.CharField(max_length=2000)
    product_use = models.CharField(max_length=250)
    product_how_use = models.CharField(max_length=250,blank=True,null=True,default='')
    product_when_use = models.CharField(max_length=250,blank=True,null=True,default='')
    product_use = models.CharField(max_length=250)
    product_price = models.IntegerField()
    product_main_img = models.ImageField(upload_to='images/',null=True,blank=True)
    product_quantity =models.IntegerField(default=1)
    def __str__(self):
        return self.product_name
    
class ProductImage(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE,related_name='product_img')
    image = models.ImageField(upload_to='images/',null=True,blank=True)