import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['../boxstyles.css']
})
export class EquipmentComponent implements OnInit {
  equipment: string[] = ["Habitat dome", "Chiclets", "Food containers", "Oxygen tanks"]
  
  constructor() { }

  ngOnInit() {
  }

}
