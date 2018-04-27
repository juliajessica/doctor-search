class DoctorSearch {
  // constructor() {
  // }

  apiSymptom(userSymptom) {
    return new Promise(function(resolve, reject) {

      let symptomRequest = new XMLHttpRequest();
      console.log(symptomRequest);
      let url = `https://api.betterdoctor.com/2016-03-01/conditions?user_key=${process.env.API_Key}`;
      console.log(url);

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
