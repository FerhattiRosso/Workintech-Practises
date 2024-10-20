function addMethods(properties) {
  const date = new Date();
  let copy = { ...properties };
  let yil = date.getFullYear();
  let modelYili = yil - copy.yas;
  copy.getKilometers = function () {
    return `Arabanın güncel kilometresi ${copy.kilometre} km'dir.`;
  };
  copy.getYear = function () {
    return `Araba ${modelYili} modeldir.`;
  };
  copy.changePrice = function (percentage) {
    copy.fiyat += copy.fiyat * (percentage / 100);
    return `Araba'nın güncel fiyatı ${copy.fiyat} TL'dir.`;
  };
  return copy;
}
