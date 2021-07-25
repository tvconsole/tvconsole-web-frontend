import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { SetupWizardComponent } from './setup-wizard.component';
import { setupWizardRoutes } from "./setup-wizard.routes";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatStepperModule } from "@angular/material/stepper";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";


@NgModule({
  declarations: [
    SetupWizardComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(setupWizardRoutes), MatSidenavModule, MatToolbarModule, MatStepperModule, MatIconModule, MatButtonModule, MatListModule, MatInputModule, FormsModule, FlexLayoutModule
  ]
})
export class SetupWizardModule {
}
