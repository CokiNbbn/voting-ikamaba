let suara1 = 0;
let suara2 = 0;

function tambahSuara(calon) {
	const jumlahPemilih =
		parseInt(document.getElementById("jumlahPemilih").value) || 0;

	const total = suara1 + suara2;

	if (total >= jumlahPemilih) return;

	if (calon === 1) suara1++;
	else suara2++;

	updateTampilan();
}

function kurangSuara(calon) {
	if (calon === 1 && suara1 > 0) suara1--;
	else if (calon === 2 && suara2 > 0) suara2--;

	updateTampilan();
}

function updateTampilan() {
	const total = suara1 + suara2;

	const jumlahPemilih =
		parseInt(document.getElementById("jumlahPemilih").value) || 0;

	const persen1 = jumlahPemilih
		? ((suara1 / jumlahPemilih) * 100).toFixed(1)
		: 0;
	const persen2 = jumlahPemilih
		? ((suara2 / jumlahPemilih) * 100).toFixed(1)
		: 0;

	const persenSuaraMasuk = jumlahPemilih
		? ((total / jumlahPemilih) * 100).toFixed(1)
		: 0;

	document.getElementById("jumlahSuaraMasuk").innerText = total;
	document.getElementById("persentaseSuaraMasuk").innerText =
		persenSuaraMasuk + "%";

	document.getElementById("suara1").innerText = suara1;
	document.getElementById("suara2").innerText = suara2;

	document.getElementById("persen1").innerText = persen1 + "%";
	document.getElementById("persen2").innerText = persen2 + "%";

	document.getElementById("tally1").innerText = buatItunganHuruf(suara1);
	document.getElementById("tally2").innerText = buatItunganHuruf(suara2);
}

function buatItunganHuruf(jumlah) {
	let hasil = "";

	for (let i = 1; i <= jumlah; i++) {
		hasil += "I";
		if (i % 5 === 0) hasil += "  ";
	}

	return hasil.trim();
}

document.addEventListener("keydown", function (e) {
	if (e.key === "[") tambahSuara(1);
	else if (e.key === "]") tambahSuara(2);
});
