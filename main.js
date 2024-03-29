const tourlist = document.getElementsByClassName('container-deal');
fetch("https://tours-data.onrender.com/tours")
.then(response => response.json())
.then(data => {
  // loop through the tours array and create a div for each tour
  data.forEach(tour => {
    const tourDiv = document.createElement('div');
    tourDiv.classList.add('tour-card');
    tourDiv.innerHTML = `
     
      <img src="${tour.tour_image}" id="tour-image " alt="${tour.title}">
      <p class="love-emoji"> ${tour.like}</p>
      <h3 class="tour-title ">${tour.title}</h3>
      <p class="tour-destination" >${tour.destination}</p>
      <p class="tour-description ">${tour.description}</p>
      <p id="tour-price"> ${tour.price}</p>
      <button class="book-tour-btn" onclick="fireSweetAlert()">Book Now</button>
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
fetch('https://tours-data.onrender.com/feedback', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(feedbackObj)
})
.then(res =>res.json())
.then(feedback =>console.log(feedback))
.catch(err =>console.error(err));
 }
});







     



