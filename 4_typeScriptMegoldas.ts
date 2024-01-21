function osszesOszto(szam: number): number[] {
  var oszt: number[] = [];

  for (var i: number = 0; i <= szam; i++) {
      if (szam % szam[i] && szam[i] % 2 == 0) {
          oszt.push(szam[i]);
      }
  }

  return oszt;
}



function parosDarab(szamok: number[]): number[] {
  var parosDb: number[] = [];
  var p: number = 0;

  for (var i: number = 0; i < szamok.length; i++) {
      if (szamok[i] % 2 == 0) {
        
          p++;
          
      }
  }

  return parosDb;
}

