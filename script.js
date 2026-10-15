function cekDiskon() {
    let inputNominal = document.getElementById("inputNominal").value;
    let elemenHasil = document.getElementById("hasil");

    let total = Number(inputNominal);

    // Jika input kosong
    if (inputNominal === "") {
        elemenHasil.style.display = "block";
        elemenHasil.className = "error";
        elemenHasil.innerHTML = "Harap masukkan nominal belanja!";
        return;
    }

    elemenHasil.style.display = "block";

    // Percabangan Diskon
    if (total >= 100000) {
        let diskon = total * 0.10;
        let bayar = total - diskon;

        elemenHasil.className = "diskon-dapat";
        elemenHasil.innerHTML = `
            <strong>🎉 Selamat! Anda mendapatkan diskon 10%.</strong><br>
            Diskon: Rp ${diskon.toLocaleString('id-ID')}<br>
            <strong>Total Bayar: Rp ${bayar.toLocaleString('id-ID')}</strong>
        `;
    } else {
        elemenHasil.className = "diskon-tidak";
        elemenHasil.innerHTML = `
            <strong>ℹ️ Tidak ada diskon.</strong><br>
            Minimal belanja diskon adalah Rp 100.000.<br>
            <strong>Total Bayar: Rp ${total.toLocaleString('id-ID')}</strong>
        `;
    }
}