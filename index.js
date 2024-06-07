$(document).ready(function() {
    $("#trabajoForm").on("submit", function(event) {
        event.preventDefault();

        let isValid = true;

        const rut = $("#Rut").val();
        const nombre = $("#Nombre").val();
        const apellidoPaterno = $("#ApellidoPaterno").val();
        const apellidoMaterno = $("#ApellidoMaterno").val();
        const edad = $("#Edad").val();
        const genero = $("#Genero").val();
        const celular = $("#Celular").val();

        if (rut.length < 9 || rut.length > 10) {
            alert("El Rut debe tener entre 9 y 10 caracteres.");
            isValid = false;
        }

        if (nombre.length < 3 || nombre.length > 20) {
            alert("El Nombre debe tener entre 3 y 20 caracteres.");
            isValid = false;
        }

        if (apellidoPaterno.length < 3 || apellidoPaterno.length > 20) {
            alert("El Apellido Paterno debe tener entre 3 y 20 caracteres.");
            isValid = false;
        }

        if (apellidoMaterno.length < 3 || apellidoMaterno.length > 20) {
            alert("El Apellido Materno debe tener entre 3 y 20 caracteres.");
            isValid = false;
        }

        if (edad < 18 || edad > 35) {
            alert("La Edad debe estar entre 18 y 35 años.");
            isValid = false;
        }

        if (genero === "") {
            alert("Debe seleccionar un Género.");
            isValid = false;
        }

        if (celular.length < 9 || celular.length > 12) {
            alert("El Celular debe tener entre 9 y 12 caracteres.");
            isValid = false;
        }

        if (isValid) {
            alert("Formulario enviado correctamente.");
            this.submit();
        }
    });

    $("#crearCarta").on("click", function() {
        const nombre = $("#Nombre").val();
        const apellidoPaterno = $("#ApellidoPaterno").val();
        const apellidoMaterno = $("#ApellidoMaterno").val();
        const motivacion = $("#Motivacion").val();

        const carta = `
            Estimados Señores,

            Me dirijo a ustedes con el propósito de postular al trabajo de apoyo ambiental en Chiloé. Mi nombre es ${nombre} ${apellidoPaterno} ${apellidoMaterno}, y estoy muy interesado en formar parte de su equipo.

            Motivación:
            ${motivacion}

            Atentamente,
            ${nombre} ${apellidoPaterno} ${apellidoMaterno}
        `;

        $("#carta").val(carta);
    });
});
