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
    //event listener fo the love button
    
   
  });
 //modal dialog
 var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



 //from form
 const form = document.querySelector('#feedback');
 form.addEventListener('submit',handleSubmit);

 //define function to be called when form is submitted
 function handleSubmit(e) {
  e.preventDefault();
  let feedbackObj={
    name: e.target.name.value,
    number: e.target.number.value,
    email: e.target.email.value,
    message: e.target.message.value,

  }
  console.log(feedbackObj)
  addfeedback(feedbackObj);
}
 function addfeedback(feedbackObj) {
fetch('http://localhost:3000/feedback', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(feedbackObj)
})
.then(res =>res.json())
.then(feedback =>console.log(feedback))
.catch(err =>console.error(err));
 }
});


// booking button click
const bookingButton = document.getElementById('love-emoji');

bookingButton.addEventListener('click', () => {
  // Add code here to update the JSON file with the booking information
  console.log('User has booked');
});




    // Get the filter button and input
    const filterBtn = document.getElementById('filterBtn');
    const filterInput = document.getElementById('filterInput');

    // Add event listener to filter button
    filterBtn.addEventListener('click', function() {
      const destination = filterInput.value.toLowerCase();

      // Filter tours by destination
      const filteredTours = tours.filter(tour => tour.destination.toLowerCase().includes(destination));

      // Clear the tour list
      const tourList = document.getElementById('tourList');
      tourList.innerHTML = '';

      // Display filtered tours in HTML
      filteredTours.forEach(tour => {
        const tourItem = document.createElement('div');
        tourItem.classList.add('tour');

        const tourImage = document.createElement('img');
        tourImage.setAttribute('src', tour.tour_image);
        tourImage.setAttribute('alt', tour.title);

        const tourTitle = document.createElement('h3');
        tourTitle.innerText = tour.title;

        const tourPrice = document.createElement('p');
        tourPrice.innerText = tour.price;

        const tourDestination = document.createElement('p');
        tourDestination.innerText = tour.destination;

        const tourDescription = document.createElement('p');
        tourDescription.innerHTML = tour.description;

        tourItem.appendChild(tourImage);
        tourItem.appendChild(tourTitle);
        tourItem.appendChild(tourPrice);
        tourItem.appendChild(tourDestination);
        tourItem.appendChild(tourDescription);

        tourList.appendChild(tourItem);
      });
    });




