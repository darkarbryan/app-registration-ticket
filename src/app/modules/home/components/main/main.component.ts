import { Component, OnInit } from '@angular/core';
import { MainContentService } from '../../services/main-content/main-content.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  
  public idUser:string = "";
  public role:string = "";

  constructor(
    private mainContentService: MainContentService
  ){}

  ngOnInit(): void {
    this.loadUserData();
  }

  async loadUserData(){
    this.idUser = await this.mainContentService.getIdUser();
    this.role = await this.mainContentService.getRoleUser();
    console.log(this.role);
  }



}
