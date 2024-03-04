document.addEventListener("DOMContentLoaded", function() {
    // Agrega listener al boton de envío del formulario
    document.getElementById("formulario-contacto").addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente

        // Validar el formulario
        // Se usa la funcion trim() para que elimine los espacios en blanco que pudieran existir en el value
        let nombre = document.getElementById("nombre").value.trim();
        let email = document.getElementById("email").value.trim();
        let telefono = document.getElementById("telefono").value.trim();
        let mensaje = document.getElementById("mensaje").value.trim();

        // Validar que no existan campos vacíos
        if (nombre === "" || email === "" || telefono === "" || mensaje === "") {
            alert("Por favor, complete todos los campos.");
            return;
        }

        // Validar el formato del email
        let patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!patronEmail.test(email)) {
            alert("Por favor, ingrese un correo electrónico válido.");
            return;
        }

        // Validar que el teléfono contenga solo números
        let patronTelefono = /^\d+$/;
        if (!patronTelefono.test(telefono)) {
            alert("Por favor, ingrese un número de teléfono válido.");
            return;
        }

        // Si la validación es exitosa, enviar el formulario
        alert("Formulario enviado correctamente.");
        document.getElementById("formulario-contacto").submit();
    });
});
