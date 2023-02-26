function func() {
  let a = document.querySelector("#input");
  // console.log(a.value);

  const chars = a.split("");
  console.log(chars);

  document.querySelector("#output").textContent = a.value;
}
