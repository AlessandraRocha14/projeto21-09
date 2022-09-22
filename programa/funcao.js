nome= prompt("informe o nome:")
idade= prompt("informe a idade:")
if (idade<10){
    console.log("criança")
}
else{
    if (idade<18){
        console.log("Adolescente")
    }
    else{
         if(idade,60){
            console.log("Adulto") 
        }
        else{
             console.log("Idoso")
        }
    }
}
