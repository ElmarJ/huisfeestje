import { Component, OnInit, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-deur-dicht',
  templateUrl: './deur-dicht.component.html',
  styleUrls: ['./deur-dicht.component.css']
})
export class DeurDichtComponent implements OnInit {

  constructor(
    private titleService: Title,
    private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.titleService.setTitle("🚪🔒🛑⏳ Geen Feest⏳ 🛑🙄😣🤯😠🦂🐙🦅☝👎⚰");
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = "url('/assets/plaatjes/deur.jfif')";
  }

}
