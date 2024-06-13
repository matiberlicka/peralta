document.addEventListener('DOMContentLoaded', () => {
    const idForm = document.getElementById('id-form');
    const dataForm = document.getElementById('data-form');
    const idInput = document.getElementById('id-input');
    const nameInput = document.getElementById('name-input');
    const numberInput = document.getElementById('number-input');
    const outputDiv = document.getElementById('output');
    const copyButton = document.getElementById('copy-button');
    const editIdButton = document.getElementById('edit-id-button');
    const deleteLastButton = document.getElementById('delete-last-button');

    const entries = [];

    idForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const id = idInput.value.trim();
        if (id) {
            localStorage.setItem('uniqueId', id);
            idInput.disabled = true;
            idForm.querySelector('button[type="submit"]').disabled = true;
            dataForm.style.display = 'block';
            outputDiv.innerHTML = `<p>Territorio Nro: ${id}</p>`;
            copyButton.style.display = 'block';
            editIdButton.style.display = 'block';
            deleteLastButton.style.display = 'block';
        }
    });

    dataForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = nameInput.value.trim();
        const number = numberInput.value;
        if (name && number) {
            const entry = `<p>${name}: ${number}</p>`;
            outputDiv.innerHTML += entry;
            entries.push(entry);
            nameInput.value = '';
            numberInput.value = '';
        }
    });

    copyButton.addEventListener('click', () => {
        const range = document.createRange();
        range.selectNode(outputDiv);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        try {
            document.execCommand('copy');
            alert('DATOS COPIADOS, LISTO PARA ENVIAR POR WASAP');
        } catch (err) {
            console.error('Error al copiar al portapapeles', err);
        }
        window.getSelection().removeAllRanges();
    });

    editIdButton.addEventListener('click', () => {
        idInput.disabled = false;
        idForm.querySelector('button[type="submit"]').disabled = false;
        idInput.focus();
    });

    deleteLastButton.addEventListener('click', () => {
        if (entries.length > 0) {
            entries.pop();
            outputDiv.innerHTML = `<p>ID: ${localStorage.getItem('uniqueId')}</p>` + entries.join('');
        }
    });

    const savedId = localStorage.getItem('uniqueId');
    if (savedId) {
        idInput.value = savedId;
        idInput.disabled = true;
        idForm.querySelector('button[type="submit"]').disabled = true;
        dataForm.style.display = 'block';
        outputDiv.innerHTML = `<p>Territorio Nro: ${savedId}</p>`;
        copyButton.style.display = 'block';
        editIdButton.style.display = 'block';
        deleteLastButton.style.display = 'block';
    }
});