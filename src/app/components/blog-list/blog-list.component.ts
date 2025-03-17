import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { PostsService } from '../../services/posts/posts.service';
import { IPost } from '../../interfaces/post.interface';
import { BlogPostComponent} from '../blog-post/blog-post.component';

@Component({
  selector: 'app-blog-list',
  imports: [BlogPostComponent, CommonModule],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent implements OnInit, OnDestroy {
  posts: IPost[] = [];
  private subscription: Subscription = new Subscription();
  
  constructor(private postService: PostsService) {}

  ngOnInit(): void {
    const sub = this.postService.getPosts().subscribe((data) => {
      this.posts = data;
    });
    this.subscription.add(sub);
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions to prevent memory leaks
    this.subscription.unsubscribe();
  }

  increaseLike(post: IPost): void {
    post.likeCount++;   // Increase like count
    this.postService.updatePostLikeCount(post);   
  }

  decreaseLike(post: IPost): void {
    if (post.likeCount > 0) {
      post.likeCount--; // Decrease like count but keep it non-negative
      this.postService.updatePostLikeCount(post);   
    }
  }
}
