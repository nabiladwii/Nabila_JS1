// contoh program javascript menggunakan if,else,nested if
const inputKataSandi = 'rahasia123';

if (inputKataSandi === 'rahasia123') {
  console.log('Selamat Anda berhasil login.');
}
else {
    console.log('Ops! Kata sandi salah.');
}

//contoh program javascript menggunakan switch case
const hari = 2;

switch (hari) {
  case 1:
    console.log('senin');
    break;
  case 2:
    console.log('selasa');
    break;
  case 3:
    console.log('rabu');
    break;
  case 4:
    console.log('kamis');
    break;
  case 5:
    console.log('jumat');
    break;
  case 6:
    console.log('sabtu');
    break;
  case 7:
    console.log('minggu');
    break;
  default:
    console.log('Maaf, harus angka 1 - 7');
}

//contoh program javascript menggunakan for statement 
for (let nilaiAwal = 0; nilaiAwal < 5; nilaiAwal++) {
    console.log('hello world');
  }

//contoh program javascript menggunakan while
var i=0;
while (i<10)
{
   console.log('Saya sedang belajar JavaScript');
   i++;
}

//contoh progaram javascript menggunakan Do while
var i=1;
do
{
   console.log('saya suka kopi');
   i++;
}
while (i<=10)

//contoh program javascript menggunakan function
(function (nama) {
    console.log('hello ' + nama);
  })('nala');