document.addEventListener('DOMContentLoaded', function() {
    const servicesList = document.getElementById('services-list');
    const services = [
        {
            name: 'Hanging Curtain Rods/Curtains',
            price: '$50 - $75',
            description: 'Professional installation of curtain rods and curtains per window. Example pricing for 8 windows: $825.'
        },
        {
            name: 'Replacing Door Hardware (Exterior)',
            price: '$75 - $150',
            description: 'Exterior door hardware replacement for enhanced security and durability. Example pricing for 1 door: $150.'
        },
        {
            name: 'Replacing Door Hardware (Interior)',
            price: '$65 - $125',
            description: 'Interior door hardware replacement. Example pricing for 8 doors: $1000.'
        },
        {
            name: 'Replacing Door, with jamb, with casing',
            price: '$200 - $225',
            description: 'Complete door replacement including jamb and casing. Example pricing for 1 door: $400.'
        },
        {
            name: 'Installing New Door, with jamb, with casing',
            price: '$150 - $175',
            description: 'Installation of new doors complete with jamb and casing. Example pricing for multiple doors: $2600; materials and labor: $4000.'
        },
        {
            name: 'Cabinet Hardware Replacement',
            price: '$30 - $50',
            description: 'Replacement of cabinet handles and hinges. Example pricing for multiple units: $800.'
        },
        {
            name: 'Building Garage/Storage Shelving',
            price: '$400 per unit',
            description: 'Custom-built storage shelving for garages or storage areas.'
        },
        {
            name: 'TV/Monitor Mounting',
            price: '$150 per unit',
            description: 'Secure mounting of TVs and monitors.'
        },
        {
            name: 'Baseboard Trim, with caulking',
            price: '$75 - $50 per 10 linear feet',
            description: 'Installation of baseboard trim with professional caulking. Example pricing for service: $1125; materials and labor: $1875.'
        },
        {
            name: 'Door Casing/Trim, with caulking',
            price: '$150 - $50 per door',
            description: 'Professional door casing and trim installation with caulking. Example pricing for service: $1200; materials and labor: $1600.'
        },
        {
            name: 'Window Casing/Trim, with caulking',
            price: '$125 - $50 per window',
            description: 'Window casing and trim installation with caulking. Example pricing for service: $1000; materials and labor: $1400.'
        },
        {
            name: 'Interior Caulking',
            price: '$60 per 10 linear feet',
            description: 'Professional interior caulking for various applications. Example pricing for service: $900.'
        },
        {
            name: 'Framing Walls',
            price: '$2000 per 10 linear feet',
            description: 'Construction and framing of walls for structural support.'
        }
    ];

    services.forEach(service => {
        const serviceElement = document.createElement('div');
        serviceElement.classList.add('service');
        serviceElement.innerHTML = `<h3>${service.name}</h3><p>${service.description}</p><p><strong>Price:</strong> ${service.price}</p>`;
        servicesList.appendChild(serviceElement);
    });
});

