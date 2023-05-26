import 'remixicon/fonts/remixicon.css';
import { Splide } from "@splidejs/splide";

function hour() {
    var today = new Date();

    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();

    if(today.getHours() < 10) hour = '0' + hour;
    if(today.getMinutes() < 10) minute = '0' + minute;
    if(today.getSeconds() < 10) second = '0' + second;

    var time = hour + ":" + minute + ":" + second;
    document.getElementById("hora_input").innerText = time;
}

setInterval(hour, 1000);

new Splide( '#image-carousel' ).mount();