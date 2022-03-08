const controlFlight = document.querySelector(".control-flight");
const controlHotel = document.querySelector(".control-hotel");
const controlRental = document.querySelector(".control-rental");
const control = document.querySelector(".control")

const info = document.querySelector(".info");


const flight = document.querySelector(".flight");
const hotel = document.querySelector(".hotel");
const rental = document.querySelector(".rental");

const controlfli = document.querySelector(".fli");
const controlhol = document.querySelector(".hol");
const controlren = document.querySelector(".ren");

// control.forEach(function(item) {
//     item.onclick = function(){
        

//     }


// });


controlFlight.addEventListener("click", function(){
    document.querySelector('.active').classList.remove('active')
    flight.classList.add('active'); 
    // hotel.style.display ='none'
    // rental.style.display ='none'
    controlfli.style.backgroundColor = 'red';
    controlhol.style.backgroundColor = 'transparent';
    controlren.style.backgroundColor = 'transparent';


});

controlHotel.addEventListener("click", function(){
    document.querySelector('.active').classList.remove('active')
    hotel.classList.add('active');
    // flight.style.display ='none'
    // rental.style.display ='none'
    controlhol.style.backgroundColor = 'red';
    controlfli.style.backgroundColor = 'transparent';
    controlren.style.backgroundColor = 'transparent';

});

controlRental.addEventListener("click", function(){
    document.querySelector('.active').classList.remove('active')
    rental.classList.add('active');
    // hotel.style.display ='none'
    // flight.style.display ='none'
    controlren.style.backgroundColor = 'red';
    controlfli.style.backgroundColor = 'transparent';
    controlhol.style.backgroundColor = 'transparent';

});
