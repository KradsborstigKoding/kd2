let Otto = {name: "Otto", picture: "Otto.jpg"}
let Johanna ={name: "Johanna", picture: "Johanna.jpg"}
let Rikke = {name: "Rikke", picture: "Rikke.jpg"}
let Kariogrikke = {name: "Kári og rikke", picture: "Kariogrikke.jpg"}
let Sara = {name: "Sara", picture: "Sara.jpg"}
let Drew ={ name: "Drew", picture: "Drew.jpg"}
let Jeppe = {name: "Jeppe", picture: "Jeppe.jpg"}
let Emilie = {name: "Emilie", picture: "Emilie.jpg"}
let Stella = {name: "Stella", picture: "Stella.jpg"}
let Marie = {name: "Marie", picture: "Marie.jpg"}
let loading = {
    name: "Computeren arbejder i højeste hastighed på at finde svaret", 
    picture: "loading.png"
};
let loadingTime = 5000;

showRotatingPic(loading.picture);

setTimeout(displayRoommate,loadingTime);

function displayRoommate(){

    let room = dayConv(diffInDays());

    if (room == 0 ){
        showNameAndPic(Kariogrikke)
    } else if (room == 1){
        showNameAndPic(Kariogrikke)
    } else if (room == 2){
        showNameAndPic(Sara)
    } else if (room == 3){
        showNameAndPic(Drew)
    } else if (room == 4){
        showNameAndPic(Jeppe)
    } else if (room == 5){
        showNameAndPic(Emilie)
    } else if (room == 6){
        showNameAndPic(Stella)
    } else if (room == 7){
        showNameAndPic(Marie)
    } else if (room == 8){
        showNameAndPic(Otto)
    } else if (room == 9){
        showNameAndPic(Johanna)
    } else if (room == 10){
        showNameAndPic(Rikke)
    } else {
        alert(error)
    }
}

function dayConv(days){
    return Math.floor((diffInDays() % 77)/7)
}

function showNameAndPic(name) {
    showPic(name.picture);
    showName(name.name);
}

function showRotatingPic(logo) {
    let logoPic = document.createElement("IMG");
    logoPic.setAttribute("src", logo);
    logoPic.setAttribute("class", "rotate");
    let el = document.getElementById('billede').appendChild(logoPic);
    setTimeout(function(){el.parentNode.removeChild(el)}, loadingTime);
}

function showPic(roommateName) {
    let roommatePic = document.createElement("IMG");
    roommatePic.setAttribute("src", roommateName);
    roommatePic.setAttribute("class", "imgStyle");
    document.getElementById('billede').appendChild(roommatePic);
}

function showName(roommateName) {
    let name = document.getElementById("name").innerHTML = roommateName;
    document.body.appendChild(name);
}

function diffInDays(){ 
    let dayZero = new Date("10/7/2019"); 
    let today = new Date(); 
    let diffInTime = today.getTime() - dayZero.getTime(); 
    let diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24)); 
    return diffInDays
}


