function osszesOszto(szam) {
    var oszt = [];
    for (var i = 0; i <= szam; i++) {
        if (szam % szam[i] && szam[i] % 2 == 0) {
            oszt.push(szam[i]);
        }
    }
    return oszt;
}
function parosDarab(szamok) {
    var parosDb = [];
    var p = 0;
    for (var i = 0; i < szamok.length; i++) {
        if (szamok[i] % 2 == 0) {
            p++;
        }
    }
    return parosDb;
}
