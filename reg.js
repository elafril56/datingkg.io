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
            alert('Регистрация прошла успешно!');
            window.location.href = 'payments.html'; // Переход на success.html
        } else {
            alert('Ошибка при регистрации.');
        }
    });
});
