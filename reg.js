document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const webhookUrl = 'https://discordapp.com/api/webhooks/1299013641084866674/PKIfals7J4p1kYsUJCQesFHK06vZKKR_dL2T_cLvxFylqnsEweKVADcKz-N_Ej4yzNRv';

    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        city: document.getElementById('city').value,
        age: document.getElementById('age').value,
        gender: document.getElementById('gender').value,
        preference: document.getElementById('preference').value,
    };

    fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: JSON.stringify(formData, null, 2) }),
    }).then(response => {
        if (response.ok) {
            showNotification('Регистрация прошла успешно!', 'success'); // Показываем уведомление об успехе
            window.location.href = 'payments.html'; // Переход на success.html
        } else {
            showNotification('Ошибка при регистрации.', 'error'); // Показываем уведомление об ошибке
        }
    }).catch(error => {
        console.error('Ошибка сети:', error);
        showNotification('Произошла ошибка. Пожалуйста, попробуйте еще раз.', 'error'); // Показываем уведомление о сети
    });
});

// Функция для отображения уведомлений
function showNotification(message, type) {
    const notification = document.getElementById('notification'); // Элемент для уведомлений
    notification.textContent = message;
    notification.className = type; // Добавляем класс для стилизации
    notification.style.display = 'block'; // Показываем уведомление

    setTimeout(() => {
        notification.style.display = 'none'; // Скрываем уведомление через 3 секунды
    }, 3000);
}
