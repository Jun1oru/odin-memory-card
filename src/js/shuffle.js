export default function shuffle(array) {
  let m = array.length,
    t,
    i,
    newArray = [...array],
    repeat = true;
  while (repeat) {
    for (let i = 0; i < m; i++) {
      if (newArray[i] !== array[i]) repeat = false;
    }
    while (m) {
      i = Math.floor(Math.random() * m--);

      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    m = array.length;
  }

  return array;
}
