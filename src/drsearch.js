class DoctorSearch {
  // constructor() {
  // }

  apiSymptom(userSymptom) {
    return new Promise(function(resolve, reject) {

      let symptomRequest = new XMLHttpRequest();//instance
      // console.log(symptomRequest);
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=or-portland&user_location=45.5231%2C%20122.6765&skip=0&limit=50&user_key=${process.env.API_Key}`;

      symptomRequest.onload = function() {
        console.log(symptomRequest);
        if (this.status === 200) {
          console.log(symptomRequest.response);
          resolve(symptomRequest.drData); //run the function
        } else {
          reject(Error(symptomRequest.drData));
        }
      }
      symptomRequest.open("GET", url, true);
      symptomRequest.send();
    });
  }
}//closes class

export { DoctorSearch };
