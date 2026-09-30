from django.urls import path
from .views import mensagem_boas_vindas, api_root

urlpatterns = [
    path('', api_root, name='api_root'),  # Mapeia a raiz http://127.0.0.1:8000/
    path('api/mensagem/', mensagem_boas_vindas, name='mensagem_boas_vindas'),
]