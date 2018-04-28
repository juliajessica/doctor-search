// import { Methods } from './methods.js';
import { DoctorSearchTwo } from './drsearch2.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

//
function findSymptom(response){

  for (let i=0; i<response.length; i ++){
    let first = response.data[i].profile.firstname;
    console.log(first);

    if (first === null){
      $("ul#listOfSymptoms").append("Sorry, there are no professionals that fit that criteria");
    } else {
      $("ul#listOfSymptoms").append("<li>" + first + "</li>");
    }
  }
//     let arrayofSymptoms = [];
//     for(let i in symptom){
//       if(i.includes('profile') && symptom[i] !=null){
//       $('ul#listOfSymptoms').append('<li>' + symptom[i] + '</li>');
//       console.log(symptom[i]);
//       arrayofSymptoms.push(symptom[i]);
//     }
//   }
//   return arrayofSymptoms;
}


//ourData.data[0].profile.first_name.last_name

$(document).ready(function(){
  $("#dr-btn").click(function(event){
    event.preventDefault();
    let classCaller = new DoctorSearchTwo();
    let userSymptom = $("#symptom").val();
    $("#symptom").val("");

    let promiseSymptom = classCaller.apiSymptom(userSymptom);//instance, method, userinput

    promiseSymptom.then(function(response) {
      response = JSON.parse(response);
      console.log(response);
      // let drData = response;
      // console.log(drData);
      // let drData = response.data[0].profile;
      findSymptom(response);//json API data, user input
    }, function(Error){
      $(".error-output").html("Sorry there is an Error loading your request!");
    });
  });
});
