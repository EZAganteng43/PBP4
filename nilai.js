let studentScores = [
    {name : "Vanessa",score : 90},
    {name : "Pedri",score : 80},
    {name : "Lamine yamal",score : 100},
];
let nilaiTertinggi = studentScores.reduce((max, student) =>
    student.score > max.score ? student : max
);
console.log(`Nama: ${nilaiTertinggi.name}, Score: ${nilaiTertinggi.score}`);