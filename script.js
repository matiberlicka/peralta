document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario y recarga de la página

    // Obtiene los valores introducidos por el usuario
    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;

    // Crea un nuevo elemento de lista para mostrar los valores
    const newItem = document.createElement('li');
    newItem.textContent = ` ${name}, ${number}`;

    // Agrega el nuevo elemento a la lista de datos introducidos
    document.getElementById('output').appendChild(newItem);

    // Limpia los campos del formulario
    document.getElementById('userForm').reset();
});