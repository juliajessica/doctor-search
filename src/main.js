// import { Methods } from './methods.js';
import { DoctorSearchTwo } from './drsearch2.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

//
function findSymptom(response, userSymptom){
  debugger;

  for (let i=0;  i<response.data.length; i++){
    let first = response.data[i].profile.first_name;
    let last = response.data[i].profile.last_name;
    let title = response.data[i].profile.title;
    // let speciality = response.data[i].specialties[0].name;
    // + "</br><strong>Specialty: </strong>" + speciality
    let description = response.data[i].specialties[0].description;
    let address = response.data[i].practices[0].visit_address.street  + ", " +  response.data[i].practices[0].visit_address.city + ", "
    + response.data[i].practices[0].visit_address.state + " " +  response.data[i].practices[0].visit_address.zip
;
    let phoneNumber = response.data[i].practices[0].phones[0].number;
    let accepting = response.data[i].practices[0].accepts_new_patients;
    // let image = response.data[i].profile.image_url;

    if (first != null && first != '' || last != null && last != ''|| title != null && title != '' || description != null && description != '' || address != null && address != '' || phoneNumber != null && phoneNumber != '' || accepting != null && first != ''){
      // $("p#image").append('<img src="'+ image +'">');
      // $("h3#symptom").append("<strong>Symptom: </strong>" + userSymptom);
      $(".doctor-output").prepend("</br><strong>First Name: </strong>" + first + "</br><strong>Last Name: </strong>" + last + "</br><strong>Title: </strong>" + title + "</br><strong>Description: </strong>" + description + "</br><strong>Address: </strong>" + address + "</br><strong>Phone Number: </strong>" + phoneNumber +  "</br><strong>Avalibility: </strong>" + accepting + "</br>");
    } else {
      $(".error-output").prepend("Sorry, there are no professionals that fit that criteria");



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
      findSymptom(response, userSymptom);//json API data, user input
    }, function(Error){
      $(".error-output").html("Sorry there is an Error loading your request!");
    });
  });
});
