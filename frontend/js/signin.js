document.getElementById('signinForm').addEventListener('submit', function(e) {
            e.preventDefault();
            clearErrors();

            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;

            let isValid = true;

            if (!email) {
                showError('emailError', 'Email is required');
                isValid = false;
            } else if (!isValidEmail(email)) {
                showError('emailError', 'Please enter a valid email address');
                isValid = false;
            }

            if (!password) {
                showError('passwordError', 'Password is required');
                isValid = false;
            }

            if (isValid) {
                localStorage.setItem('userEmail', email);
                localStorage.setItem('isLoggedIn', 'true');
                window.location.href = 'dashboard.html';
            }
        });

        function showError(elementId, message) {
            document.getElementById(elementId).textContent = message;
        }

        function clearErrors() {
            document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
        }

        function isValidEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }