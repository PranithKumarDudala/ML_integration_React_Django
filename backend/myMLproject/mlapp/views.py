from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

from joblib import load
import numpy as np
model = load('./../../iris_model.pkl')

@api_view(['POST'])
def predict(request):
    data = request.data.get('data')
    data = data.get('features')
    data = np.array(data).reshape(1,-1)
    predicted = model.predict(data)
    ans = ""
    if predicted[0] == 0:
        ans = "Setosa"
    elif predicted[0] == 1:
        ans = "Versicolor"
    elif predicted[0] == 2:
        ans = "Virginica"
        
    return Response({'predicted' : ans})

# Create your views here.
