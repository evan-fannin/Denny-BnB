# Generated by Django 3.2.5 on 2021-10-31 17:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_auto_20211029_1808'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customuser',
            name='user_name',
        ),
    ]
