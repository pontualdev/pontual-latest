import { Injectable, OnInit } from '@angular/core';
import { ApiService } from '@core/api/api.service';
import { AdsModel } from '@core/base-models/ads.model';
import { PostsModel } from '@core/base-models/posts.model';
import { LIMIT_OF_RECOMMENDED_POSTS_ON_POST_DETAILS, LIMIT_OF_RELATED_POSTS_ON_POST_DETAILS } from '@core/constants/limitations';
import { READING_PAGE_INDEX_ID } from '@core/constants/pages';
import { CorePostFacade } from '@core/facades/core-post.facade';

import { BehaviorSubject, Observable, map, pipe, tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class PostFacade implements OnInit{

    private advertisements$: BehaviorSubject<AdsModel[]> = new BehaviorSubject<AdsModel[]>([]);
    private recommendedPosts$: BehaviorSubject<PostsModel[]> = new BehaviorSubject<PostsModel[]>([]);

    constructor(
        private api: ApiService,
        private corePostFacade: CorePostFacade
    ) {}

    ngOnInit(): void {
        
    }

    getAdvertisements(): Observable<any[]>{
        if(this.advertisements$.getValue().length == 0)
            this.api.advertisements().subscribe({
                next: (ads: any[]) => {
                    this.advertisements$.next(ads[READING_PAGE_INDEX_ID]);
                }
            });

        return this.advertisements$;
    }

    getRelatedPosts(categoryId: number, excluded_id?: number): Observable<PostsModel[]>{
        return this.api.getPostsFromCategory(LIMIT_OF_RELATED_POSTS_ON_POST_DETAILS, categoryId, excluded_id);
    }

    getRecommendedPosts(): Observable<PostsModel[]>{
        return this.corePostFacade.getRecommendedPosts();
    }

    getPostBySlug(slug: string): Observable<PostsModel>{
        return this.api.getPostBySlug(slug);
    }

}