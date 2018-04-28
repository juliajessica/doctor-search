class DoctorSearch2 {

  apiSymptom(userSymptom){
    let ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', `https://api.betterdoctor.com/2016-03-01/doctors?location=or-portland&user_location=45.5231%2C%20122.6765&skip=0&limit=1&user_key=${process.env.API_KEY}`);
    ourRequest.onload = function(){
      console.log(ourRequest);
      let ourData = JSON.parse(ourRequest.responseText);//interpret as json data
      console.log(ourData.data[0].name);
    };
    ourRequest.send();//sends to html
  }

}

export { DoctorSearch2 };
