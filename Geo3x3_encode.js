function encode(lat, lng, level) {
  let res = "E";
  if (lng < 0.0) {
    res = "W";
    lng += 180.0;
  }
  lat += 90.0;
  let unit = 180.0;
  for (let i = 1; i < level; i++) {
    unit /= 3.0;
    const x = Math.floor(lng / unit);
    const y = Math.floor(lat / unit);
    res += x + y * 3 + 1;
    lng -= x * unit;
    lat -= y * unit;
  }
  return res;
}
console.log(encode(35.65858, 139.745433, 14));
