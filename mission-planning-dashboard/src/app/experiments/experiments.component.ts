import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['../crew/crew.component.css']
})
export class ExperimentsComponent implements OnInit {
  experiment: string[]= ["Mars soil sample", "Plant growth in habitat","Human bone density"]
  constructor() { }

  ngOnInit() {
  }

}
