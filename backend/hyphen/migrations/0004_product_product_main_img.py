# Generated by Django 4.2.3 on 2023-10-18 09:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hyphen', '0003_alter_product_product_ingredient'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='product_main_img',
            field=models.ImageField(blank=True, null=True, upload_to='images/'),
        ),
    ]
