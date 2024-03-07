import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    title: 'Pontual AO. - Página Inicial',
    loadChildren: () => import('./feature-modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'posts/:category',
    title: 'Pontual AO. - Todas as publicações',
    loadChildren: () => import('./feature-modules/posts/posts.module').then(m => m.PostsModule)
  },
  {
    path: 'post/:slug',
    title: 'Pontual AO. - Leitura de Publicação',
    loadChildren: () => import('./feature-modules/post/post.module').then(m => m.PostModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./feature-modules/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'terms',
    title: 'Pontual AO. - Termos de usos e Políticas  de privacidade',
    loadChildren: () => import('./feature-modules/terms/terms.module').then(m => m.TermsModule)
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
