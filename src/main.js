import { DoctorSearch } from './drsearch.js';
import { Methods } from './methods.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  $('#dr-btn').click(function(){
    let classCaller = new DoctorSearch();//instance of object
    let userSymptom = $('#symptom').val();
    $('#symptom').val('');

    let promiseSymptom = classCaller.apiSymptom(userSymptom);//instance, method, userinput

    promiseSymptom.then(function(drData) {//once i recieve the api run this function
      drData = JSON.parse(drData); //readability
      let symptom = drData.data[0]; //variable created to get info from api array
      findSymptom(symptom);
    }, function(Error){
      console.log('Sorry there is an Error loading your request!');
    });
  });//closes click function
});//closes .ready function
