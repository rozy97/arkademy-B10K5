// FIRMANSYAH ROZY
// Menghitung Jumlah Huruf Vokal Dalam Suatu Kata
const count_vowels = kata => {
    let vokal = "aeiouAEIOU"; // Kumpulan huruf vokal
    let jumlahVokal = 0; // variable penghitung jumlah huruf vokal
    
    // Dengan Perulangan, jumlahVokal bertambah setiap kata[i] includes dalam vokal
    for (let i = 0; i < kata.length; i++) {
        if (vokal.includes(kata[i])) {
            jumlahVokal += 1;
        }
        
    }
    return jumlahVokal;
}
console.log(count_vowels('programmer'));
console.log(count_vowels('hmm...'));