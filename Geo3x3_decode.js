function decode(code) {
  let unit = 180;
  let lat = 0;
  let lng = 0;
  let level = 1;
  for (let i = 1; i < code.length; i++) {
    let n = code[i] - 1;
    if (n < 0) {
      break;
    }
    unit /= 3;
    lng += (n % 3) * unit;
    lat += Math.floor(n / 3) * unit;
    level++;
  }
  lat += unit / 2;
  lng += unit / 2;
  lat -= 90.0;
  if (code[0] == "W") {
    lng -= 180.0;
  }
  return { lat, lng, level, unit };
}
console.log(decode('E9139659937288'));