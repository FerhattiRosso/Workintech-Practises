function lottery(names) {
  const winners = [];

  for (let i = 0; i < 5; i++) {
    winners.push(names[i]);
  }

  for (let i = 9; i < names.length; i += 10) {
    if (winners.length < 10) {
      winners.push(names[i]);
    }
  }

  const remains = names.filter((name) => !winners.includes(name));
  const randomIndex = Math.floor(Math.random() * remains.length);
  winners.push(remains[randomIndex]);

  return winners;
}
