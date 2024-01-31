import { Component, Input, OnInit, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { PageStructure } from '@core/base-models/page-structure.mode';
import { SPECIAL_CATEGORIES } from '@core/config/special-categories';
import { ScreenDimentions } from '@core/services/window/screen-dimentions.service';
import { slideTo } from '@shared/helpers/functions/slider.func';

@Component({
  selector: 'pontual-categorized-posts-section',
  templateUrl: './categorized-posts-section.component.html',
  styleUrls: ['./categorized-posts-section.component.css']
})
export class CategorizedPostsSectionComponent implements OnInit, OnChanges {
  
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    public screenDimentions: ScreenDimentions
  ) {}

  @Input() pageStructure: PageStructure = { sections: [] };
  @Input() activeIndexes: { [key: string]: number } = {}

  numberOfPostsWithFullContent: number = 3;

  
  ngOnInit(): void {
    // console.log(this.screenDimentions.getScreenType)
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(this.pageStructure)
    // console.log(this.activeIndexes)
    // console.log(this.screenDimentions.getScreenType)
  }

  next(data: any[], categorySlug: string){

    if(this.activeIndexes[categorySlug] >= data.length - 2){
      return;
    }

    this.activeIndexes[categorySlug]++;
    slideTo(this.activeIndexes[categorySlug], 'scrollEnabled-' + categorySlug);
  }

  isSpecialSection(section: string): boolean{
    if(!(SPECIAL_CATEGORIES.includes(section))){
      return false;
    }else{
      return true;
    }
  }

  prev(data: any[], categorySlug: string){
    if(this.activeIndexes[categorySlug] == 0){
      return;
    }
    
    this.activeIndexes[categorySlug]--;
    slideTo(this.activeIndexes[categorySlug], 'scrollEnabled-' + categorySlug);
  }

}
