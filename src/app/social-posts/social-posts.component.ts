import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {
  newPost: boolean = false;

  posts: Post[] = [{
    title: 'title1',
    thought: 'thought1'
  },{
    title: 'title2',
    thought: 'thought2'
  }]

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(event: any){
    this.posts.push(event);
    this.newPost = false;
  }

  onDelete(event: any){
    this.posts?.splice(this.posts?.indexOf(event),1);
  }

}
