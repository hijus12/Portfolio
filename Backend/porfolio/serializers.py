from rest_framework import serializers
from .models import Category, Project, Service


class ProjectSerializers(serializers.ModelSerializer):
    # Sérialiseur pour la lecture (affichage)
    category = serializers.StringRelatedField() #ceiite lign premet de rendre le nom du category au lieux de l'id qui donner de base
    class Meta:
        model = Project
        fields = [ "id","category", "name", "description", "image", "create_at"]
        read_only_fields = ['id', 'create_at']

class ProjectCreateSerializers(serializers.ModelSerializer):
    # Sérialiseur pour la création (écriture)
    class Meta:
        model = Project
        fields = [ "id","category", "name", "description", "image", "create_at"]
        read_only_fields = ['id', 'create_at']
        


class CategorySerializers(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields  = ['id', 'title', 'create_at']
        read_only_fields = ['id', 'create_at']


class ServiceSerializers(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = [
            'id', 'title', 'description', 'icon', 'features', 
            'price', 'popular', 'active', 'order', 'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']