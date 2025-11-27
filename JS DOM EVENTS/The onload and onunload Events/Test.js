function upperCase1() {
  const value = document.getElementById("fname1").value;
  console.clear();
  console.log("Đã lưu", value);
}

function upperCase2() {
    let x = document.getElementById("fname2");
    x.value = x.value.toUpperCase();
    console.log("oninput fired");
}


