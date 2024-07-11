from django.db import models
from django.contrib.auth.models import User
from django import forms
from crispy_forms.helper import FormHelper
from crispy_forms.layout import Submit

class Producto(models.Model):
    id=models.IntegerField(primary_key=True)
    nombre=models.CharField(max_length=100)
    descripcion=models.CharField(max_length=100)
    imagen=models.CharField(max_length=100)
    precio=models.IntegerField(default=0)
    cantidad=models.IntegerField(default=0)
    oferta=models.IntegerField(default=0)
    categoria=models.CharField(max_length=100)

    def __str__(self):
        return self.nombre
    class Meta:
        db_table = 'Producto'
        verbose_name = 'Producto'
        verbose_name_plural = 'Productos'
        ordering = ['id']

class UserProfileForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email'] 
    def init(self, args, **kwargs):
        super(UserProfileForm, self).init(args, **kwargs)
        self.helper = FormHelper()
        self.helper.form_method = 'post'
        self.helper.add_input(Submit('submit', 'Actualizar'))
