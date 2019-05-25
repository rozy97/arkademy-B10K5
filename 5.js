// FIRMANSYAH ROZY
// Mengganti Karakter Dalam Sebuah Kata
const ganti_kata = (kata, diganti, pengganti) => {  
    let kataBaru = ""; // kataBaru untuk return fungsi
    char = ""; // variable utk menampung karakter kata
    // looping utk mengekstrak karakter kata ke dalam char,
    // kemudian di tambah (concat) ke kataBaru
    for (let i = 0; i < kata.length; i++) {      
        if (kata[i] == diganti) {
            // untuk karakter kata yg mau diganti, maka char = pengganti
            char = pengganti;
        } else {
            // untuk karakter yg tdk diganti, maka char = kata[i]
            char = kata[i];
        }
        kataBaru += char;
    }
    return kataBaru;
}
console.log(ganti_kata("purwakerta", "a", "o"));