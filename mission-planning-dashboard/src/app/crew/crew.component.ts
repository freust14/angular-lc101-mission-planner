import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['../boxstyles.css']
})
export class CrewComponent implements OnInit {
  crew: string[] = ["Jessica Watkins", "Raja Chari", "Jasmin Moghbeli"];
  constructor() { }

  ngOnInit() {
  }

}
