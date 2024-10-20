function carSimulator(marka, model, kilometre, fiyat) {
  const arac = new Object();
  arac.marka = marka;
  arac.model = model;
  arac.kilometre = kilometre;
  arac.fiyat = fiyat;
  arac.depo = 50;
  const newArac = { ...arac };
  newArac.getPrice = function () {
    return `Arabanın güncel piyasa değeri ${newArac.fiyat} TL'dir.`;
  };
  newArac.refuel = function (oran) {
    newArac.depo += oran;
    if (newArac.depo > 100) {
      newArac.depo = 100;
      return `Depo %${newArac.depo} doludur.`;
    } else {
      return `Depo %${newArac.depo} doludur.`;
    }
  };
  newArac.drive = function (km) {
    newArac.kilometre += km;
    let lostFuel = (km / 100) * 5;
    newArac.depo -= lostFuel;
    let lostPrice = (km / 100) * 50;
    newArac.fiyat -= lostPrice;
    return `Araba'nın güncel kilometresi:${newArac.kilometre}`;
  };
  return newArac;
}
