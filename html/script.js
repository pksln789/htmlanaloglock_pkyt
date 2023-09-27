let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displaytime(){
    let date = new date();
    //getting hour, minute, second, from date
    let hh = date.gethours();
    let mm = date.getminutes();
    let ss = date.getseconds();

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    hr.style.transform = `rotate(${hRotation}deg)`;

   

}

setInterval(displaytime,1000);