import { Component } from '@angular/core';
import { BlogListComponent } from '../../components/blog-list/blog-list.component';

@Component({
  selector: 'app-blog',
  imports: [BlogListComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

}
