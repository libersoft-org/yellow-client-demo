let elementDeska
let elementyBunek
let pocetRadku
let pocetSloupcu
let aktualniHrac = "X"

export function priKliknutiNaBunku(event) {
    // Nadefinuj prazdnou promennou bunkaTabulky
    let bunkaTabulky

    // Vloz do promenne bunkaTabulky prvek <td> z HTML, na ktery se kliklo
    bunkaTabulky = event.target

    // Pouze pokud je vnitrni obsah bunkaTabulky prazdny
    if (bunkaTabulky.textContent === "") {
        // Vloz do vnitrku bunky (tedy <td>SEM</td>) text z promenne aktualniHrac
        bunkaTabulky.textContent = aktualniHrac

        // Vymen hodnotu v aktualniHrac
        if (aktualniHrac === "X") {
            aktualniHrac = "O"
        } else {
            aktualniHrac = "X"
        }
    }
}

export function priNacteniStranky() {
    
    console.log("Ahoj");
    // Vyhledame si v HTML element <table id="deska"> a ulozime si ho
    elementDeska = document.querySelector("#deska")
    console.log(elementDeska);
    // Vyhledame si v HTML elementy <td>
    elementyBunek = document.querySelectorAll("#deska tr > td")
    console.log(elementyBunek);
    // Nase tabulka ma Y radku a X sloupcu
    pocetRadku = document.querySelectorAll("#deska tr").length
    pocetSloupcu = document.querySelectorAll("#deska tr:first-child > td").length

    // Vycistime tabulku
    vymazDesku()

    // Bunkam tabulky pridame udalost reagujici na kliknuti mysi
    pridejObsluhuKliknutiNaBunku()
}

// Projde celou tabulku a vymaze text ve vsech bunkach
function vymazDesku() {
    // projdeme postupne vsechny bunky tabulky
    for (let i = 0; i < elementyBunek.length; i++) {
        // Kazdou bunku vymazeme
        let elementJedneBunky = elementyBunek.item(i)
        elementJedneBunky.textContent = ""
    }
}

// Vsem bunkam tabulky pridame obsluhu udalosti reagujici na kliknuti mysi
function pridejObsluhuKliknutiNaBunku() {
    elementDeska.addEventListener("click", zkontrolujVyhru)
}

// Vsem bunkam tabulky odebereme obsluhu udalosti reagujici na kliknuti mysi
function odeberObsluhuKliknutiNaBunku() {
    elementDeska.removeEventListener("click", zkontrolujVyhru)
}

// Projdeme vsechny bunky tabulky a hledame v nich radu 5 stejnych neprazdnych policek
function zkontrolujVyhru() {
    let vyherce
    let kamen1
    let kamen2
    let kamen3
    let kamen4
    let kamen5

    for (let y = 0; y < pocetRadku; y = y + 1) {
        for (let x = 0; x < pocetSloupcu - 4; x = x + 1) {
            kamen1 = elementDeska.rows[y].cells[x].innerHTML.trim()
            kamen2 = elementDeska.rows[y].cells[x + 1].innerHTML.trim()
            kamen3 = elementDeska.rows[y].cells[x + 2].innerHTML.trim()
            kamen4 = elementDeska.rows[y].cells[x + 3].innerHTML.trim()
            kamen5 = elementDeska.rows[y].cells[x + 4].innerHTML.trim()
            if (kamen1 !== "" && kamen1 === kamen2 && kamen1 === kamen3 && kamen1 === kamen4 && kamen1 === kamen5) {
                vyherce = kamen1
            }
        }
    }
    for (let y = 0; y < pocetRadku - 4; y = y + 1) {
        for (let x = 0; x < pocetSloupcu; x = x + 1) {
            kamen1 = elementDeska.rows[y].cells[x].innerHTML.trim()
            kamen2 = elementDeska.rows[y + 1].cells[x].innerHTML.trim()
            kamen3 = elementDeska.rows[y + 2].cells[x].innerHTML.trim()
            kamen4 = elementDeska.rows[y + 3].cells[x].innerHTML.trim()
            kamen5 = elementDeska.rows[y + 4].cells[x].innerHTML.trim()
            if (kamen1 !== "" && kamen1 === kamen2 && kamen1 === kamen3 && kamen1 === kamen4 && kamen1 === kamen5) {
                vyherce = kamen1
            }
        }
    }
    for (let y = 0; y < pocetRadku - 4; y = y + 1) {
        for (let x = 0; x < pocetSloupcu - 4; x = x + 1) {
            kamen1 = elementDeska.rows[y].cells[x].innerHTML.trim()
            kamen2 = elementDeska.rows[y + 1].cells[x + 1].innerHTML.trim()
            kamen3 = elementDeska.rows[y + 2].cells[x + 2].innerHTML.trim()
            kamen4 = elementDeska.rows[y + 3].cells[x + 3].innerHTML.trim()
            kamen5 = elementDeska.rows[y + 4].cells[x + 4].innerHTML.trim()
            if (kamen1 !== "" && kamen1 === kamen2 && kamen1 === kamen3 && kamen1 === kamen4 && kamen1 === kamen5) {
                vyherce = kamen1
            }
        }
    }
    for (let y = 0; y < pocetRadku - 4; y = y + 1) {
        for (let x = 4; x < pocetSloupcu; x = x + 1) {
            kamen1 = elementDeska.rows[y].cells[x].innerHTML.trim()
            kamen2 = elementDeska.rows[y + 1].cells[x - 1].innerHTML.trim()
            kamen3 = elementDeska.rows[y + 2].cells[x - 2].innerHTML.trim()
            kamen4 = elementDeska.rows[y + 3].cells[x - 3].innerHTML.trim()
            kamen5 = elementDeska.rows[y + 4].cells[x - 4].innerHTML.trim()
            if (kamen1 !== "" && kamen1 === kamen2 && kamen1 === kamen3 && kamen1 === kamen4 && kamen1 === kamen5) {
                vyherce = kamen1
            }
        }
    }

    if (typeof(vyherce) !== "undefined" && vyherce !== null) {
        alert("Vyhr\u00E1l hr\u00E1\u010D " + vyherce)
        odeberObsluhuKliknutiNaBunku()
    }
}
