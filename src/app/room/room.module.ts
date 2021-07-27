import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { RoomComponent } from './room.component';
import { roomRoutes } from "./room.routes";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatBadgeModule } from "@angular/material/badge";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatButtonModule } from "@angular/material/button";


@NgModule({
  declarations: [
    RoomComponent
  ],
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(roomRoutes),
    MatToolbarModule, MatIconModule, MatBadgeModule, MatSnackBarModule,
    FlexLayoutModule, MatButtonModule
  ]
})
export class RoomModule { }
