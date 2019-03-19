import { Component, OnInit } from '@angular/core';
import {ArbeitgeberService} from "../service/arbeitgeber.service";
import {Arbeitgeber} from "../model/arbeitgeber";

@Component({
  selector: 'app-arbeitgeber-page',
  templateUrl: './arbeitgeber-page.component.html',
  styleUrls: ['./arbeitgeber-page.component.sass']
})
export class ArbeitgeberPageComponent implements OnInit {

  arbeitgeber: Array<Arbeitgeber>;

  selectedArbeitgeber: Arbeitgeber;

  editMode: boolean;

  constructor(private arbeitgeberService: ArbeitgeberService) {
    this.arbeitgeber = null;
    this.selectedArbeitgeber = null;
    this.editMode=true;
  }

  ngOnInit() {
    this.arbeitgeberService.getArbeitgeber().subscribe(
      (response) => {
        this.arbeitgeber = response;

      },
      (error) => {
        console.log(error)
      });
  }

  switchEdit():void{
    this.editMode = !this.editMode;
  }

  selectArbeitgeber(arbeitgeber:Arbeitgeber):void{
    this.selectedArbeitgeber = arbeitgeber;
  }

  saveSelectedArbeitgeber():void{
    this.arbeitgeberService.putArbeitgeber(this.selectedArbeitgeber).subscribe(
      (response) => {
        console.log(response);
        this.arbeitgeber.splice(this.arbeitgeber.indexOf(this.selectedArbeitgeber), 1, response)
        this.selectedArbeitgeber = response;


      },
      (error) => {
        console.log(error)
      });
  }



}
