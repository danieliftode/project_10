//seting up the variables
let api_link = 'https://randomuser.me/api/?results=12';
let employees;
const alpha = document.querySelector('body');
//let fin = document.querySelector('.modal');
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


//build the html with esential data
  function call_me_back(api_link){
    employees = api_link.results;
    for(var i=0; i < employees.length; i++){
      alpha.innerHTML += `<div data-tag=${key} class="user">
                        <img class="poza" src=${employees[i].picture.large} alt="poza"/>
                        <div class="detalii">
                        <h3 class="name">${employees[i].name.first}   ${employees[i].name.last}</h3>
                        <p class= 'email'>${employees[i].email}</p>
                        <p class= 'city'>${employees[i].location.city}</p>
      </div>
      </div>` ;
      key++ //counter for modal

    }
    let person = document.querySelectorAll('.user');
    let single_person = document.querySelector('.user');
    var modal = document.querySelector('.modal');
    var modal_off = document.querySelector('.close');
    var content = document.querySelector('.modal-content');
    //need to add event listener to close the modal

    //finish of the closing of the modal
    //need to add event listener on user and see if scope of employees[i] exists in event handler
    for(var x = 0; x<person.length; x++){
      person[x].addEventListener('click', function(e){

        modal.style.display = "block";
        // for(var i = 0; i < employees.length; i++){
        //    let human = {
        //     number : employees
        //   }
        // }
        var place = this.dataset.tag;
        if(e.target.dataset.tag === this.dataset.tag){ //if user click matches user data tag

          content.innerHTML = "<span class='close'>&times;</span>" +
          "<img src=" + employees[place].picture.large + ">" +
          "<h3> Name : " + employees[place].name.first + "  " + employees[place].name.last + "</h3>" +
          "<h3> User Name : " + employees[place].login.username + "</h3>" +
          "<h3> Email : " + employees[place].email + "</h3>" +
          "<h3> Telephone : " + employees[place].cell + "</h3>" +
          "<h3> Address : " + employees[place].location.street + " , " + employees[place].location.city + " , " + employees[place].location.state + employees[place].location.postcode + "</h3>" +
          "<h3> Birthdate : " + employees[place].dob + "</h3>";

          // content.innerHTML += "<img src=" + employees[place].picture.large + ">";
          // content.innerHTML += "<h3> Name : " + employees[place].name.first + "  " + employees[place].name.last + "</h3>";
          // content.innerHTML += "<h3> User Name : " + employees[place].login.username + "</h3>";
          // content.innerHTML += "<h3> Email : " + employees[place].email + "</h3>";
          // content.innerHTML += "<h3> Telephone : " + employees[place].cell + "</h3>";
          // content.innerHTML += "<h3> Address : " + employees[place].location.street + " , " + employees[place].location.city + " , " + employees[place].location.state + employees[place].location.postcode + "</h3>";
          // content.innerHTML += "<h3> Birthdate : " + employees[place].dob + "</h3>";
        }
        //+ employees[place].picture.large

      });
      modal.addEventListener('click', function(e){
        if(e.target){
          modal.style.display = "none";
        }
      });
    }
    //trying to make a call back to get all user details and stor it


    //++++++++++++++++++++++++++++++
    //im experimenting with shit
    }

  $.getJSON(api_link, call_me_back);
});
