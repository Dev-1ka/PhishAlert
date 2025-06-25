
        document.addEventListener('DOMContentLoaded', () => {
            const userEmail = localStorage.getItem('userEmail');
            const isLoggedIn = localStorage.getItem('isLoggedIn');
            if (!isLoggedIn) window.location.href = 'signin.html';
            if (userEmail) document.getElementById('welcomeUser').textContent = `Welcome, ${userEmail}!`;
        });

        document.getElementById('scanForm').addEventListener('submit', function (e) {
            e.preventDefault();
            const url = document.getElementById('urlInput').value.trim();
            if (!url) return;

            const loading = document.getElementById('loadingSpinner');
            const result = document.getElementById('resultAlert');
            result.style.display = 'none';
            loading.style.display = 'block';

            setTimeout(() => {
                const isSafe = Math.random() < 0.5;
                const icon = isSafe ? '✅' : '🚨';
                const title = isSafe ? 'Safe Link' : 'Malicious Link';
                const message = isSafe ? 'This link appears safe.' : 'This link appears malicious!';
                const alertClass = isSafe ? 'alert-success' : 'alert-danger';

                result.className = `alert result-alert ${alertClass}`;
                document.getElementById('resultIcon').textContent = icon;
                document.getElementById('resultTitle').textContent = title;
                document.getElementById('resultMessage').textContent = message;

                loading.style.display = 'none';
                result.style.display = 'block';
                document.getElementById('urlInput').value = '';
            }, 2000);
        });

        function logout() {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('userEmail');
            window.location.href = 'index.html';
        }
    