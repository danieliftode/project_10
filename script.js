//seting up the variables
let api_link = 'https://randomuser.me/api/?results=12';
let employees;
const alpha = document.querySelector('body');
let test = document.querySelector('body');
let user_html = '';
let key = 0;
/*how ajax works:
1 create a XMLHTTP request object
2 build the callback function (what you want to do with the response from the ajax request to the server)
3 open a request you give 2 information
        a) the method you want the browser to get the information (get or post )
        b) and the url WHERE THE REQUEST IS SENT ( the url of the api)
4 send the request!!

*/

//step 1 make the ajax request and put the data inside div's and display
//step 2 create a variable with html data for user in wich to insert api data
//step 3 use interpolation!!!!
//step 4 add a hey to each div created and insert a counter using interpolation
//step 5 use that key to create a event if target clicked matches the user number display
//the rest of the information about that user in a modal
$(document).ready(function(){
  function capital_letter(word){
    word = word.slice(0, 1).toUpperCase() + word.slice(1, 100);
    return word;
  }
//build the html with esential data
  function call_me_back(api_link){
    employees = api_link.results;
    for(var i=0; i < employees.length; i++){
      alpha.innerHTML += `<div data-tag=${key} class="user">
                        <img class="poza" src=${employees[i].picture.large} alt="poza"/>
                        <div class="detalii">
                        <h3 class="name">${capital_letter(employees[i].name.first)}   ${capital_letter(employees[i].name.last)}</h3>
                        <p class= 'email'>${employees[i].email}</p>
                        <p class= 'city'>${capital_letter(employees[i].location.city)}</p>
      </div>
      </div>` ;
      key++ //counter for modal

    }
    let person = document.querySelectorAll('.user');
    let single_person = document.querySelector('.user');
    var modal = document.querySelector('.modal');
    var modal_off = document.querySelector('.close');
    var content = document.querySelector('.modal-content');
    for(var x = 0; x<person.length; x++){
      person[x].addEventListener('click', function(e){

        modal.style.display = "block";
        var place = this.dataset.tag;
          // rearanged
          content.innerHTML = "<span class='close'>&times;</span>" +
          "<img src=" + employees[place].picture.large + ">" +
          "<h3>" + capital_letter(employees[place].name.first) + "  " + capital_letter(employees[place].name.last) + "</h3>" +
          "<h4> " + employees[place].email + "</h4>" +
          "<h4> " + capital_letter(employees[place].location.city) + "</h4>" +
          "<h4> " + employees[place].cell + "</h4>" +
          "<h4> " + employees[place].location.street + " , " + capital_letter(employees[place].location.state) + " " + employees[place].location.postcode + "</h4>" +
          "<h4> Birthday : " +  employees[place].dob + "</h4>";

      });
      modal.addEventListener('click', function(e){
        if(e.target){
          modal.style.display = "none";
        }
      });
    }
    }

  $.getJSON(api_link, call_me_back);
});
