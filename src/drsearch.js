class DoctorSearch {
  constructor() {
  }

  apiSymptom(userSymptom) {
    return new Promise(function(resolve, reject) {


      let symptomRequest = new XMLRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/conditions?user_key=${process.env.API_Key}`;

      symptomRequest.onload = function() {
        console.log(symptomRequest);
        if (this.status === 200) {
          console.log(symptomRequest.response);
          resolve(symptomRequest.response); //run the function
        } else {
          reject(Error(symptomRequest.statusText));
        }
      }
      symptomRequest.open("GET", url, true);
      symptomRequest.send();
    });
  }
}//closes class

export { DoctorSearch };
