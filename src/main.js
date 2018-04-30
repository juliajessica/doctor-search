import { DoctorSearchTwo } from './drsearch2.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';


function findSymptom(response, userSymptom){
  debugger;
  for (let i=0;  i<response.data.length; i++){
    let first = response.data[i].profile.first_name;
    let last = response.data[i].profile.last_name;
    let title = response.data[i].profile.title;
    let speciality = response.data[i].specialties[0].name;
    let description = response.data[i].specialties[0].description;
    let address = response.data[i].practices[0].visit_address.street  + ", " +  response.data[i].practices[0].visit_address.city + ", "
    + response.data[i].practices[0].visit_address.state + " " +  response.data[i].practices[0].visit_address.zip;
    let phoneNumber = response.data[i].practices[0].phones[0].number;
    let website = response.data[i].practices[0].website;
    let accepting = response.data[i].practices[0].accepts_new_patients;

    // let image = response.data[i].profile.image_url;

    if (website === undefined) {
      website = "Sorry, there is no website at this very moment";
    }

    if (first != null && first != '' || last != null && last != ''|| title != null && title != '' || description != null && description != '' || address != null && address != '' || phoneNumber != null && phoneNumber != '' || website != null && website != '' || accepting != null && accepting != ''){
      // $("p#image").append('<img src="'+ image +'">');
      // $("h3#symptom").append("<strong>Symptom: </strong>" + userSymptom);
      $(".doctor-output").show();
      $(".doctor-output").prepend("</br><strong>First Name: </strong>" + first + "</br><strong>Last Name: </strong>" + last + "</br><strong>Title: </strong>" + title + "</br><strong>Specialty: </strong>" + speciality + "</br><strong>Description: </strong>" + description + "</br><strong>Address: </strong>" + address + "</br><strong>Phone Number: </strong>" + phoneNumber + "</br><strong>Website: </strong>" + "<a href='" + website + "'>" + website + "</a>" + "</br><strong>Avalibility: </strong>" + accepting + "</br><button type='button' class='btn btn-primary' id='more-info' data-toggle='modal' data-target='#addressModal'>Book an Appointment</button>" + "</br><hr>");


    } else {
      $(".error-output").prepend("Sorry, there are no professionals that fit that criteria");



    }
  }
}

$(document).ready(function(){
  $("#dr-btn").click(function(event){
    event.preventDefault();
    let classCaller = new DoctorSearchTwo();
    let userSymptom = $("#symptom").val();
    $("#symptom").val("");

    let promiseSymptom = classCaller.apiSymptom(userSymptom);//instance, method, userinput

    promiseSymptom.then(function(response) {
      response = JSON.parse(response);
      // console.log(response);
      findSymptom(response, userSymptom);//json API data, user input
    }, function(Error){
      $(".error-output").html("Sorry there is an Error loading your request!");
    });
  });
});
