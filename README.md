# SenoroPro
A SenoroPro hivatalos oldala | A mesterséges intelligencia új szintje


1. Mappaszerkezet kialakítása
2. Legyen egy index.html (ez lesz a landing oldal), valamint 2 további HTML fájl az aloldalak számára.
3. Külön CSS fájl a stílusokhoz
4. Az oldalak mindegyikének legyen címe
5. Bootstrap komponenseket, mint pl. navigációs menü, kártyák, gombok.
6. Figyelni az állapotváltásokra (:hover, :active, stb).
7. A linkek működjenek és mutassanak vagy egyik, vagy másik aloldalra/landingre.
8. ARIA attribútumot használjunk, ha neked is jó. Legyen az a standard.
9.Szeptember végi jegyzetbe bele írtam, hogy használni kell a projektmunkába a <main>, <nav>, <figure> részeket! (képeket a containeren belül rakhatjuk akár ebbe is) 
			- Aside rész? Bár én ezt annyira nem kedvelem :D


FŐ szerkezeti része:
	
	
Body main:
Ide kellene nekem egy "csempe rész" container, 1 sor, 2 oszlopra 50-50%-ra osztva. Az első  oszlopban H1 -es szöveg bekezdésben. Alatta másik szöveg bekezdésben h2-es típussal. Majd tér közötte és gomb típusú link. A baloldali - container - nem kattintható lenne, ott a link (ami buttom stílusú)

A baloldali col-ban 2 sor, 2 oszloppal arányosan elosztva, térköz nélkül. körülöttük vékony csík körbe válassza el egymástól őket. Ezen 4 elemen belül H2-es szöveg. Maga a 4 elemre kattintva linkként üzemeljen és rákattintva lenne funkciója. Fölé húzva az egeret :active-ként a háttér átváltozna egy másik képre (amire vonatkozik)

Utána egy “Stílus és technológia” container>row>col*2, amiben függőlegesen 50-50 arányba legyen felosztva. Elsőben képek lesznek. (Ebben lesz egy telefon app kép, otthoni vezérlőpanel kép, tesla “ipad” nyomogatós kép”.

A kisebb arányúban pedig row*3>col*2 (2:1 arányú):
1.Sor(12/12), Szöveg - a márka/app random sorozatszáma, balra igazítva.
2. Sor (12/6, balos) link (buttom style), ami a “megnézem” és (warning style) legyen. 
 2. Sor (12/6, jobbos) egy “Friss! (vagy újdonság, vagy ilyesmi)” kék színű felirat jobbra igazítva (mint ha frissen jött volna ki) 
Hasonlóan, mint a képen, úgy tudod elképzelni, de nem így fog kinézni.

Utána egy térközzel a következő egy container/bannert, 1 row, 12/12 col. Egy AI jellegű képet szeretnék, amiről átjön a futurisztikus, gépes, informatikai, vagy hasonló, mint egy “AI” által készített karakter nézzen ki. Ilyen kép lenne  egy újabb szakasz előtt és után. Ez lehet olyan sticky-s ami úgy néz ki, mint ha a weboldal mögött lenne


Mesterséges intelligencia
Ezen a részen lenne egy container>row*2>col*5. Ezen belül mind az 5 col 3 row részre lenne bontva függőlegesen. 1 db 50%-os, 1db 35%-os és egy 15%-os row rész.
50%-osban kép
gamer gép
Telefon
Amazon Alexa
Intelligens vezérlők
+1 vmilyen AI eszköz

35%-osban row*2>col*2:
Első sorban: mi van a képen, bold.
Alatta button-style link a baloldali oszlopban,
Jobboldali oszlop

15%-(kisebb arányú)
1 Soros,(12/12), szürke háttér
Betű színe fehér/sötétebb szürke :active pedig kék.
Balra igazítva, ezek nem lesznek linkek.
Szövege: (Telefonok, applikációk, otthoni eszközök, stb.

3 aloldal, ami 2:

A top termékeink rész csak egy anchor lesz az ablakos megjelenés után, ami leviszi őket. Alatta lévő link meg viheti át stílus vagy AI-osra. (körbe linkelve)
A kettő aloldal:
Stílus és technológia (ide kvázi be lehet másolni bármilyen okos-otthon cikket, vagy legenerálni AI-val.
AI - Gamereknek. Ha van időd és energiád, akkor akár Ipon, vagy más oldalakról leszedhetsz kész setup-okat, azokkal lehet telerakni. Például gép, Hardware, software, stb. Ebben szabad kezet adnék. Ha egyszerűbb még át is másolhatod majd a kész containereket.


Footer:
Szürke háttér
Egy árnyalattal feketébb szöveggel
Egy sorban mehet (vagy 2 sor 2-esével (pl: container,2 row,3 col) kisebb betűmérettel, mindegyik rész külön link szerűen legyen, de elég, ha a link egy anchor.

Kapcsolat
Termék megfelelőssége (En)
Hol vásárolhatom meg
Termékbiztonság
Termék visszahívás
Fórumok
Fejlesztések
Támogatás

© 2023 Senovo Pro ltd kft izébizé aljára.

		

Fő színek:
Fehér háttér, Piros logok, kék :active link, stb.



W3 validate check.


Responsivitás:

Telefonra/md alatt:
- Support menüsáv teljes szélességű a kicsi ikon helyett.
- a képek ne torzuljanak és jól skálázódjanak.
- SM és alatta a hamburger menü baloldralra kerüljön, a logo a jobb oldalra a "keresés" menüvel együtt.




CSS gyökér elemben alap betűméret beállítása.
!!! TILOS <button><a> </button></a> !!!

Bele kell raknunk:
 - Háttér (oldalsávon fusson végig piros "hullámok" fehér alap háttérrel.
 - Gamer résznél alul-felül körbefogva - "sticky" elemet belerakni, mint ha a "weboldal mögé látnánk be".
  - Szövegek igazítása (jobb-bal-top-bottom)
 - Szövegek igazítása (sortörés, capitális, stb)
 - Bekezdések (max H6-ig, de flexelhetünk section résszel is. (azon belül meg mehet újra a H1-H6)
 - Kulcsszavak meghatározása (SEO miatt párat gyakrabban alkalmazzunk.)
 - Minden kép rendelkezzen alt attribútummal.



Amit még meg kell csinálni benne:






Félig vagyok kész (elkezdtem, de még nincs kész / módosítani / igazítani / responsivitás / egyéb kell):



Készen vagyok vele lista:

- Bootstrap, java integrálás kódban, css-ben.


TELJES ÁTALAKÍTÁS A FŐMENÜBEN:
- színek módosítása (kék, piros, lilás-rózsaszín, fekete)
- Főoldal offcanvas + navbar (jquery + alap bootstrap mind2)
- Csempe elhelyezés módosítása
- Főoldal main része átalakítva (top termékek közép, rendelési infók alulra, footer alap behelyezése)
- Részenként lesz pusholva.



