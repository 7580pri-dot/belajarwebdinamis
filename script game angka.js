// Menghasilkan angka rahasia acak antara 1 sampai 10
let angkaRahasia = Math.floor(Math.random() * 10) + 1;

function tebakAngka() {
    let inputNominal = document.getElementById("tebakan").value;
    let elemenHasil = document.getElementById("pesanHasil");

    // Konversi input ke tipe data Number()
    let tebakan = Number(inputNominal);

    elemenHasil.style.display = "block";

    // Ketentuan 3: Validasi input kosong atau di luar rentang 1–10
    if (inputNominal === "" || tebakan < 1 || tebakan > 10) {
        elemenHasil.className = "pesan-box peringatan";
        elemenHasil.innerHTML = "⚠️ Harap masukkan angka yang valid antara 1 sampai 10!";
        return;
    }

    // Ketentuan 4: Percabangan bertingkat untuk memeriksa tebakan
    if (tebakan === angkaRahasia) {
        elemenHasil.className = "pesan-box benar";
        elemenHasil.innerHTML = `🎉 Selamat! Tebakan Anda BENAR! Angka rahasianya adalah ${angkaRahasia}.`;
    } else if (tebakan > angkaRahasia) {
        elemenHasil.className = "pesan-box tinggi";
        elemenHasil.innerHTML = "📈 Tebakan Anda terlalu TINGGI! Coba angka yang lebih kecil.";
    } else {
        elemenHasil.className = "pesan-box rendah";
        elemenHasil.innerHTML = "📉 Tebakan Anda terlalu RENDAH! Coba angka yang lebih besar.";
    }
}