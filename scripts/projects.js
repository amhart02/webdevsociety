const previous_projects = [
    {
        title: "",
        urls: [],
        timeframe: "",
        desc: "",
        img: "",
        alt: "",
        contributers: [],
    },
    {
        title: "Halloween Websites",
        urls: ["https://alexanderdombroski.github.io/halloween/"], // ADD OTHER HALLOWEEN SITES
        timeframe: "October 2024",
        desc: "Halloween Sites were created in preparation for halloween and to show to the high schoolers in Rexburg",
        img: "images/project_images/halloween-sites.jpg",
        alt: "showing off halloween sites in high school",
        contributers: ["Alex Dombroski", "Ellie Talbot", "Amitai Finlayson"], // ADD OTHER SITE CONTRIBUTERS
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
    // document.querySelector('.upcoming-projects').innerHTML = nextSectionTemplate();
    document.querySelector('.previous-projects').innerHTML = prevSectionTemplate();


})();

(function initListeners() {

})();



function nextSectionTemplate() {
    return `
        <h2>Upcoming Projects</h2>
        ${next_projects.map(prevProjectTemplate).join('')}
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
                <h3>${project.title}</h3>
                <ul>
                    ${project.urls.map(url =>`<li><a href="${url}">${url}</a></li>`).join('')}
                </ul>
                <p>${project.timeframe}</p>
                <p>${project.contributers.join(", ")}</p>
                <p>${project.desc}</p>
            </div>
            ${project.img ? `<img src="${project.img}" alt="${project.alt}" />` : ""}
        </article>
    `
}
