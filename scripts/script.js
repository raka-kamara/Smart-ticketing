function hidElementById(elementId){
  const element = document.getElementById(elementId);
  element.classList.add('hidden');
}

function showElementById(elementId){
  const element = document.getElementById(elementId);
  element.classList.remove('hidden')
}

hidElementById('apply-cupon');



// document.getElementById('apply-cupon').ariaDisabled = true;


document.getElementById('scrollButton').addEventListener('click', function() {
    document.getElementById('targetSection').scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('scroll').addEventListener('click', function() {
    document.getElementById('target').scrollIntoView({ behavior: 'smooth' });
  });
  
  
  const seats = document.querySelectorAll(".seat");


  let seatCount = 1;
  let totalSeat = 0;
  let totalPrice = 0;
  let grandTotal = 0;
  let selectedSeats = 0;

  const cupon1 = document.getElementById('cupon1').innerText;
  const cupon2 = document.getElementById('cupon2').innerText;



  for (let index = 0; index < seats.length; index++) {
    const seat = seats[index];
    seat.addEventListener("click", function(){
   
      

      if(!seat.classList.contains("selected")){
        if(selectedSeats < 4){
          seat.classList.add("selected");
          selectedSeats++;
          seat.classList.add("bg-lime-600");
          seat.classList.add("text-white");


          // Enable button if 4 seats are selected

          if (selectedSeats === 4) {
            // document.getElementById('submit-btn').removeAttribute('disabled');
            showElementById('apply-cupon');
          }
          
        

         

       

    // get title
    const title = seat.querySelector("p").innerText;
    const titleContainer = document.getElementById('title-container');


  // append text
    const p = document.createElement("p");
    p.innerText = seatCount +". " + title + " Economy " + " 550";
    titleContainer.appendChild(p);
    seatCount++;
    totalSeat++;
    totalPrice = totalPrice + 550;
    
    

   

     document.getElementById('seat-count').innerText = totalSeat; 
     document.getElementById('seta-left').innerText = 40-totalSeat; 
     document.getElementById('total-price').innerText = totalPrice;
     document.getElementById('grand-total').innerText = totalPrice;
    

        }
        else{
          alert("You can only select up to 5 seats. Fill up the form to confirm");
        }
      }else {
        alert("You've already selected this seat.");
      }
    
    
  }); 
  document.getElementById('apply-cupon').addEventListener('click', function(){
    const cuponCode = document.getElementById('cupon-code').value;

    if(cuponCode === cupon1){
      grandTotal = totalPrice - (totalPrice*0.15);
      hidElementById('cupon-field');
      document.getElementById('edit').innerText = totalPrice*0.15;
      showElementById('append');

    }
    else if(cuponCode === cupon2){
      grandTotal = totalPrice - (totalPrice*0.20);
      hidElementById('cupon-field');
      document.getElementById('edit').innerText = totalPrice*0.20;
      showElementById('append');
    }
    document.getElementById('grand-total').innerText = grandTotal;
      
    
  });
  
  }


  document.getElementById('submit-btn').addEventListener('click', function() {

    const item2Checked = document.getElementById('item2').value;
    

   if(selectedSeats>0 && item2Checked.length>0){
    console.log('hi')
    hidElementById('main');
    showElementById('success');
   }
   else{
    alert('plese give a valid phone number and select a seat');
   }

   document.getElementById('continue').addEventListener('click', function(){
    showElementById('main');
   });
 
});

  






