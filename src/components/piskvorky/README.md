Letní Škola 2020 - Programování
===============================

Piškvorky
=========

Demo aplikace pro výuku JavaScriptu.

Level 1 - Zadání
----------------
Obhlédni si výchozí projekt. Je zde webová stránka `index.html`, vizuální styl `style.css`
a zatím nepoužívaný soubor `hra.js`.



Level 2 - Tabulka
-----------------
Připrav si tabulku pro piškvorky. Musí být alespoň 5x5 (může mít i vetší počet sloupců a řádků).
Tabulka v HTML se zapisuje takto:

~~~
<table>
  <tr>
    <td>Z</td>
    <td>Z</td>
    <td>Z</td>
  </tr>
  <tr>
    <td>Z</td>
    <td>Z</td>
    <td>Z</td>
  </tr>
  <!-- opakuj tr kolikrat chces -->
</table>
~~~

Tabulce přiděl `id="deska"`, aby se vykreslovala hezky. Na toto `id` je totiž zacílen vizuální styl.

~~~
<table id="deska">
~~~



Level 3 - Přidej JavaScript
---------------------------
Tabulka je zatím jen zobrazena. Při kliknutí na ni se nic neděje.
Přidej do souboru html odkaz na `hra.js` a všimni si, že se tabulka vymaže.
Tento skript navíc zajišťuje vyhodnocení případného vítězství hráče. Není ale nutný.
Pokud ho nepřidáš, tabulka se prostě nebude na začátku vymazávat a v budoucnu se nebude vyhodnocovat vítězství.

index.html
~~~
    <table id="deska">
       ...
    </table>

    <script src="hra.js"></script>
</body>
~~~

Dále založ nový soubor - skript `script.js` a v HTML se na něj odkaž. Do skriptového souboru budeš programovat funkcionalitu piškvorek.

script.js
~~~
alert("Ahoj")
~~~

index.html
~~~
    <table id="deska">
       ...
    </table>

    <script src="hra.js"></script>
    <script src="script.js"></script>
</body>
~~~



Level 4 - Přidej reakci na kliknutí na buňku
--------------------------------------------
Přidej do svého nově založeného skriptu `script.js` funkci:

~~~
function priKliknutiNaBunku(event) {
    alert("Funguje")
}
~~~

A tuto funkci nastav u tabulky:

~~~
    <table id="deska" onclick="priKliknutiNaBunku(event)">
       ...
    </table>
~~~



Level 5 - Polož symbol hráče do buňky
-------------------------------------
Ve skriptu `script.js` ve funkci `priKliknutiNaBunku` nahraď `alert` novou funkcionalitou.
Půjde o nastavení symbolu `X` do buňky, na kterou se kliklo:

~~~
function priKliknutiNaBunku(event) {
    // Nadefinuj prazdnou promennou bunkaTabulky
    let bunkaTabulky

    // Vloz do promenne bunkaTabulky prvek <td> z HTML, na ktery se kliklo
    bunkaTabulky = event.target

    // Vloz do vnitrku bunky (tedy <td>SEM</td>) symbol hrace
    bunkaTabulky.textContent = "X"
}
~~~



Level 6 - Změna hráče
---------------------
Přidej změnu hráče z `X` na `O`. Prozatím jen jednorázovou. Bude tedy třeba mít aktuálního hráče v proměnné,
která bude měnit svůj obsah.

~~~
let aktualniHrac = "X"

function priKliknutiNaBunku(event) {
    ...
}
~~~

Dále použij tyto příkazy:

~~~
// Vloz do vnitrku bunky (tedy <td>SEM</td>) text z promenne aktualniHrac
bunkaTabulky.textContent = aktualniHrac
~~~

~~~
// Vymen symbol hrace
aktualniHrac = "O"
~~~



Level 7 - Pravidelné střídání hráčů
-----------------------------------
Přidej možnost pravidelného střídání hráčů pomocí podmínky. Můžeš použít následující příkazy:

~~~
// Vymen symbol hrace
if (aktualniHrac === "X") {
    aktualniHrac = "O"
} else {
    aktualniHrac = "X"
}
~~~



Level 8 - Nepřepisování buněk
-----------------------------
Program se chová nešikovně v tom, že když hráč klikne na již obsazenou buňku,
její obsah se i tak přepíše.
To by se dít nemělo. Přidej do programu podmínku navíc, aby se tomu zamezilo.

~~~
if (bunkaTabulky.textContent === "") {
    // Poloz symbol hrace
}
~~~



A je to!