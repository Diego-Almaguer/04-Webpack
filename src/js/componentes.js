import '../js/css/componentes.css'
import webpackLogo from ' src\assets\logo-on-dark-bg.png'
export const saludar =(nombre)=>{

    console.log('Creando etiqueta h1');

    const h1=document.createElement( 'h1' );
    h1.innerText=`Hola ${nombre}`;
    document.body.append(h1);


    const img=document.createElement("img"); 
    img.src=webpackLogo
    img.body.append(img)
}