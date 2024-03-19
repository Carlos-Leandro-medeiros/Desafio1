//exemplo de cadastro de sistema

const email = 'carlos'
const senha = 123456789

//        V                    F
if(email == 'carlos' && senha == 123456789){
    console.log("Login aprovado");
}else{
    console.log("Login reprovado");
}



//exemplo final

const identidade = true
const bemTrajado = true
const vip = false

if (identidade && bemTrajado || vip) {
    console.log("Sua entrada vai ser no camarote A");
}else{
console.log("sua entrada será apenas na pista");
}