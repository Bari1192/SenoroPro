const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
let block = false;
let x = document.getElementById("doboz");
function print(text) {
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
function temavaltas(x) {
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
        x.classList.add('btn-light');
        x.classList.remove('btn-dark');
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
            x.classList.remove('btn-light');
            x.classList.add('btn-dark');
        }
    }
}
document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.altKey && event.key === 'g') {
        x.style.display = "flex";
        x.innerHTML = ""; /*általános felhasználhatóság miatt itt törlök*/
        print('Hey Sziri! Aleksza játssz le rap zenét!');
        console.log(window.navigator.userAgent.toString())
    }
});