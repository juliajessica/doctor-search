// import { Methods } from './methods.js';
import { DoctorSearch2 } from './drsearch2.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

//
// function findSymptom(symptom){
  function findSymptom(){
    let symptom = ourData.data[0].profile;
    console.log(symptom);
    // $("ul#listOfSymptoms").append(ourData.data[0].profile);
    let arrayofSymptoms = [];
    for(let i in symptom){
      if(i.includes('profile') && symptom[i] !=null){
      $('ul#listOfSymptoms').append('<li>' + symptom[i] + '</li>');
      console.log(symptom[i]);
      arrayofSymptoms.push(symptom[i]);
    }
  }
  return arrayofSymptoms;
}


//ourData.data[0].profile.first_name.last_name

$(document).ready(function(){
  $("#dr-btn").click(function(event){
    event.preventDefault();
    let classCaller = new DoctorSearch2();//instance of object
    let userSymptom = $("#symptom").val();
    $("#symptom").val("");
    debugger;

    let promiseSymptom = classCaller.apiSymptom(userSymptom);//instance, method, userinput
    console.log(promiseSymptom);
    // let drData = ourData.data[0];
    findSymptom(drData);


    // promiseSymptom.then(function(drData) {
    //   // findSymptom(symptom);
    //   // console.log(findSymptom(drData));
    //   findSymptom(drData);
    //   // console.log(findSymptom(drData));
    //   // console.log(drData);
    // }, function(Error){
    //   $(".error-output").html("Sorry there is an Error loading your request!");
    // });
  });//closes click function
});//closes .ready function
