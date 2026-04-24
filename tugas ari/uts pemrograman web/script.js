// LOGIN CHECK
if (localStorage.getItem("user") === null && window.location.pathname.includes("index")) {
    window.location.href = "login.html";
}

// MINI GAME
let count = 0;

function update() {
  document.getElementById("counter").innerText = count;

  let text = "";
  if (count >= 10) text = "🔥 Keren!";
  else if (count >= 5) text = "😎 Lumayan!";
  else if (count >= 1) text = "👍 Gas!";

  document.getElementById("gif").innerText = text;

  document.getElementById("sound").play();
}

function tambah(){ count++; update(); }
function kurang(){ count--; update(); }

// KONTAK
function kirimPesan(){
  let pesan = document.getElementById("pesan").value;
  if(pesan === ""){
    alert("Isi pesan dulu!");
  } else {
    alert("Pesan terkirim: " + pesan);
  }
}
