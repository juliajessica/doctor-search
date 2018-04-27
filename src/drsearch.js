class SearchDoctor {
  constructor(){
  }

  apiSymptom(userSymptom) {
    return new promise(function(resolve, reject) {//creating an instance of the promise object

      let symptomRequest = new XMLRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/conditions?user_key=${exports.apiKey}`;

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

export { SearchDoctor };
