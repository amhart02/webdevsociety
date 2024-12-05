const previous_projects = [
    {
        title: "",
        url: "",
        timeframe: "",
        desc: "",
        img: "",
        alt: "",
        contributers: [],
    },
    {
        title: "Halloween Website",
        url: "https://alexanderdombroski.github.io/halloween/",
        timeframe: "October 2024",
        desc: "Halloween Sites were created in preparation for halloween and to show to the high schoolers in Rexburg",
        img: "images/project_images/halloween.png",
        alt: "halloween site image",
        contributers: ["Alex Dombroski", "Ellie Talbot", "Amitai Finlayson"],
    }
];
const next_projects = [
    {
        title: "",
        desc: "",
        timeframe: ""
    }
];





(function loadPage() {
    document.querySelector('.upcoming-projects').innerHTML = nextSectionTemplate();
    document.querySelector('.previous-projects').innerHTML = prevSectionTemplate();


})();

(function initListeners() {

})();



function nextSectionTemplate() {
    return `
        <h2>Upcoming Projects</h2>
    `
}
function nextProjectTemplate() {
    return `
    
    `
}
function prevSectionTemplate() {
    return `
        <h2>Past Projects</h2>
        ${previous_projects.map(prevProjectTemplate).join('')}
    `
}
function prevProjectTemplate(project) {
    return `
        <article>
            <div>
                <a href="${project.url}"><h3>${project.title}</h3></a>
                <p>${project.timeframe}</p>
                <p>${project.contributers.join(", ")}</p>
                <p>${project.desc}</p>
            </div>
            ${project.img ? `<img src="${project.img}" alt="${project.alt}" />` : ""}
        </article>
    `
}
