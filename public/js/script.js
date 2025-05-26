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

let skillsDiv = document.querySelector('#skillsDiv');
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
        name: "Weather Web using Redis",
        technology: ["Redis", "Express.js", "EJS", "Vercel"],
        time: "Mar 2025",
        url: "https://weather.sunjay.xyz",
        description: "It helps to quickly check the current weather of any city. It shows real-time information in a clean and simple interface, making it easy to plan your day."
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
    <div onclick="window.open('${project.url}', '_blank')" class="cursor-pointer group mt-14 grid md:grid-cols-3 gride-col-1 gap-4 md:gap-7 justify-between items-center transition duration-300 transform hover:scale-[1.02] sm:hover:shadow-lg sm:hover:bg-[#f8f8f8] sm:hover:p-4 sm:shadow-none shadow-lg sm:bg-transparent bg-[#f8f8f8] sm:p-0 p-4 rounded-xl">
        <img src="${project.imgUrl}" class="md:col-span-1 w-full max-h-44 object-cover select-none sm:p-0 p-2 rounded-xl sm:rounded-md">
            <div class="md:col-span-2 space-y-2 p-2">
                <h3 class="text-xs font-medium">${project.time}</h3>
                <a href="${project.url}" target"_blank" class="hover:underline group-hover:underline md:group-hover:no-underline text-lg sm:text-xl font-semibold flex items-center">${project.name} <iconify-icon
                        icon="heroicons:arrow-up-right-16-solid" class="ml-1  transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" width="16" height="16"></iconify-icon></a>
                <p class="font-normal opacity-80 selection:opacity-100">${project.description}</p>
                ${project.technology.map(tech => `
                <button class="px-3 py-1 rounded-full text-xs leading-5 bg-[#3d3d3d] text-gray-50">${tech}</button>`
    ).join('')}
            </div>
        </div>
    `
})

let achievements = [
    {
        id: 1,
        time: "Jan - Feb 2025",
        name: "Hack for Humanity - 2025",
        place: "Dev Post",
        url: "https://devpost.com/software/ride-sharing-website",
        shortDesc: "Ranked <b>20th overall</b> and won the <b>Public Voting Award</b> among 100+ participating teams.",
        KeyAchievement: [
            "Created a carpooling web app to solve university commute issues.",
            "Developed backend using Express.js and MongoDB to handle ride creation, joining, and real-time updates via WebSockets.",
            "Designed responsive frontend using EJS and Tailwind CSS for a unified login and dashboard experience.",
            "Implemented ride history, live ride tracking, and notification system for cancellations"
        ]
    },
    {
        id: 2,
        time: "2022 - Present",
        name: "Bachelor's in Software Engineering",
        place: "MUET, Jamshoro",
        url: "https://www.muet.edu.pk/",
        shortDesc: "Completed 4-year undergraduate degree with a strong foundation in full-stack web development and software engineering principles.",
        KeyAchievement: [
            "Graduated with hands-on experience in MERN stack development, database design, and RESTful APIs.",
            "Built multiple academic projects, including a real-time carpooling app, a weather dashboard, and a file-sharing platform.",
            "Contributed to open-source projects and actively participated in hackathons and coding competitions.",
            "Developed strong problem-solving skills through regular coursework, labs, and collaborative team-based projects."
        ]
    },
    {
        id: 3,
        time: "2023",
        name: "Web Development Course",
        place: "National Freelancing Training Program",
        url: "https://nftp.pitb.gov.pk/",
        shortDesc: "Completed a comprehensive full-stack web development training with a focus on Node.js backend, RESTful APIs, and database integration.",
        KeyAchievement: [
            "Built foundational knowledge in JavaScript, Node.js, and Express.js.",
            "Learned RESTful API design, server-side rendering, and web security best practices.",
            "Worked with both SQL and NoSQL databases for backend integration.",
            "Practiced version control using Git and gained exposure to real-world web development workflows."
        ]
    }
];

const achievementsNameDiv = document.querySelector('#achievementsNameDiv');

achievements.forEach(achievement => {
    achievementsNameDiv.innerHTML +=
        `<div id="name_${achievement.id}" onclick="changeAchievementsDetails(${achievement.id})" class="p-3 cursor-pointer border-l-4 border-[#3d3d3d] hover:bg-white">
        <h3 class="text-lg font-bold">${achievement.name}</h3>
        <p class="text-sm font-normal">${achievement.place}</p>
    </div>`
})
const achievementsDetailsDiv = document.querySelector('#achievementsDetailsDiv');
let currentState = 0;
function changeAchievementsDetails(id) {
    if (id === currentState) return;

    achievements.forEach(achievement => {
        if (achievement.id === id) {
            achievementsDetailsDiv.innerHTML =
                `<div class="flex gap-2 items-center">
                <iconify-icon icon="uil:calender" class="h-4 w-4 text-gray-600"></iconify-icon>
                <h3 class="text-sm font-normal text-gray-500">${achievement.time}</h3>
            </div>
            <h3 class="text-xl font-bold">${achievement.name}</h3>
            <a href="${achievement.url}" target='_blank' class="group hover:underline text-sm flex font-normal items-center">${achievement.place}
                <iconify-icon icon="heroicons:arrow-up-right-16-solid"
                    class="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"></iconify-icon></a>

            <div class="space-y-5">
                <p>${achievement.shortDesc}</p>
                <h3 class="text-sm font-bold">KEY ACHIEVEMENTS</h3>
            </div>
            <ul class="list-disc pl-5 space-y-2">
            ${achievement.KeyAchievement.map(KeyAchievement =>
                    `<li>${KeyAchievement}</li>`
                ).join('')}
            </ul>
        `
        document.querySelector(`#name_${id}`).classList.add('bg-white');
        document.querySelector(`#name_${currentState}`)?.classList.remove('bg-white');
        currentState = id;
        }
    })
}
changeAchievementsDetails(1);


bouncingArrowDown.addEventListener('click', ()=>{
    let a = document.createElement('a');
    a.href="#about";
    a.click();
})