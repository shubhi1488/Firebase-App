//getting data from textBox
var RollBox=document.getElementById('rollBox');
var NameBox=document.getElementById('nameBox');
var GenderBox=document.getElementById('genderBox');
var AddressBox=document.getElementById('addressBox');
//button references-
document.querySelectorAll('.btns')[0].onclick=insertData;
document.querySelectorAll('.btns')[1].onclick=readData;
document.querySelectorAll('.btns')[2].onclick=updateData;
document.querySelectorAll('.btns')[3].onclick=deleteData;

function insertData(event){
    event.preventDefault();
    console.log("btn clicked");
    readFormData();
    clearFormData();

}
function readData(event){
    event.preventDefault();
    console.log("btn clicked");
    readFormData();
    clearFormData();

}
function updateData(event){
    event.preventDefault();
    console.log("btn clicked");
    readFormData();
    clearFormData();

}
function deleteData(event){
    event.preventDefault();
    console.log("btn clicked");
    readFormData();
    clearFormData();

}
var rollv,namev,genderv,addressv;
function readFormData(){
rollv=RollBox.value;
namev=NameBox.value;
genderv=GenderBox.value;
addressv=AddressBox.value;
console.log(rollv,namev,genderv,addressv);
}
function clearFormData(){
    RollBox.value="";
    NameBox.value="";
    GenderBox.value="";
    AddressBox.value="";
}
