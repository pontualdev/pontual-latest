import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { PostsModel } from '@core/base-models/posts.model';
import { MetaTagsService } from '@shared/services/meta/meta-tags.service';

@Component({
  selector: 'pontual-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit, OnChanges {

  @Input() bannerPosts: PostsModel[] = [];
  @Input() highlightedPosts: PostsModel[] = [];

  constructor(private metaService: MetaTagsService){ }
  
  ngOnInit(): void {
    
  }
  ngOnChanges(changes: SimpleChanges): void {

    if(this.bannerPosts[0]){
      // let banner = this.bannerPosts[0].imagePath.mediumImageSize;

      this.metaService.addMetaTag({
        title: 'Pontual - Fonte Credível de Informação',
        description: 'Pontual é um jornal online, actualizável a qualquer hora.',
        image: this.bannerPosts[0].imagePath.mediumImageSize ?? '',
        url: 'https://fridoom.com'
      });
    }
  }
}
