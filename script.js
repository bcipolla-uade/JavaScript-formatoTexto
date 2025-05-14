document.addEventListener('DOMContentLoaded', function () {
    var formulario = document.getElementById('formulario');
    var mensaje = document.getElementById('mensaje');
    var nombreUsuario = document.getElementById('nombre-usuario');
    var diasVividos = document.getElementById('dias-vividos');
    var saludo = document.getElementById('saludo');

    function saludoAleatorio(){
        let saludos = ['¡Hola!', '¡Bienvenido!','¡Qué bueno verte!', '¡Saludos!' ];
        let nombres = ['Juan','Ana','Fausto','Carlos','María','Pedro','Lucía'];
        let nombreAleatorio = Math.floor(Math.random() * nombres.length);
        let aleatorio = Math.floor(Math.random() * saludos.length);
        return saludos[aleatorio]+" "+nombres[nombreAleatorio];

    }
    saludo.textContent=saludoAleatorio();

    // Validaciones
    var validarNombre = function () {
        const nombre = formulario.nombre.value;
        if (nombre.length == 0) {
            document.getElementById("error-nombre").style.display = "block";
            return false;
        }
        document.getElementById("error-nombre").style.display = "none";
        return true;
    };

    var validarEdad = function () {
        const edad = formulario.edad.value;
        if (edad == "") {
            document.getElementById("error-edad").style.display = "block";
            return false;
        }
        document.getElementById("error-edad").style.display = "none";
        return true;
    };

    var validarFechaNacimiento = function () {
        const fechaNacimiento = formulario['fecha-nacimiento'].value;
        if (fechaNacimiento == "") {
            document.getElementById("error-fecha-nacimiento").style.display = "block";
            return false;
        }
        document.getElementById("error-fecha-nacimiento").style.display = "none";
        return true;
    };

    // Función de validación general
    var validar = function () {
        return validarNombre() && validarEdad() && validarFechaNacimiento();
    };

    // Función para calcular los días vividos
    function calcularDiasVividos(fechaNacimiento) {
        const nacimiento = new Date(fechaNacimiento);
        const hoy = new Date();
        const diferencia = hoy - nacimiento;
        const diasVividos = Math.floor(diferencia / (1000 * 60 * 60 * 24)); // Convertir a días
        return diasVividos;
    }

    // Manejo del envío del formulario
    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        if (validar()) {
            // Simulación de éxito
            const nombre = formulario.nombre.value;
            const fechaNacimiento = formulario['fecha-nacimiento'].value;

            // Cálculo de los días vividos
            const dias = calcularDiasVividos(fechaNacimiento);

            // Mostrar mensaje
            nombreUsuario.textContent = nombre;
            diasVividos.textContent = dias;
            mensaje.style.display = "block"; // Mostrar el mensaje de bienvenida

            // Resetear el formulario
            formulario.reset();
        }
    });
});
