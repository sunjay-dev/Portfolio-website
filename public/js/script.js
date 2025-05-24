let form = document.querySelector('form');

form.querySelectorAll('input, textarea').forEach(field => {
    field.addEventListener('input', () => {
        field.classList.remove('border-red-500');
});
});
form.onsubmit = (e) => {
    e.preventDefault();

    let name = form.querySelector('#name');
    if (!name.value.trim()) {
        name.classList.add('border-red-500');
        return;
    }
    let email = form.querySelector('#email');
    if (!email.value.trim()) {
        email.classList.add('border-red-500');
        return;
    }
    let message = form.querySelector('#message');
    if (!message.value.trim()) {
        message.classList.add('border-red-500');
        return;
    }

    fetch('/api/email', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name.value,
            email: email.value,
            message: message.value
        })
    }).then(res => { return res.json() })
        .then(data => {
        email.value = '';
        name.value = '';
        message.value ='';
        }).catch(error => {
            console.log(error)
        })
};

