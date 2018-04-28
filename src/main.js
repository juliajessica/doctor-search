// import { Methods } from './methods.js';
import { DoctorSearchTwo } from './drsearch2.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

//
function findSymptom(ourData){
  let drInfo = '';
//   function findSymptom(){
//     let symptom = ourData.data[0].profile;
//     console.log(symptom);
$("ul#listOfSymptoms").append(ourData.data[0].profile);
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
    // let drData = ourData.data[0];
    promiseSymptom.then(function(drData) {
      let ourData = JSON.parse(drData);
      findSymptom(ourData);//json API data, user input
    }, function(Error){
      $(".error-output").html("Sorry there is an Error loading your request!");
    });
  });
});
