from django.shortcuts import render

from django.shortcuts import render

def cv_view(request):
    # Data that was previously in JavaScript
    skills = [
        {'name': 'Mysql', 'level': 'básico'},
        {'name': 'CSS', 'level': 'intermedio'},
        {'name': 'Windows server', 'level': 'básico'},
        {'name': 'Django', 'level': 'intermedio'},
        {'name': 'Python', 'level': 'intermedio'},
        {'name': 'Javascript', 'level': 'intermedio'},
        {'name': 'HTML', 'level': 'intermedio'},
        {'name': 'Flask', 'level': 'intermedio'},
        {'name': 'MongoDB', 'level': 'básico'},
        {'name': 'React', 'level': 'intermedio'},
        {'name': 'API REST', 'level': 'intermedio'},
        {'name': 'Diseño UX/UI', 'level': 'básico'}
    ]
    
    context = {
        'skills': skills,
        'personal_info': {
            'name': 'Javier Ignacio Poblete Piutrin',
            'title': 'Estudiante de Ingeniería en Informática',
            'birth_date': '08 Julio 2003',
            'ci': '21.056.382-2',
            'nationality': 'Chilena',
            'civil_status': 'Soltero',
            'address': 'El bosque #10682 block 34 Dpto 11 La Pintana',
            'email': 'javierignaciopobletec@gmail.com',
            'phone': '(+56)984853052'
        }
    }
    return render(request, 'curriculum/cv.html', context)

# Create your views here.
