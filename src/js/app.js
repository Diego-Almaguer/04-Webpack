
import { lista } from '../index';
import { Alumno } from './alumnos';

const nombre=document.getElementById('nombre')
const id=document.getElementById('id')
const enviar=document.querySelector('button')
export function crearAlumno(iden,nombres){

const alumno= document.createElement('div')
alumno.classList.add("alumno")

const text=document.createTextNode(`${iden.id} ${nombres.nombre}`)

alumno.append(text)

document.getElementById('datos').append(alumno)
}

enviar.addEventListener( 'click', ()=>{


    const nuevoAlumno=new Alumno(id.value , nombre.value)

    crearAlumno(nuevoAlumno)
    lista.nuevaLista(nuevoAlumno)



})