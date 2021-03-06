class DoctorSearchTwo {

  apiSymptom(userSymptom){
    let promise = new Promise(function(resolve, reject) {
      let ourRequest = new XMLHttpRequest();
      ourRequest.open('GET', `https://api.betterdoctor.com/2016-03-01/doctors?location=or-portland&user_location=45.5231%2C%20122.6765&skip=0&limit=100&user_key=${process.env.exports.apiKey}&query=${userSymptom}`);
      ourRequest.send();
      ourRequest.onload = function(){
        if (this.status === 200) {
          resolve(ourRequest.response);
        } else {
          reject(Error(ourRequest.statusText));
        }
      }
    });
    return promise;
  }
}
export { DoctorSearchTwo };
