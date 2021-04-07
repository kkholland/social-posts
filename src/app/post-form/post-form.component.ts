import { prepareEventListenerParameters } from '@angular/compiler/src/render3/view/template';
import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})

export class PostFormComponent implements OnInit {
  post: Post | null = null;
  
  newTitle: string = '';
  newThought: string = '';

  @Output() submitted = new EventEmitter<Post>();

  constructor() { }

  ngOnInit(): void {
  }

  submitPost(newTitle: string, newThought: string){
    this.post = {
      title: newTitle,
      thought: newThought,
    }
    this.submitted.emit(this.post);
  }

  

}
