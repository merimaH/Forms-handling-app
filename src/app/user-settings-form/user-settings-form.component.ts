import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings: UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  };
  userSettings: UserSettings = {
    ...this.originalUserSettings
  };
  constructor() { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    // ovdje se stavljaju validacije koje je potrebno izvršiti prije submitta
    console.log('in onSubmit: ', form.valid);
  }
  onBlur(field: NgModel){
    console.log('In onBlur:', field.valid);
  }
}
