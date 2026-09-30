from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def mensagem_boas_vindas(request):
    data = {
        "mensagem": "Olá! Esta mensagem veio do backend Django via API REST!"
    }
    return Response(data)



@api_view(['GET'])
def api_root(request):
    return Response({
        "status": "API Django online",
        "endpoints": {
            "mensagem": "/api/mensagem/"
        }
    })