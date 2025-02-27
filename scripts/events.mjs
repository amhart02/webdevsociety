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