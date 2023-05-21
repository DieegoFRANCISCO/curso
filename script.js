console.log('Hello!');
//saudacao()
maiorNumero()
      function saudacao(){
        let nome =prompt("qual seu nome")

        if(nome!=""){
          window.alert("bem vindo, abençoado! " + nome)


        } else { 
           window.alert("que pena!!")
        }

      

      }
function maiorNumero(){
  debugger
  //entrada dos valores//
 let n1 =parseInt(prompt("primeiro numero"))
 let n2 =parseInt(prompt("segundo numero"))
 let n3 =parseInt(prompt("terceiro numero"))
 let maiorNumero = 0
 //processamento dos valores//

 if (n1 >maiorNumero){
  maiorNumero=n1
 }
 if (n2 >maiorNumero){
  maiorNumero=n2
 }
 if (n3 >maiorNumero){
  maiorNumero=n3
 }
 
 // saida //
 window.alert ("o maior numero é:" + maiorNumero)
}


 

