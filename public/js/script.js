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
            message.value = '';
        }).catch(error => {
            console.log(error)
        })
};




let skills = [
  { name: "JavaScript", icon: "javascript" },
  { name: "TypeScript", icon: "typescript-icon" },
  { name: "Bootstrap", icon: "bootstrap" },
  { name: "Tailwind CSS", icon: "tailwindcss-icon" },
  { name: "SASS", icon: "sass" },
  { name: "Docker", icon: "docker-icon" },
  { name: "AWS", icon: "aws" },
  { name: "Git", icon: "git-icon" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Express", icon: "express" },
  { name: "MongoDB", icon: "mongodb-icon" },
  { name: "MySQL", icon: "mysql" },
  { name: "Redis", icon: "redis" },
  { name: "Kafka", icon: "kafka" },
  { name: "Puppeteer", icon: "puppeteer" },
  { name: "WordPress", icon: "wordpress-icon" }
];

let skillsDiv = document.querySelector('#skills');
skills.forEach(skill => {

    skillsDiv.innerHTML += `
    <div title="${skill.name}" class="flex space-x-2 sm:items-center cursor-pointer items-end border rounded-md p-4 hover:bg-zinc-100">
            <iconify-icon icon="logos:${skill.icon}" width="24" height="24"></iconify-icon>
            <p class="sm:text-xl text-sm text-[1rem] text-[#3d3d3d] font-normal">${skill.name}</p>
        </div>
    `
})