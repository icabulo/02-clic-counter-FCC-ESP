
# React-FreeCodeCamp-ESP

Aprendiendo React con el canal de YouTube de FreeCodeCamp en español. Los proyectos siguen el video: https://www.youtube.com/watch?v=6Jfk8ic3KVk.

## 02 Contador de clics
Crear un contador de clic: tutorial de https://youtu.be/6Jfk8ic3KVk?t=10159

1.1 Qué aprendí:

- conditional rendering
  - operador ternario para el className del botón de clic y botón de reiniciar
- Pasar funciones como props a los componentes Boton para que se ejecuten los event listeners de onClick.
  -las funciones manejarClic y reiniciarContador se crean en el contexto de App.jsx (componente padre) para poder modificar el estado.
- usar el hook useState para actualizar el estado de la variable numClics.
