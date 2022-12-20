const change = document.querySelector(".changing-text");

const content = ["Belum Lulus Kuliah.", "Kurang Pengalaman.","Beda Jurusan."];

for (let i=0; i < content.length; i++) {
    setInterval(() => {
        change.innerHTML = content[i];
    }, 3000 * (i+1))
}