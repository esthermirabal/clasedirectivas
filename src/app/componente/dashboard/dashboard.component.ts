import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  titulo: string;
  
  public usuarios= [
    {nombre: 'Esther', apellido: 'Mirabal'},
    {nombre: 'Simon', apellido: 'Gomez'},
    {nombre: '', apellido: 'Serrano'},
    {nombre: 'Maria', apellido: ''},
  ];

  constructor(){
    this.titulo = "Directivas Estructurales";
  }

}
