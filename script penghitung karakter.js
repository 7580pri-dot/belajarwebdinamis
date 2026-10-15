function hitungKarakter() {
    let teks = document.getElementById("pesan").value;
    let totalKarakter = teks.length;
    let batasMaksimal = 150;
    
    let sisaKarakter = batasMaksimal - totalKarakter;

    let elemenSisa = document.getElementById("sisa");
    let elemenInfo = document.getElementById("info");

    // Tampilkan sisa karakter terbaru
    elemenSisa.innerText = sisaKarakter;

    // Efek bergerak (membesar sekejap saat mengetik)
    elemenSisa.classList.add("bergerak");
    setTimeout(() => {
        elemenSisa.classList.remove("bergerak");
    }, 120);

    // Ubah warna ke merah jika karakter habis/mencapai 0
    if (sisaKarakter <= 0) {
        elemenInfo.classList.add("merah");
    } else {
        elemenInfo.classList.remove("merah");
    }
}