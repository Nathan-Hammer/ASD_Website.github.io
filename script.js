var formdata = new FormData();
formdata.append("type", "Thick Horizontal, Horizontal Strip");
formdata.append("tags", "car,maintenance,blog,automotive,tips,mechanic,conversation");

var ajax = new XMLHttpRequest();
ajax.addEventListener("load", completeHandler, true); // Changed to true to capture both load and error events

ajax.open("POST", "https://ad.simaneka.com/api/get");
ajax.setRequestHeader("Authorization", "oK8T7ocigzWnY0RGNv5UzfBx33GSEFa5"); // Corrected typo

ajax.onerror = function() { // Added error handling
    console.error("AJAX request failed.");
};

ajax.send(formdata);

function completeHandler(event) {
    var response = JSON.parse(event.target.responseText);

    console.log(response);
    document.querySelector('.advertIMG').src = response.link;
    document.querySelector('.advertIMG').alt = response.alt;
    document.querySelector('.anchorElement').href = response.href;
    document.querySelector('.headerText').innerHTML = response.message;
}
