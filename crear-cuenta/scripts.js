function initScripts() {
    // 1. Ojo de Contraseña 1
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('passwordInput');
    
    if (togglePassword && passwordInput) {
        // Asegurarse de que el cursor cambie para que sepamos que es clickeable
        togglePassword.style.cursor = 'pointer';
        
        togglePassword.addEventListener('click', function (e) {
            e.preventDefault();
            const isPassword = passwordInput.getAttribute('type') === 'password';
            passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
            
            // Efecto visual y Ocultar/Mostrar la línea cruzada
            const line = togglePassword.querySelector('line');
            if (isPassword) {
                togglePassword.style.color = '#9c27b0'; /* Color acentuado cuando se ve */
                if(line) line.style.display = 'none';
            } else {
                togglePassword.style.color = '#b0b0b0'; /* Color apagado cuando oculto */
                if(line) line.style.display = 'block';
            }
        });
    }

    // 2. Ojo de Contraseña 2 (Confirmación)
    const togglePassword2 = document.getElementById('togglePassword2');
    const passwordInput2 = document.getElementById('passwordInput2');
    
    if (togglePassword2 && passwordInput2) {
        togglePassword2.style.cursor = 'pointer';
        
        togglePassword2.addEventListener('click', function (e) {
            e.preventDefault();
            const isPassword = passwordInput2.getAttribute('type') === 'password';
            passwordInput2.setAttribute('type', isPassword ? 'text' : 'password');
            
            // Efecto visual y Ocultar/Mostrar la línea cruzada
            const line = togglePassword2.querySelector('line');
            if (isPassword) {
                togglePassword2.style.color = '#9c27b0';
                if(line) line.style.display = 'none';
            } else {
                togglePassword2.style.color = '#b0b0b0';
                if(line) line.style.display = 'block';
            }
        });
    }

    // 3. Envío del Formulario (Evita recarga de página y levanta ventana modal)
    const registroForm = document.getElementById('registroForm');
    const modalVerificacion = document.getElementById('modalVerificacion');
    const btnAceptarModal = document.getElementById('btnAceptarModal');

    if (registroForm) {
        registroForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Detiene el envío estático predeterminado
            if(modalVerificacion) modalVerificacion.classList.add('active'); // Llama nuestra alerta animada
        });
    }

    if (btnAceptarModal) {
        btnAceptarModal.addEventListener('click', function(e) {
            e.preventDefault();
            if(modalVerificacion) modalVerificacion.classList.remove('active');
            window.location.href = '../index.html'; // Te devuelve a la página principal de inicio
        });
    }
}

// Inicialización infalible para asegurar que los scripts agarren el DOM independientemente de los cachés de carga
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScripts);
} else {
    initScripts();
}
