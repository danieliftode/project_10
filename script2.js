//seting up the variables
let api_link = 'https://randomuser.me/api/?results=12';
let employees;
const alpha = document.querySelector('body');
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

  function call_me_back(api_link){
    employees = api_link.results;
    for(var i=0; i < employees.length; i++){
      alpha.innerHTML += `<div ${key} class="user">
                        <img class="poza" src=${employees[i].picture.large} alt="poza"/>
                        <div class="detalii">
                        <h3 class="name">${employees[i].name.first}   ${employees[i].name.last}</h3>
                        <p class= 'email'>${employees[i].email}</p>
                        <p class= 'city'>${employees[i].location.city}</p>
      </div>
      </div>` ;
      key++ //counter for modal
      console.log(key); //testing the counter that it outputs 12 numbers
    }
    console.log(user_html);
  }

  $.getJSON(api_link, call_me_back);
  //console.log(employees);
});
