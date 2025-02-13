fetch('./scripts/picture.json')
  .then(response => response.json())
  .then(photos => {
    const photoContainer = document.getElementById('photo-cards');

    photos.forEach(photo => {
      const card = document.createElement('div');
      card.className = 'photo-card';

      const img = document.createElement('img');
      img.src = photo.imageURL;
      img.alt = photo.name;
      img.addEventListener('click', () => expandImage(photo.imageURL));

      const caption = document.createElement('p');
      caption.textContent = photo.name;

      card.appendChild(img);
      card.appendChild(caption);
      photoContainer.appendChild(card);
    });
  })
  .catch(error => console.error('Error loading photos:', error));

function expandImage(src) {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'expanded-overlay';
    
    // Create image element
    const img = document.createElement('img');
    img.src = src;
    img.className = 'expanded-img';

    // Close overlay when clicked
    overlay.addEventListener('click', () => {
        document.body.removeChild(overlay);
    });

    overlay.appendChild(img);
    document.body.appendChild(overlay);
}