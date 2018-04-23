var url = 'https://randomuser.me/api/?results=12';
var tag = document.querySelectorAll('.user');
var tag_one = document.querySelector('.user');
var nume = document.querySelectorAll('.first');
var numeDoi = document.querySelectorAll('.second');
var mail = document.querySelectorAll('.email');
var oras = document.querySelectorAll('.city');
var pic = document.querySelectorAll('.poza');
var modal = document.querySelector('.modal');
var modal_cont = document.querySelector('.modal-content');
//console.log(modAl_cont);
function test(member){

}
let employees;
var alpha = document.querySelector('body');
$(document).ready(function(){

  function getInFo(url){
    employees = url.results;
    for(var i = 0; i < employees.length; i++){
      for(var i = 0; i < nume.length; i++){
        var capi_first = employees[i].name.first;
        var capi_last = employees[i].name.last;
        nume[i].innerText = capi_first.slice(0, 1).toUpperCase() + capi_first.slice(1, 20) + ' '
        + capi_last.slice(0, 1).toUpperCase() + capi_last.slice(1, 10);
      }
    }

    //making an object
      // for(var i = 0; i < url.results.length; i++){
      //   var user = {
      //     aniversare : url.results[i].dob,
      //     addressa : url.results[i].location,
      //     telefonul : url.results[i].cell,
      //     email : url.results[i].email,
      //     user : url.results[i].login.username
      //   }
      // }


      //need to add the data to each modal !!!
    for (var i = 0; i < employees.length; i++){
      for(var i = 0; i < mail.length; i++){
        mail[i].innerText = employees[i].email;
      }
    }
    for (var i = 0; i < employees.length; i++){
      for(var i = 0; i < oras.length; i++){
        oras[i].innerText = employees[i].location.city;
      }
    }
    for (var i = 0; i < employees.length; i++){
      for(var i = 0; i < pic.length; i++){
        pic[i].setAttribute('src', employees[i].picture.large)
      }
    }
    // schimb abordarea pun la fiecare user un modal individual in html structure
    //si in el pun informatiile
    tag_one.addEventListener('click', function(e){
      if(e.target.classList[0] === 'user'){
        modal.style.display = 'block';
        modal_cont.innerHTML += '<h1>what the fuck</h1>';
      }
      if(e.target.classList[0] === 'close'){
        modal.style.display = 'none';
      }
    });
  }

  //for tag
  $.getJSON(url, getInFo);
// alpha.addEventListener('click', function(e){
//   if(e.target.classList[0]  === 'user') {
//     modAl.style.display = 'block';
//   }
//   if(e.target.classList[0] === 'close'){
//     modAl.style.display = 'none';
//   }
// })


})//end ready
