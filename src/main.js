// import { Methods } from './methods.js';
import { DoctorSearch } from './drsearch.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

//
// function findSymptom(symptom){
  function findSymptom(drData){
    console.log(drData);
    $("ul#listOfSymptoms").append(drData.data[0]);
  // let arrayofSymptoms = [];
  // for(let i in symptom){
  //   if(symptom.includes('name') && symptom[i] !=null){
  //     $('ul#listOfSymptoms').append('<li>' + symptom[i] + '</li>');
  //     arrayofSymptoms.push(symptom[i]);
  //   }
  // }
  // return arrayofSymptoms;
}


$(document).ready(function(){
  $("#dr-btn").click(function(event){
    event.preventDefault();
    let classCaller = new DoctorSearch();//instance of object
    let userSymptom = $("#symptom").val();
    $("#symptom").val("");
    debugger;

    let promiseSymptom = classCaller.apiSymptom(userSymptom);
    console.log(promiseSymptom);

    // let promise = classCaller.apiSymptom(userSymptom);//instance, method, userinput

    promiseSymptom.then(function(drData) {
      // findSymptom(symptom);
      console.log(findSymptom(drData));
      findSymptom(drData);
      console.log(findSymptom(drData));
      console.log(drData);
    }, function(Error){
      $(".error-output").html("Sorry there is an Error loading your request!");
    });
  });//closes click function
});//closes .ready function
