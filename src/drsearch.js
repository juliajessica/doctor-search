class DoctorSearch {
  constructor(){

  }
  apiSymptom(userSymptom){
    return new promise(function(resolve, reject){//creating an instance of the promise object
      const symptomRequest = new XMLRequest();
      const url = `https://api.betterdoctor.com/2016-03-01/specialties?user_key=${exports.apiKey}`;

      symptomRequest.onload = function(){
        console.log(symptomRequest);
        if (this.status === 200) {
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
