const aluno = 'Carlos'
const nota1 = 4
const nota2 = 8
const nota3 = 2
const nota4 = 4

const media =(nota1 + nota2 + nota3 + nota4) /4;


if(media >=7) {
    console.log(`Aprovado ${media.toFixed(2)}`);
}else if (media <=4.9){
    console.log(`Reprovado ${media.toFixed(1)}`);
}else {(media <=5, 6)
    console.log(`Recuperação ${media.toFixed(1)}`);
}