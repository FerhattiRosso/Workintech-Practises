function newCar(properties) {
  let aracBilgisi = { ...properties };
  let markaModel = properties.model.toString();
  let markaModelAyrim = markaModel.split(" ");
  let markaBilgisi = markaModelAyrim[0];
  let modelBilgisi = markaModelAyrim[1];
  let markaObject = markaBilgisi.toString();
  let modelObject = modelBilgisi.toString();
  let otv;
  let mtv;
  let yerlimi = true;
  if (properties.fiyat < 1450000) {
    otv = 10;
  } else {
    otv = 40;
  }
  if (properties.yas >= 1 && properties.yas <= 10) {
    mtv = 1773;
  } else {
    mtv = 520;
  }
  if (properties.model.includes("TOGG")) {
    yerlimi = true;
  } else {
    yerlimi = false;
  }
  delete aracBilgisi.yas;
  aracBilgisi.id = properties.id;
  aracBilgisi.marka = markaObject;
  aracBilgisi.model = modelObject;
  aracBilgisi.yakit = properties.yakit;
  aracBilgisi.vites = properties.vites;
  aracBilgisi.fiyat = properties.fiyat;
  aracBilgisi.otv = otv;
  aracBilgisi.mtv = mtv;
  aracBilgisi.isDomestic = yerlimi;
  return aracBilgisi;
}
