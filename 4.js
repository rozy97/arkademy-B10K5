const cetak_gambar = num => {
    let firstRow = ""; 
    let middleRow = "";
    let lastRow = "";
    if (num % 2 == 1) {
        for (let a = 0; a < num; a++) {
            firstRow += "x";
        }
        for (let b = 0; b < num - 2; b++) {
            for (let c = 0; c < num; c++) {
                if (c == (num - 1)/2) {
                    middleRow += "x";
                } else {
                    middleRow += "=";
                }
            }
            middleRow += "\n";
        }
        for (let d = 0; d < num; d++) {
            lastRow += "x";
        }
        return firstRow + "\n" + middleRow + lastRow;
    } else {
        return "input harus angka ganjil";
    }
}
console.log(cetak_gambar(5));
console.log(cetak_gambar(7));
console.log(cetak_gambar(3));
console.log(cetak_gambar(4));