import { isPlatformBrowser } from '@angular/common';
import { Component, Input, OnInit, OnChanges, SimpleChanges, Inject, PLATFORM_ID } from '@angular/core';
import { ScreenTypeEnum } from '@core/Enums/window/screen-type.enum';
import { AdsModel } from '@core/base-models/ads.model';
import { ScreenDimentions } from '@core/services/window/screen-dimentions.service';

@Component({
  selector: 'pontual-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})

export class AdsComponent implements OnInit, OnChanges {
  
  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    public screenDimentions: ScreenDimentions
  ){ }

  @Input() width: string = 'w-full';
  // @Input() height: string = 'h-[260px]';
  @Input() height: string = 'h-[523px]';
  @Input() ad: AdsModel = {
      imagePath: {
        allSizes: {
          '1536x1536': '',
          '1536x1536-height': 0,
          '1536x1536-width': 0,
          '2048x2048': '',
          '2048x2048-height': 0,
          '2048x2048-width': 0,
          large: '',
          'large-height': 0,
          'large-width': 0,
          medium: '',
          'medium-height': 0,
          'medium-width': 0,
          medium_large: '',
          'medium_large-height': 0,
          'medium_large-width': 0,
          thumbnail: '',
          'thumbnail-height': 0,
          'thumbnail-width': 0
        },
        fullImageSize: '',
        thumbnailImageSize: ''
      },
    link: ''
  };
  @Input() topLabel: boolean = true;

  imageMayAppear: boolean = false;

  ngOnInit(): void {
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    
  }

  appearWhenLoaded($event: any){
    this.imageMayAppear = true;
  }

  openLink(link?: string){
    if(isPlatformBrowser(this.platformId)){
      if((this.ad.link && this.ad.link != '') || (link && link != '')){
        window.open(this.ad.link, '_blank');
      }
    }
  }

  get getImageHeigthAccordingTheScreenType(): number{

    switch(this.screenDimentions.getScreenType){
      case ScreenTypeEnum.MOBILE:
        return this.ad.imagePath.allSizes['medium-height'];

      case ScreenTypeEnum.TABLET_SMALL || ScreenTypeEnum.TABLET_LARGE:
        return this.ad.imagePath.allSizes['medium_large-height'];

      case ScreenTypeEnum.LAPTOP_SMALL || ScreenTypeEnum.LAPTOP_LARGE:
        return this.ad.imagePath.allSizes['large-height'];
      
      case ScreenTypeEnum.DESKTOP_SMALL || ScreenTypeEnum.DESKTOP_LARGE:
        return this.ad.imagePath.allSizes['1536x1536-height']
      
      default:
        return this.ad.imagePath.allSizes['2048x2048-height']
    }

  }

}
