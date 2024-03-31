import { Injectable, inject } from "@angular/core";
import { ApiService } from "@core/api/api.service";
import { PostsModel } from "@core/base-models/posts.model";
import { LIMIT_OF_RECENT_POSTS, LIMIT_OF_RECOMMENDED_POSTS_ON_POST_DETAILS } from "@core/constants/limitations";
import { BehaviorSubject, Observable, map } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CorePostFacade{

    private apiService = inject(ApiService);
    
    // get 12(limit estipulated on LIMIT_OF_RECENT_POSTS)
    generalRecentPosts$: BehaviorSubject<PostsModel[]> = new BehaviorSubject<PostsModel[]>([]);

    getRecentPosts(limit: number = LIMIT_OF_RECENT_POSTS): Observable<PostsModel[]>{
        if(this.generalRecentPosts$.getValue().length === 0)
            this.apiService.getRecentPosts(limit).subscribe({
                next: (recentPosts: PostsModel[]) => {
                    this.generalRecentPosts$.next(recentPosts);
                }
            });

        return this.generalRecentPosts$;
    }

    getRecommendedPosts(limit: number = LIMIT_OF_RECOMMENDED_POSTS_ON_POST_DETAILS): Observable<PostsModel[]>{
        let recommendedPosts: PostsModel[] = [];

        return this.getRecentPosts().pipe(
            map((incomingPosts: PostsModel[]) => {
                for (let index = 0; index < limit; index++) {
                    recommendedPosts.push(incomingPosts[index]);
                }
                return recommendedPosts;
            })
        )
    }

}