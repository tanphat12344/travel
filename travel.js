const controlFlight = document.querySelector(".control-flight");
const controlHotel = document.querySelector(".control-hotel");
const controlRental = document.querySelector(".control-rental");
const control = document.querySelector(".control")

const info = document.querySelector(".info");


const flight = document.querySelector(".flight");
const hotel = document.querySelector(".hotel");
const rental = document.querySelector(".rental");

// control.forEach(function(item) {
//     item.onclick = function(){
        

//     }


// });


controlFlight.addEventListener("click", function(){
    document.querySelector('.active').classList.remove('active')
    flight.classList.add('active'); 
    // hotel.style.display ='none'
    // rental.style.display ='none'
});

controlHotel.addEventListener("click", function(){
    document.querySelector('.active').classList.remove('active')
    hotel.classList.add('active');
    // flight.style.display ='none'
    // rental.style.display ='none'
});

controlRental.addEventListener("click", function(){
    document.querySelector('.active').classList.remove('active')
    rental.classList.add('active');
    // hotel.style.display ='none'
    // flight.style.display ='none'
});
