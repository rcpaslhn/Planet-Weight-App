const body =document.querySelector("body")
const input_bir=document.getElementById("input1")
const secici =document.getElementById("secici")
const button =document.getElementById("btn")
const resim_div=document.querySelector(".resimdiv")
const img =document.getElementById("foto")
const p=document.querySelector(".yazi")

console.log(secici[1])

button.addEventListener("click",function () {

    let sayi=Number(input_bir.value)
    sayi/=9.8
    let sonuc=0

    if(input_bir.value!="" && secici.value!="" ){
        if(secici.value=="Earth"){
            sonuc=sayi*9.8
            img.setAttribute("src","./earth.png")
            p.textContent=`Seçmiş olduğunuz gezegen: ${secici.value} ve buradaki ağırlığınız: ${sonuc} `
        }else if(secici.value=="Jupiter"){
            sonuc=(sayi*24.79).toFixed("2")
            img.setAttribute("src","./jupiter.png")
            p.textContent=`Seçmiş olduğunuz gezegen: ${secici.value} ve buradaki ağırlığınız: ${sonuc} `

        }else if(secici.value=="Mars"){
            sonuc=(sayi*3.71).toFixed("2")
            img.setAttribute("src","./mars.png")
            p.textContent=`Seçmiş olduğunuz gezegen: ${secici.value} ve buradaki ağırlığınız: ${sonuc} `

        }else if(secici.value=="Mercury"){
            sonuc=(sayi*3.7).toFixed("2")
            img.setAttribute("src","./mercury.png")
            p.textContent=`Seçmiş olduğunuz gezegen: ${secici.value} ve buradaki ağırlığınız: ${sonuc} `

        }else if(secici.value=="Moon"){
            sonuc=(sayi*1.62).toFixed("2")
            img.setAttribute("src","./moon.png")
            p.textContent=`Seçmiş olduğunuz gezegen: ${secici.value} ve buradaki ağırlığınız: ${sonuc} `

        }else if(secici.value=="Neptune"){
            sonuc=(sayi*11.15).toFixed("2")
            img.setAttribute("src","./neptune.png")
            p.textContent=`Seçmiş olduğunuz gezegen: ${secici.value} ve buradaki ağırlığınız: ${sonuc} `

        }else if(secici.value=="Pluto"){
            sonuc=(sayi*0.06).toFixed("2")
            img.setAttribute("src","./pluto.png")
            p.textContent=`Seçmiş olduğunuz gezegen: ${secici.value} ve buradaki ağırlığınız: ${sonuc} `

        }else if(secici.value=="Saturn"){
            sonuc=(sayi*9.2).toFixed("2")
            img.setAttribute("src","./saturn.png")
            p.textContent=`Seçmiş olduğunuz gezegen: ${secici.value} ve buradaki ağırlığınız: ${sonuc} `

        }else if(secici.value=="Uranus"){
            sonuc=(sayi*8.69).toFixed("2")
            img.setAttribute("src","./uranus.png")
            p.textContent=`Seçmiş olduğunuz gezegen: ${secici.value} ve buradaki ağırlığınız: ${sonuc} `

        }else if(secici.value=="Venus"){
            sonuc=(sayi*8.87).toFixed("2")
            img.setAttribute("src","./venus.png")
            p.textContent=`Seçmiş olduğunuz gezegen: ${secici.value} ve buradaki ağırlığınız: ${sonuc} `

        }else{
            p.textContent="Lütfen geçerli bir gezegen seçiniz"
        }

    }

    if(input_bir.value=="" && secici.value!=""){
        p.textContent="Lütfen ağırlığınızı giriniz "
    }else if(input_bir.value!=="" && secici.value==""){
        p.textContent="Lütfen bir gezegen seçiniz"
    }else if(input_bir.value=="" && secici.value==""){
        p.textContent="Lütfen ağırlığınızı giriniz ve bir gezegen seçiniz"
        
    }



  })