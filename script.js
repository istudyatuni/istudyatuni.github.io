let btn = document.getElementById('theme');

if (!document.cookie.split(';').some((item) => item.trim().startsWith('theme='))) {
    document.cookie = "theme=light";
}
let t = document.cookie
    .split('; ')
    .find(row => row.startsWith('theme'))
    .split('=')[1];
btn.href = t + ".css";
let attr = btn.getAttribute('href');

document.getElementById('switch').onclick = function() {
    if (attr == "dark.css") {
        attr = "light.css"
        btn.href = attr;
        document.cookie = "theme=light"
    } else if (attr == "light.css") {
        attr = "dark.css"
        btn.href = attr;
        document.cookie = "theme=dark"
    }
};