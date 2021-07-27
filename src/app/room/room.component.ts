import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  roomName: string|null = null;
  fullscreen_icon: string = 'fullscreen';

  constructor(private snackBar: MatSnackBar,
              private route: ActivatedRoute) {
    console.info("this.route.pathFromRoot:", this.route.pathFromRoot, ";");
  }

  ngOnInit(): void {
    this.roomName = this.route.snapshot.paramMap.get('roomName');
    this.route.queryParams.subscribe(params => {
      this.snackBar.open(`${params['nickname']} joined`);
    });
  }

  fullscreen() {
    let bodyElem = document.querySelector("body")!;
    this.fullscreen_icon === "fullscreen"?
      bodyElem.requestFullscreen().then(() => this.fullscreen_icon = "close_fullscreen").catch(console.error)
      : document.exitFullscreen().then(() => this.fullscreen_icon = "fullscreen").catch(console.error);
  }
}
