function subscribe(plan) {
    const subscriptionWebhookUrl = 'https://discordapp.com/api/webhooks/1299013641084866674/PKIfals7J4p1kYsUJCQesFHK06vZKKR_dL2T_cLvxFylqnsEweKVADcKz-N_Ej4yzNRv';

    fetch(subscriptionWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: `Выбрана подписка: ${plan === 'month' ? '1 сом за месяц' : '300 сом за год'}` }),
    }).then(response => {
        if (response.ok) {
            alert('Подписка оформлена успешно!');
            window.location.href = 'http://127.0.0.1:5500/card.html'; // Переход на success.html
        } else {
            alert('Ошибка при оформлении подписки.');
        }
    });
}
