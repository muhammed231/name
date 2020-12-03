function ageCount() {
  let now = new Date();                            //getting current date
  let currentY=now.getFullYear();                //extracting year from the date
  let currentM=now.getMonth();                   //extracting month from the date

  let dobget =document.getElementById("birthday").value; //getting user input
  let dob= new Date(dobget);                             //formatting input as date
  let prevY= dob.getFullYear();                          //extracting year from input date
  let prevM= dob.getMonth();                             //extracting month from input date

  let ageY =currentY - prevY;
  let ageM =Math.abs(currentM- prevM);          //converting any negative value to positive

  document.getElementById('demo').innerHTML = ageY +' years ' + ageM +' months';
  }
