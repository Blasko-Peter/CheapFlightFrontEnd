# CheapFlightFrontEnd

Egy repülőjegy összehasonlító oldal, melynek front-end-je React-ban íródott.

A Java-s back-end-ről kapja meg a lehetséges városok neveit, majd a kiindulási várost és a cél várost is beállíthatjuk legördülő menü segítségével, illetve megadhatjuk még az utazás kezdetének dátumát, és ez alapján első körben a back-end-en generált saját adatbázisból keresi vissza az általunk megadott paraméterek alapján a járatokat és írja azokat ki nekünk áruk szerint növekvő sorrendben.

Késöbb az a terv, hogy a back-end Selenium segítségével valós járatokat keressen más hivatalos weboldalakon és ezeket a valós adatokat adja vissza a felhasználónak.

A projekt, most már valós adatokkal dolgozik, hiszen a selenium segítségével az általunk megadott paraméterek alapján a www.cheapoair.com oldalról kikeresi a megfelelő járatokat és azokat jeleníti meg a front-end.

További terv az, hogy max 5 utat mutasson egy keresésre, hiszen itt csak a legolcsóbb járatokat keressük, és párhuzamosan több oldalról is töltsön le valós járatokat, bár ez még egy kicsit nehéz, mert a korona vírus miatt a légitársaságok zöme még nem rendelkezik menetrenddel.

Jelenleg csak az aktuális mai naptól tud keresni az aktuális hónapban a back-end, így jelenleg csak ebben az időtartományban kaphatsz helyes adatokat!!!

