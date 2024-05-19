var formdata = new FormData();
formdata.append("type", "Thick Horizontal, Horizontal Strip");
formdata.append("tags", "car,maintenance,blog,automotive,tips, mechanic,conversation");

var ajax = new XMLHttpRequest();
ajax.addEventListener("load", completeHandler, false);

ajax.open("POST", "https://ad.simaneka.com/api/get");
ajax.setRequestHeader("authorisation", "oK8T7ocigzWnY0RGNv5UzfBx33GSEFa5");

ajax.send(formdata);

function completeHandler(event) {
    var response = JSON.parse(event.target.responseText);

    console.log(response);
    document.querySelector('.advertIMG').src = response.link;
    document.querySelector('.advertIMG').alt = response.alt;
    document.querySelector('.anchorElement').href = response.href;
    document.querySelector('.headerText').innerHTML = response.message;
}
