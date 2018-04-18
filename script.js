var url = 'https://randomuser.me/api/?results=12';
var tag = document.querySelectorAll('.user');
var tag_one = document.querySelector('.user');
var nume = document.querySelectorAll('.first');
var numeDoi = document.querySelectorAll('.second');
var mail = document.querySelectorAll('.email');
var oras = document.querySelectorAll('.city');
var pic = document.querySelectorAll('.poza');
var modAl = document.querySelector('.modal');
var modAl_cont = document.querySelectorAll('.modal-content');
//console.log(modAl_cont);
var alpha = document.querySelector('body');
$(document).ready(function(){

  function getInFo(url){
    for(var i = 0; i < url.results.length; i++){
      for(var i = 0; i < nume.length; i++){
        var capi_first = url.results[i].name.first;
        var capi_last = url.results[i].name.last;
        nume[i].innerText = capi_first.slice(0, 1).toUpperCase() + capi_first.slice(1, 20) + ' '
        + capi_last.slice(0, 1).toUpperCase() + capi_last.slice(1, 10);
      }
    }

    //making an object
      for(var i = 0; i < url.results.length; i++){
        var user = {
          aniversare : url.results[i].dob,
          addressa : url.results[i].location,
          telefonul : url.results[i].cell,
          email : url.results[i].email,
          user : url.results[i].login.username
        }
      }

      ///NEED TO STUDY AND APPPL FOR EACH METHOD TO ADD CONTENT TO THE MODAL

      //need to add the data to each modal !!!
    for (var i = 0; i < url.results.length; i++){
      for(var i = 0; i < mail.length; i++){
        mail[i].innerText = url.results[i].email;
      }
    }
    for (var i = 0; i < url.results.length; i++){
      for(var i = 0; i < oras.length; i++){
        oras[i].innerText = url.results[i].location.city;
      }
    }
    for (var i = 0; i < url.results.length; i++){
      for(var i = 0; i < pic.length; i++){
        pic[i].setAttribute('src', url.results[i].picture.large)
      }
    }
    // schimb abordarea pun la fiecare user un modal individual in html structure
    //si in el pun informatiile
    alpha.addEventListener('click', function(e){
      if(e.target.classList[0] === 'user'){
        modAl.style.display = 'block';
        modAl_cont += '<p>what the fuck</p>'
      }
      if(e.target.classList[0] === 'close'){
        modAl.style.display = 'none';
      }
    });
  }
  $.getJSON(url, getInFo);
// alpha.addEventListener('click', function(e){
//   if(e.target.classList[0]  === 'user') {
//     modAl.style.display = 'block';
//   }
//   if(e.target.classList[0] === 'close'){
//     modAl.style.display = 'none';
//   }
// })

//need to post on git need to ask for help

})//end ready
