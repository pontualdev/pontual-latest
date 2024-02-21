import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { ApiService } from "@core/api/api.service";
import { PostsModel } from "@core/base-models/posts.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PostResolver{
    
    constructor(private apiService: ApiService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PostsModel> {
        const slug = route.paramMap.get("slug");
        return this.apiService.getPostBySlug(slug ?? '');
    }
}