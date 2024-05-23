var formdata = new FormData();
formdata.append("type", "Light Square");
formdata.append("tags", "music,party, car,automotive,blog,tips,fashion,health,food,nutrision,farming,animals");
formdata.append("type", "Vertical Strip");
formdata.append("tags", "music,party, car,automotive,blog,tips,fashion,health,food,nutrision,farming,animals");
formdata.append("type", "Thick Vertical");
formdata.append("tags", "music,party, car,automotive,blog,tips,fashion,health,food,nutrision,farming,animals");
formdata.append("type", ",Thick Horizontal");
formdata.append("tags", "music,party, car,automotive,blog,tips,fashion,health,food,nutrision,farming,animals");
formdata.append("type", "Hrozontal Strip");
formdata.append("tags", "music,party, car,automotive,blog,tips,fashion,health,food,nutrision,farming,animals");
formdata.append("type", "Dark Square");
formdata.append("tags", "music,party, car,automotive,blog,tips,fashion,health,food,nutrision,farming,animals");

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
