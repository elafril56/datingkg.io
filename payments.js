function subscribe(plan) {
    const subscriptionWebhookUrl = 'https://discordapp.com/api/webhooks/1299013641084866674/PKIfals7J4p1kYsUJCQesFHK06vZKKR_dL2T_cLvxFylqnsEweKVADcKz-N_Ej4yzNRv';

    fetch(subscriptionWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: `Выбрана подписка: ${plan === 'month' ? '1 сом за месяц' : '300 сом за год'}` }),
    }).then(response => {
        if (response.ok) {
            showNotification('Подписка оформлена успешно!', 'success'); // Показываем уведомление об успехе
            window.location.href = 'card.html'; // Переход на success.html
        } else {
            showNotification('Ошибка при оформлении подписки.', 'error'); // Показываем уведомление об ошибке
        }
    }).catch(error => {
        console.error('Ошибка сети:', error);
        showNotification('Произошла ошибка. Пожалуйста, попробуйте еще раз.', 'error'); // Показываем уведомление о сети
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
