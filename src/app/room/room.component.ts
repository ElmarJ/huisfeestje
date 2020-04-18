import { RoomService } from './../room-service';
import { RoomInfo } from './../room-info';
import { Component, OnInit, Input, AfterViewInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit, AfterViewInit {
  room$: Observable<RoomInfo>;
  chatOpen = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private elementRef: ElementRef,
    private roomService: RoomService
    ) {}
  ngAfterViewInit(): void {
    this.room$.subscribe(room => this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = "url('/assets/plaatjes/" + room.backgroundImageFilename + "')");
  }

  ngOnInit(): void {
    this.getRoom();
  }

  getRoom(): void {
    this.room$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.roomService.getRoom(params.get('urlName')))
    );
  }

  toggleChat() {
    this.chatOpen = !this.chatOpen;
  }
}
