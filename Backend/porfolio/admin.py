from django.contrib import admin

from porfolio.models import Category, Project, Service


class AdminCategory(admin.ModelAdmin):
    list_display = ('title', "create_at")

class AdminProject(admin.ModelAdmin):
    list_display = ('name', 'category', 'create_at')
    list_filter = ('category', 'create_at')
    search_fields = ('name', 'description')

class AdminService(admin.ModelAdmin):
    list_display = ('title', 'price', 'popular', 'active', 'order', 'created_at')
    list_filter = ('active', 'popular', 'created_at')
    search_fields = ('title', 'description')
    list_editable = ('popular', 'active', 'order')
    ordering = ('order', 'created_at')

# Register your models here.
admin.site.register(Project, AdminProject)
admin.site.register(Category, AdminCategory)
admin.site.register(Service, AdminService)