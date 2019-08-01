import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {

  repos: any[] = [{
    img: "../../../assets/repos/noticias.PNG",
    title: "App de noticias",
    text: "App desarrollada con IONIC, utilizando la newsApi.",
    btn1: "https://github.com/alhanampi/News-App-with-Ionic",
    btn2: "https://noticias-74de2.firebaseapp.com"
  },
  {
    img: "../../../assets/repos/abm.PNG",
    title: "ABM de usuarios",
    text: "ABM desarrollada con Angular8, bootstrap y fontawesome, utilizando la api reqres.in para mostrar un mockup de usuarios. Tiene funcionalidad de carga, modificación y borrado de usuarios.",
    btn1: "https://github.com/alhanampi/alquilando",
    btn2: "https://alquilando-abm.firebaseapp.com/"
  },
  {
    img: "../../../assets/repos/heroes.PNG",
    title: "App de comics",
    text: "App desarrollada con Angular y bootstrap, con filtro buscador de tarjetas de superhéroes.",
    btn1: "https://github.com/alhanampi/angular-superhero-app",
    btn2: "https://superheroes-app-b9244.firebaseapp.com/heroes"
  },
  {
    img: "../../../assets/repos/relax.PNG",
    title: "Generador de sonido",
    text: "Un pequeño proyecto de JS vanilla, en el que se usa solo el teclado de la computadora para generar un background de sonidos relajantes.",
    btn1: "https://github.com/alhanampi/relax-sounds-generator",
    btn2: "https://relax-sounds.000webhostapp.com/"
  },
  {
    img: "../../../assets/repos/memo.PNG",
    title: "Memotest",
    text: "Juego desarrollado con Jquery, que utiliza el local storage para guardar puntuaciones máximas.",
    btn1: "https://github.com/alhanampi/memotest-variation",
    btn2: "https://alhanampi.github.io/"
  },
  {
    img: "../../../assets/repos/task.PNG",
    title: "Lista de Tareas",
    text: "Práctica de React, una pequeña lista de tareas que utiliza el local storage para mantener registro de las tareas ingresadas, con función de agregar, tachar y eliminar.",
    btn1: "https://github.com/alhanampi/Tasks-List",
    btn2: "https://build-3lwmhuzpq.now.sh"
  },
  ]

  constructor() { }

  ngOnInit() {
  }

}
