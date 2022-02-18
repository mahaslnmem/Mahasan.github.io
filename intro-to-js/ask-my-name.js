function askMyName() {
    const name = prompt("Please Tell me your name", "Ironman")
 
    if (name != null) {
       document.getElementById("my-name").innerHTML = "My name is " + name;
    }
 }
 
 function helloWorld() {
 const h1message = document.getElementById("my-name").innerHTML
    alert(h1message + "กู้ทุกอย่าง...ยกเว้นระเบิด")
 }

 function calAge() {
     let age = prompt("What year were you born?")
     yourAge = 2022 - age
     alert(`ยินดีด้วย นายอยู่ในประเทศนี้มา ${yourAge} ปีแล้ว`)

 }

 function loadProfile() {
     MyName = "Mahasan Wanamee"
     Province = "Samut Prakan"
     document.getElementById("my-name-profile").innerHTML = MyName
     document.getElementById("my-province").innerHTML = Province
 }