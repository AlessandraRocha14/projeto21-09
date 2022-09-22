nome= prompt("informe o nome:")
n1= parseFloat(prompt("informe a primeira Nota:"))
n2=parseFloat(prompt("informe a segunda Nota:"))
media=(n1+n2)/2
alert(media)
if (media>=9){
    alert("Otimo")
}
else if (media>=7){
        alert("Bom")
    }
    else if(media>=5){
            alert("regular") 
        }
        else{
             alert("insuficiente")
        }
