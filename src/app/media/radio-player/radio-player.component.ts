import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import {Howl, Howler} from 'howler';


const audioPlayer = new Howl({
  src: ['https://radio.aliceiriselmarhuisfeestje.nl/radio/8000/radio.mp3?1586963729'],
  html5: true,
  format: ['mp3'],
  autoplay: false,
  preload: true
});

@Component({
  selector: 'app-radio-player',
  templateUrl: './radio-player.component.html',
  styleUrls: ['./radio-player.component.css']
})
export class RadioPlayerComponent implements OnInit, OnChanges {
  @Input() volume: number;
  constructor() { }

  ngOnInit(): void {
    audioPlayer.play();
    audioPlayer.volume(this.volume);
  }

  ngOnChanges(changes: SimpleChanges) {
    audioPlayer.volume(changes.volume.currentValue);
  }

  togglePlay() {
    if(audioPlayer.playing()) {
      audioPlayer.pause();
    }
    else {
      audioPlayer.play();
    }
  }

}
