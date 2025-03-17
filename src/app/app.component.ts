import { Component } from '@angular/core';
import { BlogListComponent } from '../app/components/blog-list/blog-list.component';

@Component({
  selector: 'app-root',
   imports: [BlogListComponent],
   templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  title = 'angular-take-home-test';
}
