// import { Methods } from './methods.js';
import { DoctorSearchTwo } from './drsearch2.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

//
function findSymptom(drData){

  for (i=0; i<drData.length; i ++){
    let first = drData.profile.firstname;
  }

  $("ul#listOfSymptoms").append(first);
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
    debugger;

    let promiseSymptom = classCaller.apiSymptom(userSymptom);//instance, method, userinput
    console.log(promiseSymptom);

    promiseSymptom.then(function(response) {
      response = JSON.parse(response);
      console.log(response);
      let drData = response.data[i];
      // let drData = response.data[0].profile;
      findSymptom(drData);//json API data, user input
    }, function(Error){
      $(".error-output").html("Sorry there is an Error loading your request!");
    });
  });
});
