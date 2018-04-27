import { DoctorSearch } from './drsearch.js';
// import { Methods } from './methods.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function findSymptom(symptom){
  let arrayofSymptoms = [];
  for(let i in symptom){
    if(symptom.includes('uid') && symptom[i] !=null){
      $('ul#listOfSymptoms').append('<li>' + symptom[i] + '</li>');
      arrayofSymptoms.push(symptom[i]);
    }
  }
  return arrayofSymptoms;
}


$(document).ready(function(){
  $("#dr-btn").click(function(){
    let classCaller = new DoctorSearch();//instance of object
    let userSymptom = $("#symptom").val();
    $("#symptom").val("");
    debugger;

    let promise = classCaller.apiSymptom(userSymptom);

    // let promise = classCaller.apiSymptom(userSymptom);//instance, method, userinput

    promise.then(function(drData) {//once i recieve the api run this function

      drData = JSON.parse(drData); //readability
      let symptom = drData.data.name; //variable created to get info from api array
      console.log(symptom);
      findSymptom(symptom);
      console.log(findSymptom(symptom));

    }, function(Error){
      console.log("Sorry there is an Error loading your request!");
    });
  });//closes click function
});//closes .ready function
