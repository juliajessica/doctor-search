class methods {

  findSymptom(drData, symptom){
    let arrayofSymptoms = [];
    for(let i in symptom){
      if(symptom.includes('uid') && symptom[i] !=null){
        $('ul#listOfSymptoms').append('<li>' + symptom[i] + '</li>');
        arrayofSymptoms.push(symptom[i]);
      }
    }
    return arrayofSymptoms;
  }

}



export { Methods };
