import { Component, Input,Output, EventEmitter, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: Post | null = null;
  @Output() deleted = new EventEmitter<Post>();

  constructor() { }

  ngOnInit(): void {
  }

  deletePost(){
    if(this.post){
      this.deleted.emit(this.post);
    }
    
  }

}
