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