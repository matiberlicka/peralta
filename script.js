let currentSquare = null;

function showColorOptions(square) {
    currentSquare = square;
    const colorOptions = document.getElementById('colorOptions');
    colorOptions.style.display = 'block';
}

function changeColor(color) {
    if (currentSquare) {
        currentSquare.style.backgroundColor = color;
        closeColorOptions();
    }
}

function closeColorOptions() {
    const colorOptions = document.getElementById('colorOptions');
    colorOptions.style.display = 'none';
    currentSquare = null;
}

function updateTime() {
    const now = new Date();
    const datetime = document.getElementById('datetime');
    datetime.textContent = "Fecha y hora actual: " + now.toLocaleString();
}

function saveName() {
    const name = document.getElementById('conductorInput').value;
    const savedName = document.getElementById('savedName');
    savedName.textContent = "Conductor: " + name;
    savedName.style.display = 'block';
}
  
updateTime(); // Actualizar la hora al cargar la página
setInterval(updateTime, 1000); // Actualizar la hora cada segundo






function takeScreenshot() {
    const container = document.querySelector('.container');
    
    html2canvas(container).then(canvas => {
        // Convertir la captura de pantalla a una URL de datos
        const screenshot = canvas.toDataURL('image/png');

        // Crear un enlace temporal para descargar la imagen
        const link = document.createElement('a');
        link.href = screenshot;
        link.download = 'screenshot.png';
        
        // Simular clic en el enlace para descargar la imagen
        link.click();
    });
}