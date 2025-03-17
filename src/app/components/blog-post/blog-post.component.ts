import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IPost } from '../../interfaces/post.interface';

@Component({
  selector: 'app-blog-post',
  imports: [],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css'
})
export class BlogPostComponent {

  @Input() post!: IPost;
  @Output() like = new EventEmitter<void>();
  @Output() dislike = new EventEmitter<void>();

  likePost(): void {
    this.like.emit();
  }

  dislikePost(): void {
    this.dislike.emit();
  }
}
