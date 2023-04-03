const logotaller = document.querySelector('.logotaller')
const repintado = document.querySelector('.repintado')
const detailing = document.querySelector('.detailing')
const ploteo = document.querySelector('.ploteo')
const reservas = document.querySelector('.reservas')
const contacto = document.querySelector('.contacto')

const abrir = document.querySelector('.item')

const t1 = document.querySelector('.t1')
const t2 = document.querySelector('.t2')
const t3 = document.querySelector('.t3')

function open1 (){
    repintado.addEventListener('click', (evt)=>{
        evt.preventDefault()
        repintado = t1.style.display="block"
     })
     const cerrar = document.querySelector('.salir')
cerrar.addEventListener('click', (evt)=>{
    evt.preventDefault()
    repintado = t1.style.display="none"
})
repintado.addEventListener('click', (evt)=>{
    evt.preventDefault()
     document.querySelector('.t2').style.display="none" })
     repintado.addEventListener('click', (evt)=>{
        evt.preventDefault()
     document.querySelector('.t3').style.display="none" })
     repintado.addEventListener('click', (evt)=>{
        evt.preventDefault()
     document.querySelector('.emergente2').style.display ="none" })
     repintado.addEventListener('click', (evt)=>{
        evt.preventDefault()
     document.querySelector('.emergente1').style.display ="none" })
}
open1()

function open2(){
    detailing.addEventListener('click', (evt)=>{
        evt.preventDefault()
        detailing = t2.style.display="block"
     })
    const salir = document.querySelector('.cerrar')
    salir.addEventListener('click', (evt)=>{
        evt.preventDefault()
        detailing = t2.style.display="none"
    })
    detailing.addEventListener('click', (evt)=>{
        evt.preventDefault()
    document.querySelector('.t1').style.display ="none"  })
    detailing.addEventListener('click', (evt)=>{
        evt.preventDefault()
    document.querySelector('.t3').style.display ="none" })
    detailing.addEventListener('click', (evt)=>{
        evt.preventDefault()
    document.querySelector('.emergente2').style.display ="none" })
    detailing.addEventListener('click', (evt)=>{
        evt.preventDefault()
    document.querySelector('.emergente1').style.display ="none" })
}
open2()

function open3(){
    ploteo.addEventListener('click', (evt)=>{
        evt.preventDefault()
        ploteo = t3.style.display="block"
     }
    )
    const close = document.querySelector('.close')
    close.addEventListener('click', (evt)=>{
        evt.preventDefault()
        ploteo = t3.style.display="none"
    }) 
    ploteo.addEventListener('click', (evt)=>{
        evt.preventDefault()
    document.querySelector('.t1').style.display="none" })
    ploteo.addEventListener('click', (evt)=>{
        evt.preventDefault()
    document.querySelector('.t2').style.display="none" })
    ploteo.addEventListener('click', (evt)=>{
        evt.preventDefault()
    document.querySelector('.emergente2').style.display ="none" })
    ploteo.addEventListener('click', (evt)=>{
        evt.preventDefault()
    document.querySelector('.emergente1').style.display ="none" })
}
open3()

const emergente1 = document.querySelector('.emergente1')
const emergente2 = document.querySelector('.emergente2')

function open4(){
    reservas.addEventListener('click', (evt)=>{
        evt.preventDefault()
         reservas = emergente1.style.display="block"
     }
    )
    const salirdatos = document.querySelector('.salirdatos')
    salirdatos.addEventListener('click', (evt)=>{
        evt.preventDefault()
        reservas = emergente1.style.display="none"
    }) 
    reservas.addEventListener('click', (evt)=>{
        evt.preventDefault()
    document.querySelector('.t1').style.display="none" })
    reservas.addEventListener('click', (evt)=>{
        evt.preventDefault()
    document.querySelector('.t2').style.display="none" })
    reservas.addEventListener('click', (evt)=>{
        evt.preventDefault()
    document.querySelector('.t3').style.display ="none" })
    reservas.addEventListener('click', (evt)=>{
        evt.preventDefault()
    document.querySelector('.emergente2').style.display ="none" })
}
open4()

function open5(){
    contacto.addEventListener('click', (evt)=>{
        evt.preventDefault()
         contacto = emergente2.style.display="block"
     }
    )
    const salircontacto = document.querySelector('.salircontacto')
    salircontacto.addEventListener('click', (evt)=>{
        evt.preventDefault()
        contacto = emergente2.style.display="none"
    })
    contacto.addEventListener('click', (evt)=>{
        evt.preventDefault()
    document.querySelector('.t1').style.display="none" })
    contacto.addEventListener('click', (evt)=>{
        evt.preventDefault()
    document.querySelector('.t2').style.display="none" })
    contacto.addEventListener('click', (evt)=>{
        evt.preventDefault()
    document.querySelector('.t3').style.display ="none" })
    contacto.addEventListener('click', (evt)=>{
        evt.preventDefault()
    document.querySelector('.emergente1').style.display ="none" })
}
open5()
 
const datos = document.querySelector('#datos')
datos.addEventListener("submit",(evt)=>{
    evt.preventDefault()
    let nombre = document.querySelector(".nombre").value
    localStorage.setItem('Nombre', nombre)
    let apellido = document.querySelector('.apellido').value
    localStorage.setItem('Apellido', apellido)
    let mail = document.querySelector('.mail').value
    localStorage.setItem('Mail', mail)
    let consulta = document.querySelector('#consulta').value
    localStorage.setItem('Consulta',consulta)
})

datos.addEventListener("submit",(evt)=>{
    evt.preventDefault()
    document.querySelector('#datos').style.display ="none"
    document.querySelector('.salirdatos').style.top = "9%"
    document.querySelector(".dato").textContent = "Enviado..."
     })

//-----------Reservas-------------

const ventana2 = document.querySelector('.x')
const serve = document.querySelector('.servi')
const servicio = document.querySelector('.servicio')
const paños = document.querySelector('.paños')

/* servicio.addEventListener('click',()=>{
    fetch("dato.json")
    
    .then((res)=>{ 
                    return res.json()
                })
    .then((json)=>{
                console.log(json.servicio2)
            
    }) 
    //console.log(res)
    .catch((err)=>console.log(err)) 
}) */

ventana2.addEventListener("submit",(evt)=>{
    evt.preventDefault()
    let name = document.querySelector(".name").value
    localStorage.setItem('Nombre', name)
    let lastname = document.querySelector('.lastname').value
    localStorage.setItem('Apellido', lastname)
    let correo = document.querySelector('.correo').value
    localStorage.setItem('Mail', correo)
    let dni = document.querySelector('.dni').value
    localStorage.setItem('DNI',dni)

}) 
const loading = document.querySelector('.loading')
const salirload = document.querySelector('.salirload')
    salirload.addEventListener('click', (evt)=>{
        evt.preventDefault()
        loading.style.display="none"
    })

console.log(fetch("data.json"))