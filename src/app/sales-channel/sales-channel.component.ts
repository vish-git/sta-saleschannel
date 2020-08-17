import { Component, OnInit } from '@angular/core';
import * as dataLinks from '../links';

@Component({
  selector: 'app-sales-channel',
  templateUrl: './sales-channel.component.html',
  styleUrls: ['./sales-channel.component.css'],
})
export class SalesChannelComponent implements OnInit {
  display: boolean = false;
  karnatakaImageObject: any = {};
  andhraImageObject: any = {};
  keralaImageObject: any = {};
  tamilnaduImageObject: any = {};

  imageData: any;
  imageUrl: any;
  imageDesc: any;
  imageName: any;

  constructor() {}

  ngOnInit(): void {
    this.karnatakaImageObject = dataLinks.karnatakaTravelImageLinks;
    this.andhraImageObject = dataLinks.andhraTravelImageLinks;
    this.keralaImageObject = dataLinks.keralaTravelImageLinks;
    this.tamilnaduImageObject = dataLinks.tamilnaduTravelImageLinks;
  }

  showDialog(imageObject: any) {
    this.display = true;
    this.imageUrl = imageObject.url || '';
    this.imageDesc = imageObject.description || '';
    this.imageName = imageObject.name || '';
  }
}
