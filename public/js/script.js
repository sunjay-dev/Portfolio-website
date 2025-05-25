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
    }).then(res => {
        if (!res.ok) throw new Error('Something wrong happened!');
        return res.json();
    }).then(data => {
        console.log(data);
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

let projects = [
    {
        imgUrl: "/img/uniRide.png",
        name: "UniRide - Carpooling Website",
        technology: ["Socket.io", "Passport.js", "Resend", "Tailwind CSS", "MongoDB"],
        time: "Jan - Feb 2025",
        url: "https://uniride.sunjay.xyz",
        description: "UniRide is a university-based carpooling website that connects students for shared rides. Users can create, join, or cancel rides in real-time, view ride history, and receive instant updates."
    },
    {
        imgUrl: "/img/weatherWeb.png",
        name: "Weather Web App using Redis",
        technology: ["Redis", "Express.js", "EJS", "Vercel"],
        time: "Mar 2025",
        url: "https://weather.sunjay.xyz",
        description: "Weather Web App helps to quickly check the current weather of any city. It shows real-time information in a clean and simple interface, making it easy to plan your day."
    },
    {
        imgUrl: "/img/urlShortner.png",
        name: "URL Shortner",
        technology: ["Passport.js", "Express.js", "EJS", "MongoDB", "Vercel"],
        time: "Dec 2024",
        url: "https://go.sunjay.xyz",
        description: "A user-friendly tool that transforms lengthy links into concise, easy-to-share ones. It also tracks each short link accessed, along with other useful details to help you manage your links efficiently."
    }
]
let projectsDiv = document.querySelector('#projectsDiv');
projects.forEach(project => {

    projectsDiv.innerHTML += `
    <div onclick="window.open('${project.url}', '_blank')" class="cursor-pointer group mt-14 grid md:grid-cols-3 gride-col-1 gap-7 justify-between items-center transition duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:bg-[#f8f8f8] hover:p-4 rounded-xl">
        <img src="${project.imgUrl}" class="md:col-span-1 w-full max-h-44 object-cover select-none">
            <div class="md:col-span-2 space-y-2 p-2">
                <h3 class="text-xs font-medium">${project.time}</h3>
                <a href="${project.url}" target"_blank" class="hover:underline text-lg sm:text-xl font-semibold flex items-center">${project.name} <iconify-icon
                        icon="heroicons:arrow-up-right-16-solid" class="ml-1  transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" width="16" height="16"></iconify-icon></a>
                <p class="font-normal opacity-80 selection:opacity-100">${project.description}</p>
                ${project.technology.map(tech => `
                <button class="px-3 py-1 rounded-full text-xs leading-5 bg-[#3d3d3d] text-gray-50">${tech}</button>`
    ).join('')}
            </div>
        </div>
    `
})

