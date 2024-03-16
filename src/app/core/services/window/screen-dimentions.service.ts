import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ScreenTypeEnum } from '@core/Enums/window/screen-type.enum';

interface ScreenDimentionsInterface{
  width: number,
  heigth: number
}

@Injectable({
  providedIn: 'root'
})
export class ScreenDimentions {
  
  private screen: ScreenDimentionsInterface = {
    width: 0,
    heigth: 0
  }

  private screenType: ScreenTypeEnum = ScreenTypeEnum.MOBILE;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    this.onResize();
  }

  private onResize(){

    if(isPlatformBrowser(this.platformId)){
      this.screen.width = window.innerWidth;
      this.screen.heigth = window.innerHeight;

      this.determineScreenType(this.screen.width);
    }

  }

  public get getScreenDimentions(): ScreenDimentionsInterface{
    return this.screen;
  }

  public get getScreenType(): ScreenTypeEnum{
    return this.screenType;
  }

  private determineScreenType(screenWidth: number){

    if(screenWidth <= 375){
      this.screenType = ScreenTypeEnum.MOBILE;
      return;

    }else if(screenWidth > 375 && screenWidth < 768){
      this.screenType = ScreenTypeEnum.TABLET_SMALL;
      return;
      
    }else if(screenWidth >= 768 && screenWidth < 1024){
      this.screenType = ScreenTypeEnum.TABLET_LARGE;
      return;
      
    }else if(screenWidth >= 1024 && screenWidth < 1440){
      this.screenType = ScreenTypeEnum.LAPTOP_SMALL;
      return;
      
    }else if(screenWidth >= 1440 && screenWidth < 1280){
      this.screenType = ScreenTypeEnum.LAPTOP_LARGE;
      return;
      
    }else if(screenWidth >= 1280 && screenWidth < 1536){
      this.screenType = ScreenTypeEnum.DESKTOP_SMALL;
      return;
      
    }else {
      this.screenType = ScreenTypeEnum.DESKTOP_LARGE;
      return;
    }

  }

}
