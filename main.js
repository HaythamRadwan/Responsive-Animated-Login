let logo1 = document.getElementById("logo1"),
    logo2 = document.getElementById("logo2"),
    label1 = document.getElementById("label1"),
    label2 = document.getElementById("label2"),
    myInput1 = document.getElementById("myInput1"),
    myInput2 = document.getElementById("myInput2"),
    
    myPhone = document.getElementById("myPhone");
    //myForm = document.getElementById("myForm");

//logo.style.display = "block";
//label.style.display = "block";

myInput1.onfocus = function() {
    logo1.style.marginBottom = "20px";
    label1.style.marginBottom = "20px";
};

myInput2.onfocus = function() {
    logo2.style.marginBottom = "20px";
    label2.style.marginBottom = "20px";
};

myInput1.onmouseover = function() {
    logo1.style.marginBottom = "20px";
    label1.style.marginBottom = "20px";
};

myInput2.onmouseover = function() {
    logo2.style.marginBottom = "20px";
    label2.style.marginBottom = "20px";
};

//myInput1.onmouseout = function() {
//    logo1.style.marginBottom = "-10px";
//    label1.style.marginBottom = "-10px";
//};
//
//myInput2.onmouseout = function() {
//    logo2.style.marginBottom = "-10px";
//    label2.style.marginBottom = "-10px";
//};


myPhone.onclick = function() {
    logo1.style.marginBottom = "-10px";
    label1.style.marginBottom = "-10px";
    logo2.style.marginBottom = "-10px";
    label2.style.marginBottom = "-10px";
};


//myForm.onmouseout = function() {
//    logo1.style.marginBottom = "-10px";
//    label1.style.marginBottom = "-10px";
//    logo2.style.marginBottom = "-10px";
//    label2.style.marginBottom = "-10px";
//};

// اظهار ال reForget

let myForget = document.getElementById("forget"),
    reForget = document.getElementById("reForget"),
    myFace = document.getElementById("face"),
    myLogin = document.getElementById("bt-login");

myForget.onclick = function() {
    reForget.style.display = "block";
};
myForget.ondblclick = function() {
    reForget.style.display = "none";
};


//myLogin.onclick = function() {
//    myFace.addEventListener("click");
//};


//if (myInput1.TEXT_NODE !== "" & myInput2.TEXT_NODE !== "") {
//    myLogin.style.backgroundColor = 'red';
//}


//if (myInput1. === "haytham" & myInput2.value === "eyad") {
//    myLogin.style.backgroundColor = 'red';
//    myFace.addEventListener("click");
//}
