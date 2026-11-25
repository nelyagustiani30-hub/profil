// Pindah halaman
var home = document.getElementById('home');
var profil = document.getElementById('profil');

document.getElementById('btnProfil').addEventListener('click', function () {
    home.classList.add('hidden');
    profil.classList.remove('hidden');
    window.scrollTo(0, 0);
});

document.getElementById('btnKembali').addEventListener('click', function () {
    profil.classList.add('hidden');
    home.classList.remove('hidden');
    window.scrollTo(0, 0);
});

// Foto: coba beberapa nama file otomatis, jadi tidak perlu diubah manual.
// Kalau semuanya tidak ada, tampilkan inisial "NA".
var kandidat = ['foto.jpeg', 'foto.jpg', 'Foto.jpeg', 'Foto.jpg', 'foto.png', 'Foto.png', 'foto.JPG', 'foto.JPEG'];
var placeholder = 'data:image/svg+xml;utf8,' + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">' +
    '<rect width="200" height="200" fill="#4facfe"/>' +
    '<text x="100" y="125" font-size="80" font-family="Arial" fill="white" text-anchor="middle">NA</text>' +
    '</svg>'
);

document.querySelectorAll('.photo').forEach(function (img) {
    var i = 0;
    img.onerror = function () {
        i++;
        if (i < kandidat.length) {
            img.src = kandidat[i];
        } else {
            img.onerror = null;
            img.src = placeholder;
        }
    };
    // Kalau gambar sudah gagal sebelum script jalan
    if (img.complete && img.naturalWidth === 0) { img.onerror(); }
});
