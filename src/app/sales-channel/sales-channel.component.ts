import { Component, OnInit } from '@angular/core';
import * as dataLinks from '../links';

@Component({
  selector: 'app-sales-channel',
  templateUrl: './sales-channel.component.html',
  styleUrls: ['./sales-channel.component.css'],
})
export class SalesChannelComponent implements OnInit {
  display: boolean = false;
  sareeImageObject: any = {};
  blouseImageObject: any = {};

  imageData: any;
  imageUrl: any;
  imageDesc: any;
  imageName: any;

  constructor() {}

  ngOnInit(): void {
    this.sareeImageObject = dataLinks.sareeImageLinks;
    this.blouseImageObject = dataLinks.blouseImageLinks;
  }

  showDialog(imageObject: any) {
    this.display = true;
    this.imageUrl = imageObject.url || '';
    this.imageDesc = imageObject.description || '';
    this.imageName = imageObject.name || '';
  }
}
