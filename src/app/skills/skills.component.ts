import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { DataService } from 'src/assets/services/data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  habilidades : any = [];
  

  constructor(private dataService  : DataService ) { }
  ngOnInit(): void {
    this.dataService.getDatos().subscribe (skills =>{
      console.log(skills);
     //definir  la info. a mostrar
    
     this.habilidades = skills.habilidades;
    
    });

  }
}
