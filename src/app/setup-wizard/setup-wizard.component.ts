import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setup-wizard',
  templateUrl: './setup-wizard.component.html',
  styleUrls: ['./setup-wizard.component.scss']
})
export class SetupWizardComponent implements OnInit {
  roomName: string = '';
  nickname: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
