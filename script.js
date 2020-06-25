let date = new Date();
let dayTime = date.getHours();

let btn = document.getElementById('theme');
let attr = btn.getAttribute('href');

if (dayTime > 8 && dayTime < 19) {
    attr = "light.css"
    btn.href = attr;
} else {
    attr = "dark.css"
    btn.href = attr;
}

document.getElementById('switch').onclick = function() {
    // console.log(attr);
    if (attr == "dark.css") {
        attr = "light.css"
        btn.href = "light.css";
    } else if (attr == "light.css") {
        attr = "dark.css"
        btn.href = "dark.css";
    }
};