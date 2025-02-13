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

      const caption = document.createElement('p');
      caption.textContent = photo.name;

      card.appendChild(img);
      card.appendChild(caption);
      photoContainer.appendChild(card);
    });
  })
  .catch(error => console.error('Error loading photos:', error));
