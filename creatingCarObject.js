function getCarObject(id, model, fuel, gear, age, price, kilometer) {
  const car = new Object();
  const date = new Date();
  let yil = date.getFullYear();
  arac.id = id;
  arac.model = model;
  arac.fuel = fuel;
  arac.gear = gear;
  arac.productionYear = yil - age;
  arac.price = price;
  arac.kilometer = kilometer;
  return car;
}
