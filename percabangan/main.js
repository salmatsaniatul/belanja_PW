let belanja = parseInt(prompt('Masukkan nilai belanja :'));
if (belanja >= 0 && belanja < 100000) {
  document.write(`Anda Belanja : ${belanja}<br>`);
  document.write('Anda tidak dapat diskon');
} else if (belanja >= 100000 && belanja <= 200000) {
  document.write(`Anda belanja : ${belanja}<br>`);
  document.write('Anda dapat diskon 10%<br>');
  let diskon = (belanja * 10) / 100;
  document.write(`Total Bayar : ${belanja - diskon}<br>`);
} else if (belanja > 200000) {
  document.write(`Anda belanja : ${belanja}<br>`);
  document.write('Anda dapat diskon 20%<br>');
  let diskon = (belanja * 20) / 100;
  document.writeln(`Total Bayar ${belanja - diskon}`);
} else {
  document.write('Nilai yang anda masukkan salah');
}
