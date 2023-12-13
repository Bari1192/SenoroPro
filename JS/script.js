const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
let block = false;
function print(text) {
    let x = document.getElementById("doboz");
    (function checkFlag() {
        if (block) {
            window.setTimeout(checkFlag, 150);
        }
        else {
            block = true;
            let i = 0;
            (function type() {
                x.innerHTML += (text.charAt(i));
                if (++i < text.length) {
                    setTimeout(type, 50);
                }
                else {
                    x.innerHTML += "<br>";
                    block = false;
                    setTimeout(() => {
                        document.getElementById('zene').click();
                        x.style.display = "none";
                    }, "1500");
                }
            })();
        }
    })();
}
function temavaltas(x_elem) {
    let elemek = document.getElementsByClassName("atvezeto");
    if (elemek[0].src.includes('light')) {
        document.getElementsByClassName('dropdown-menu')[0].classList.add('dropdown-menu-dark');
        document.getElementById('navos').classList.add('navbar-dark', 'bg-dark');
        for (let i = 0; i < elemek.length; i++) {
            elemek[i].src = "../Kepek/laptop-kepek/thinkpad-dark-theme-" + (i + 1) + ".jpeg";
            elemek[i].alt = "sötét laptop " + (i + 1);
        }
        ['container', 'offcanvas', 'card', 'container-fluid'].forEach(element => {
            elemek = document.getElementsByClassName(element);
            for (let i = 0; i < elemek.length; i++) {
                elemek[i].classList.add('bg-dark', 'text-white');
                elemek[i].classList.remove('bg-white', 'text-dark');
            }
        });
        elemek = document.getElementsByClassName('menuk');
        for (let i = 0; i < elemek.length; i++) {
            elemek[i].classList.add('btn-dark');
            elemek[i].classList.remove('btn-light');
        }
        x_elem.classList.add('btn-light');
        x_elem.classList.remove('btn-dark');
    }
    else {
        if (elemek[0].src.includes('dark')) {
            document.getElementById('navos').classList.remove('navbar-dark', 'bg-dark');
            document.getElementsByClassName('dropdown-menu')[0].classList.remove('dropdown-menu-dark');
            for (let i = 0; i < elemek.length; i++) {
                elemek[i].src = "../Kepek/laptop-kepek/thinkpad-light-theme-" + (i + 1) + ".jpeg";
                elemek[i].alt = "vilagos laptop " + (i + 1);
            }
            elemek = document.getElementsByClassName('menuk');
            for (let i = 0; i < elemek.length; i++) {
                elemek[i].classList.remove('btn-dark');
                elemek[i].classList.add('btn-light');
            }
            ['container', 'offcanvas', 'card', 'container-fluid'].forEach(element => {
                elemek = document.getElementsByClassName(element);
                for (let i = 0; i < elemek.length; i++) {
                    elemek[i].classList.remove('bg-dark', 'text-white');
                    elemek[i].classList.add('bg-white', 'text-dark');
                }
            });
            x_elem.classList.remove('btn-light');
            x_elem.classList.add('btn-dark');
        }
    }
}
document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.altKey && event.key === 'g') {
        document.body.innerHTML += '<div id="doboz"></div><a id="zene" href="https://youtu.be/8GliyDgAGQI?si=IebGQnzYdlFM2oXZ&t=45" target="_blank"></a>';
        document.getElementById("doboz").style.display = "flex";
        document.getElementById("doboz").innerHTML = ""; /*általános felhasználhatóság miatt itt törlök*/
        print('Hey Sziri! Aleksza játssz le rap zenét!');
        console.log(window.navigator.userAgent.toString())
    }
});

function showTime(){
    var date = new Date();
    // var h = date.getHours(); // 0 - 23
    // var m = date.getMinutes(); // 0 - 59
    // var s = date.getSeconds(); // 0 - 59

    var kari = new Date("2023-12-23");
    var x = kari-date;
    let nap = Math.floor(Math.floor(x / 1000) / 60 / 60 / 24);
    if (nap < 1){
        nap = "Az akció már elkezdődött!"
    }
    else{
        nap = "Már csak " + nap + " nap és akció."
    }
    // var time = h + ":" + m + ":" + s;
    document.getElementById("szamlalo").innerText = nap;
    
    setTimeout(showTime, 1000);
    
}
if (location.pathname.split('/').slice(-1) == "thinkpad.html"){
    showTime();
}

function kereses(){
    let szoveg = document.getElementsByTagName('input')[0].value.toLowerCase();
    let esetek = [];
    let nav_elemek = document.getElementsByClassName('nav-item');
    for (let i = 0; i < nav_elemek.length; i++){
        esetek.push(nav_elemek[i].innerText.toLowerCase());
    }
    nav_elemek = document.getElementsByClassName('dropdown-item');
    for (let i = 0; i < nav_elemek.length; i++){
        esetek.push(nav_elemek[i].innerText.toLowerCase());
    }
    if (esetek.includes(szoveg)){
        alert("megvan")
    }
    document.getElementsByTagName('input')[0].value = "";
}