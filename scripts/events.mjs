const events = [
    {
        title: 'Society Meeting',
        date: '2/26/2025',
        time: '5:30pm',
        location: 'STC 231',
        description: 'Discussing upcoming events and projects'
    },
    {
        title: 'Society Meeting',
        date: '3/5/2025',
        time: '5:30pm',
        location: 'STC 231',
        description: 'Discussing upcoming events and projects'
    },
    {
        title: 'Society Meeting',
        date: '3/12/2025',
        time: '5:30pm',
        location: 'STC 231',
        description: 'Discussing upcoming events and projects'
    },
    {
        title: 'Society Meeting',
        date: '3/19/2025',
        time: '5:30pm',
        location: 'STC 231',
        description: 'Discussing upcoming events and projects'
    },
    {
        title: 'Society Meeting',
        date: '3/26/2025',
        time: '5:30pm',
        location: 'STC 231',
        description: 'Discussing upcoming events and projects'
    }
];

events.forEach((event, index) => {
    event.id = index;
});


export const getEvents = () => events;

export const renderEvents = () => {
    
let windowWidth = window.innerWidth;
let eventSize = 0;
if(windowWidth<840){
    eventSize = 1;
} else if(windowWidth<1260){
    eventSize = 2;
} else {
    eventSize = 4;
}



window.addEventListener('resize', function() {
    windowWidth = window.innerWidth;
    if(windowWidth<840){
        eventSize = 1;
    } else if(windowWidth<1260){
        eventSize = 2;
    } else {
        eventSize = 4;
    }
    updateEvents();
    checkArrowAvailability();
});



const eventContainer = document.querySelector('.event-container');
let eventIndex = 0;
const updateEvents = () => {
    eventContainer.innerHTML = '';

    if(eventIndex>=0&&eventIndex+eventSize<events.length){
        events.slice(eventIndex, eventIndex+eventSize).forEach(event => {
            const eventElement = document.createElement('div');
            eventElement.classList.add('event');
            event.id%2==0?eventElement.classList.add('evenEvent'):eventElement.classList.add('oddEvent');
            eventElement.innerHTML = `
                <h3>${event.title}</h3>
                <p>Date: ${event.date}</p>
                <p>Time: ${event.time}</p>
                <p>Location: ${event.location}</p>
                <p>${event.description}</p>
            `;
            eventElement.classList.add('card')
            eventContainer.appendChild(eventElement);
        });
    } else if(eventIndex>=0&&eventIndex+eventSize>=events.length){
        events.slice(eventIndex, events.length).forEach(event => {
            const eventElement = document.createElement('div');
            eventElement.classList.add('card');
            event.id%2==0?eventElement.classList.add('evenEvent'):eventElement.classList.add('oddEvent');
            eventElement.innerHTML = `
                <h3>${event.title}</h3>
                <p>Date: ${event.date}</p>
                <p>Time: ${event.time}</p>
                <p>Location: ${event.location}</p>
                <p>${event.description}</p>
            `;
            eventContainer.appendChild(eventElement);
        });
    }
}

const leftArrow = document.querySelector('#left-arrow');
const rightArrow = document.querySelector('#right-arrow');

const checkArrowAvailability = () => {
    if(eventIndex==0){
        leftArrow.classList.add('unavailable');
    } else {
        leftArrow.classList.remove('unavailable');
    }
    if(eventIndex==events.length - eventSize){
        rightArrow.classList.add('unavailable');

    } else {
        rightArrow.classList.remove('unavailable');
    }

}

leftArrow.addEventListener('click', function() {
    if(eventIndex!=0){
        eventIndex--;
    }
    updateEvents();
    checkArrowAvailability();
});

rightArrow.addEventListener('click', function(){
    if(eventIndex!=events.length - eventSize){
        eventIndex++;
    }
    updateEvents();
    checkArrowAvailability();
});

checkArrowAvailability();
checkArrowAvailability();
updateEvents();
}