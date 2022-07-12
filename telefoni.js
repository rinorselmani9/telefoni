let gjendja = document.getElementById('llogaria');
let numri = document.getElementById('number');
let hyrja = document.getElementById('hyrjet')
let message = document.getElementById('message')

let llogaria = +localStorage.getItem('llogaria')
gjendja.innerHTML = `<h3>Gjendja e llogarise:</h3> ${llogaria}$`

function mbushe(){
    
    if(numri.value == ''){
        alert("Per te mbushur llogarine ju duhet te caktoni vleren per mbushje!")

    }else if(numri.value == 1){
        llogaria += 1
        localStorage.setItem("llogaria",llogaria)
        gjendja.innerHTML = `<h3>Gjendja e llogarise:</h3> ${llogaria}$` 

    }else if(numri.value == 2){
        llogaria += 2
        localStorage.setItem("llogaria",llogaria)
        gjendja.innerHTML = `<h3>Gjendja e llogarise:</h3> ${llogaria}$`

    }else if (numri.value == 5){
        llogaria += 5
        localStorage.setItem("llogaria",llogaria)
        gjendja.innerHTML = `<h3>Gjendja e llogarise:</h3> ${llogaria}$`
    }else{
        alert("Verejtje: Llogaria mund te mbushet me 1$, 2$ dhe 5$");
    }
}   


let myInterval;

function thirr(){

    myInterval = setInterval(()=>{

        if(llogaria == 0){
            message.innerHTML = "Ju nuk keni kredi te mjaftuar per ta thirrur kete numer!"
        }else if(hyrja.value == '038' && numri.value.length == 6){
    
            llogaria-=1;
            gjendja.innerHTML = `<h3>Gjendja e llogarise:</h3> ${llogaria}$`
    
        }else if(hyrja.value == '044' && numri.value.length == 6){
    
            llogaria = llogaria - 2;
            gjendja.innerHTML = `<h3>Gjendja e llogarise:</h3> ${llogaria}$`
    
        }else if(hyrja.value == '049' && numri.value.length == 6){
    
            llogaria = llogaria - 2;
            gjendja.innerHTML = `<h3>Gjendja e llogarise:</h3> ${llogaria}$`
    
        }else if(hyrja.value == '+1' && numri.value.length == 10){
            if(llogaria < 5){
                message.innerHTML = "Ju nuk keni kredi te mjaftuar per ta thirrur kete numer!"
            }else{
                llogaria = llogaria - 5;
                gjendja.innerHTML = `<h3>Gjendja e llogarise:</h3> ${llogaria}$`
            }
    
        }else{
            message.innerHTML = "Ky numer nuk ekziston"
        }
    },1000)
    
}
function ndal(){
    localStorage.setItem("llogaria",llogaria)
    clearInterval(myInterval)
}

