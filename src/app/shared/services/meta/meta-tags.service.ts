import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, NgZone, PLATFORM_ID } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { PostsModel } from '@core/base-models/posts.model';

@Injectable({
  providedIn: 'root'
})
export class MetaTagsService {

  private url: string = '';

  constructor(
    private meta: Meta,
    @Inject(PLATFORM_ID) private platformId: any,
    private ngZone: NgZone
  ) {
    if(isPlatformBrowser(this.platformId)){
      this.url = window.location.href;
    }
  }

  addPostDetailsForSocialMediaShareProccess(thePost: PostsModel): boolean{
    // this.updateDefaultMeta(thePost);
    this.meta.addTag({ name: 'og:title', content: thePost.title });
    this.meta.addTag({ name: 'og:description', content: thePost.highlightDescription ?? '' });
    this.meta.addTag({ name: 'og:image', content: thePost.imagePath.mediumImageSize});
    this.meta.addTag({ name: 'og:url', content: this.url});

    this.meta.addTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.addTag({ name: 'twitter:title', content: thePost.title });
    this.meta.addTag({ name: 'twitter:description', content: thePost.highlightDescription ?? '' });
    this.meta.addTag({ name: 'twitter:image', content: thePost.imagePath.mediumImageSize});
    this.meta.addTag({ name: 'twitter:url', content: this.url});

    return true;
  }
  private updateDefaultMeta(thePost: PostsModel){
    // let metaOgTitle = document.querySelector("meta[name='og:title']") as HTMLElement;
    // metaOgTitle.setAttribute("content", "teste");
  }

}
