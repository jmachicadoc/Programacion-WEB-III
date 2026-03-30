console.log (`Conveniente utilizar un Callback:
    Para tareas muy simples y únicas, como un evento de clic o un temporizador (setTimeout).
    Cuando la lógica no requiere pasos sucesivos complejos.Desventaja: Si encadenas muchos, caes en el Callback Hell (un código en forma de pirámide muy difícil de leer).
    -----------------------------------------------------------
Necesario utilizar una Promesa: 
    Cuando tienes operaciones encadenadas (ej. primero consultar una base de datos, luego procesar el resultado y finalmente enviarlo por red).
    Para un mejor manejo de errores mediante .catch(). 
    Cuando necesitas esperar a que varias tareas terminen al mismo tiempo (Promise.all). 
    Es el estándar moderno; la mayoría de las librerías actuales de Node.js devuelven promesas`);