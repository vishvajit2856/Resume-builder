function generateResume() {
  let firstname = document.getElementById("first_name");
  temp = firstname.value;

  let midelname = document.getElementById("middel_name");
  temp2 = midelname.value;

  let lastname = document.getElementById("last_name");
  temp3 = lastname.value;

  let output = document.getElementById("fullname");
  output.innerText = temp + " " + temp2 + " " + temp3;

  //  address,phone,email
  let phoneno = document.getElementById("phone_no");
  temp4 = phoneno.value;
  let tem4 = document.getElementById("phone");
  tem4.innerText = temp4;

  let emailid = document.getElementById("email");
  temp5 = emailid.value;
  let tem5 = document.getElementById("email1");
  tem5.innerText = temp5;

  let address = document.getElementById("address");
  temp6 = address.value;
  let tem6 = document.getElementById("address1");
  tem6.innerText = temp6;

  //phots , designation ,dob

  //need how to access photo
  let Abouttext=document.getElementById("summary");
  temp7=Abouttext.value;
  let tem7=document.getElementById("About-text");
  tem7.innerText=temp7;

  //access designation section
  let designation3 = document.getElementById("Designation");
  let temp8 = designation3.value;
  let tem8=document.getElementById("Designation2");
  tem8.innerText=temp8;
  

  //achivemnt titel,description

  let achivementtitel = document.getElementById("achivement-titel");
  let temp9 = achivementtitel.value;
   console.log(temp9);
  let tem9=document.getElementById("Achivement-titel1");
  tem9.innerText=temp9;


  let achivementdescription = document.getElementById("achivement-description");
  let temp10 = achivementdescription.value;
  let tem10=document.getElementById("Achivement-description");
  tem10.innerText=temp10;


   let educationschool=document.getElementById("education-school");
   temp11=educationschool.value;
   console.log(temp11);   
   let tem11=document.getElementById("xth");
   tem11.innerText=temp11;
   
  
   let skill1=document.getElementById("skill-1");
   temp12=skill1.value;
   let tem12=document.getElementById("skill--1");
   tem12.innerText=temp12;

   let skill2=document.getElementById("skill-2");
   temp13=skill2.value;
   let tem13=document.getElementById("skill--2");
   tem13.innerText=temp13;
   
   
   let skill3=document.getElementById("skill-3");
   temp14=skill3.value;
   let tem14=document.getElementById("skill--3");
   tem14.innerText=temp14;
   
   let skill4=document.getElementById("skill-4");
   temp15=skill4.value;
   let tem15=document.getElementById("skill--4");
   tem15.innerText=temp15;


   let school=document.getElementById("education-school");
   temp16=school.value;
   let tem16=document.getElementById("xth");
   tem16.innerText=temp16;

   let collage=document.getElementById("education-collage");
   temp17=collage.value;
   let tem17=document.getElementById("xiith");
   tem17.innerText=temp17;
   
   let degree=document.getElementById("education-degree");
   temp18=degree.value;
   let tem18=document.getElementById("degree");
   tem18.innerText=temp18;

   //marks of the 10 th 12th and degree

   let schoolMarks=document.getElementById("education-school-marks");
   let per =schoolMarks.value;
   let per1=document.getElementById("xth--marks");
  per1.innerText=per;
  
  let collageMarks=document.getElementById("education-collage-marks");
  let per2=collageMarks.value;
  let per3=document.getElementById("xiith--marks");
  per3.innerText=per2;
  
  let degreeMarks=document.getElementById("education-degree-marks");
let per4=degreeMarks.value;
let per5=document.getElementById("degree--marks");
 per5.innerText=per4;

let per6=document.getElementById("project-name").value;
let per8=document.getElementById("project-titel").innerText=per6;

let per9=document.getElementById("project-description").value;
let per10=document.getElementById("project--description").innerText=per9;

let per12=document.getElementById("project-link").value;
let per11=document.getElementById("project--link").innerText=per12;


let per13=document.getElementById("start-date-project").value;
let per14=document.getElementById("end-date-project").value;
console.log(per13);
console.log(per14);

let per15=document.getElementById("duration").innerText="Duration :" + per13 + " "+"To" + " " +per14;





}

function replaceImage(event) {
  var input = event.target;
  console.log("input");

  var reader = new FileReader();

  reader.onload = function () {
    var existingImage = document.getElementById("existingImage");
    existingImage.src = reader.result;
  };

  reader.readAsDataURL(input.files[0]);
}
