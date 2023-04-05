const tourlist = document.getElementsByClassName('container-deal');
fetch("http://localhost:3000/tours")
.then(response => response.json())
.then(data => {
  // loop through the tours array and create a div for each tour
  data.forEach(tour => {
    const tourDiv = document.createElement('div');
    tourDiv.classList.add('tour-card');
    tourDiv.innerHTML = `
     
      <img src="${tour.tour_image}" id="tour-image " alt="${tour.title}">
      <p class="love-emoji"> ${tour.like}</p>
      <h3 id="tour-title ">${tour.title}</h3>
      <p id="tour-price"> ${tour.price}</p>
      <p class="tour-destination" >${tour.destination}</p>
      <p class="tour-description ">${tour.description}</p>
      <button class="book-tour-btn">Book Now</button>
    `;
    // append the tour div to the container-deal div
    document.querySelector('.container-deal').appendChild(tourDiv);
  });
});



