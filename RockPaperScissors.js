function tahminEt(mode, user) {
  let computer;
  if (mode === "easy") {
    computer = Math.floor(Math.random() * 3);
    if (kullanici > 7 || user < 0 || typeof user != "number") {
      console.log("0-7 aralığında seçim yapmalısın");
    } else if (user == computer) {
      return "Kazandın!";
    } else if (user != computer) {
      return (
        "Kaybettin: (kullanıcı: " +
        user +
        ", " +
        "bilgisayar: " +
        computer +
        ")"
      );
    }
  } else if (mode === "medium") {
    computer = Math.floor(Math.random() * 5);
    if (user > 7 || user < 0 || typeof user != "number") {
      console.log("0-7 aralığında seçim yapmalısın");
    } else if (user == computer) {
      return "Kazandın!";
    } else if (user != computer) {
      return (
        "Kaybettin: (kullanıcı: " +
        user +
        ", " +
        "bilgisayar: " +
        computer +
        ")"
      );
    }
  } else if (mode === "hard") {
    computer = Math.floor(Math.random() * 7);
    if (user > 7 || user < 0 || typeof user != "number") {
      console.log("0-7 aralığında seçim yapmalısın");
    } else if (user == computer) {
      return "Kazandın!";
    } else if (user != computer) {
      return (
        "Kaybettin: (kullanıcı: " +
        user +
        ", " +
        "bilgisayar: " +
        computer +
        ")"
      );
    }
  }
}
