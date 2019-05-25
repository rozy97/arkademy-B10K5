// FIRMANSYAH ROZY
// menampilkan hari diantara dua buah tanggal
const betweenDays = (a, b) => {
    let day1 = new Date(a); // merubah ke format tanggal
    let day2 = new Date(b); //
    let totalDay = Math.abs(day2 - day1)/86400000; // menghitung jumlah hari
    let returnStr = "";
    let temp = "";
    // loop untuk menambahkan tanggal ke variable returnStr
    for (let i = 0; i < totalDay; i++) {
        temp = a.substr(0, 4) + "-" + a.substr(5,2) + "-" + a.substr(8,2) + ", ";
        returnStr += temp;
        temp = "";
    }
    return returnStr;
}
betweenDays('2019-08-05', '2019-08-10');