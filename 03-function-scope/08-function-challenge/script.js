function getCelcius(f) {
  const celcius = ((f - 32) * 5) / 9;
  return celcius;
}
console.log(getCelcius(20));
