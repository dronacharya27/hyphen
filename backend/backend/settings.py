from pathlib import Path
import os
# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

from datetime import timedelta
# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-mz&ajsakqr5yvk0r33li#ztivriff1z%r9_nhh=*g!hh&+^9b!'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['192.168.1.36','localhost','127.0.0.1','dron2708.pythonanywhere.com']


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    "corsheaders",
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'hyphen',
    'rest_framework',
    'djoser',
    "cloudinary",
    "cloudinary_storage"
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
     "corsheaders.middleware.CorsMiddleware",
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'backend.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'backend.wsgi.application'


# Database
# https://docs.djangoproject.com/en/4.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}


# Password validation
# https://docs.djangoproject.com/en/4.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.2/howto/static-files/

STATIC_URL = 'static/'
STATIC_ROOT=os.path.join(BASE_DIR,'static')
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR,'media')

# #Cloudinary
# CLOUDINARY_STORAGE = {
#     'CLOUD_NAME':'dsvsptlwm',
#     'API_KEY':'244164334563411',
#     'API_SECRET':'haEOHcAKQ-4AtEe1IbHo5UAUZ1Q'

# }

# DEFAULT_FILE_STORAGE = 'cloudinary_storage.storage.MediaCloudinaryStorage'

# Default primary key field type
# https://docs.djangoproject.com/en/4.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# EMAIL CONFIGURATION 
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT=587
EMAIL_HOST_USER = os.environ.get('USER_MAIL')
EMAIL_HOST_PASSWORD = os.environ.get('USER_PASS')
EMAIL_USE_TLS = True

AUTH_USER_MODEL = 'hyphen.User'
# DJOSER ENDPOINTS
DOMAIN = ('localhost:5173') 
# SITE_NAME = ('login')
DJOSER = {
    'LOGIN_FIELD' : 'email',
    'USER_CREATE_PASSWORD_RETYPE':True,
    'SEND_CONFIRMATION_EMAIL':True,
    'PASSWORD_CHANGED_EMAIL_CONFIRMATION':True,
    'PASSWORD_RESET_CONFIRM_URL': 'password-reset/{uid}/{token}',
    'PASSWORD_RESET_CONFIRM_RETYPE':True,
    'SET_PASSWORD_RETYPE' : True,
    'PASSWORD_RESET_SHOW_EMAIL_NOT_FOUND':True,
    'TOKEN_MODEL':None,
    'SERIALIZERS' : {'user': 'hyphen.serializers.CustomerUserSerializer',
                   'user_create': 'hyphen.serializers.CustomerUserSerializer',
                    }


}


CORS_ALLOWED_ORIGINS = [
    "https://hyphen-kriti.vercel.app",
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

# REST FRAMEWORK 
REST_FRAMEWORK = {
    # 'DEFAULT_PERMISSION_CLASSES':(
    #     'rest_framework.permissions.IsAuthenticated',
    # ),
    'DEFAULT_AUTHENTICATION_CLASSES': (
       'rest_framework_simplejwt.authentication.JWTAuthentication',
        
    )
}
# SIMPLE JWT CONFIG
SIMPLE_JWT = {
    'AUTH_HEADER_TYPES': ('JWT',),
    "ACCESS_TOKEN_LIFETIME": timedelta(minutes=20),
    "REFRESH_TOKEN_LIFETIME": timedelta(days=1),
    "ROTATE_REFRESH_TOKENS": True,
    "UPDATE_LAST_LOGIN": False,
}

