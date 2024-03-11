// Get the Google Places API key
const apiKey = 'YOUR_API_KEY';

// Get the Place ID for your business
const placeId = 'YOUR_PLACE_ID';

// Create a new Google Places service object
const placesService = new google.maps.places.PlacesService(document.createElement('div'));

// Get the reviews for your business
placesService.getDetails({
  placeId,
  fields: ['reviews']
}, (place, status) => {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    // Display the reviews on the page
    const reviews = place.reviews;
    for (const review of reviews) {
      const reviewElement = document.createElement('div');
      reviewElement.innerHTML = `
        <h3>${review.author_name}</h3>
        <p>${review.text}</p>
        <rating>${review.rating}</rating>
      `;
      document.querySelector('#reviews').appendChild(reviewElement);
    }
  }
});
