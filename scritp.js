document.addEventListener('DOMContentLoaded', () => {
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('passwordInput');
    const eyeSlash = document.getElementById('eyeSlash');

    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', () => {
            // Alternar el tipo de input
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            
            // Mostrar u ocultar la línea que tacha el ojito
            if (type === 'text') {
                eyeSlash.style.display = 'none';
            } else {
                eyeSlash.style.display = 'block';
            }
        });
    }
});
