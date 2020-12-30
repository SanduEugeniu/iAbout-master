import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {Post} from './_model/post.model';
import {PostService} from './_service/post.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})

export class AddPostComponent implements OnInit {
  loading = false;
  error = '';
  selected: any;
  title: any;
  content: any;


  private bottomSheet: MatBottomSheet;
  constructor(bottomSheet: MatBottomSheet,
              private postService: PostService,
              private router: Router
  ) {
    this.bottomSheet = bottomSheet;
  }

  ngOnInit(): any {
  }
  openBottomSheet(): void {
    this.bottomSheet.open(BottomComponent);
  }

  finishAddPost(): any {
    this.title = ( document.getElementById('title') as HTMLInputElement).value;
    this.content = ( document.getElementById('content') as HTMLInputElement).value;
    const email = JSON.parse(localStorage.getItem('currentUser')).data.user.email;
    const fiirstName = JSON.parse(localStorage.getItem('currentUser')).data.user.name;
    const lasstName = JSON.parse(localStorage.getItem('currentUser')).data.user.surname;
    const newPost: Post = {
      mail: email,
      content: this.content,
      firstName: fiirstName,
      lastName: lasstName,
      title: this.title,
      category: this.selected
    };
    this.postService.addPost(newPost) .pipe()
      .subscribe(
        data => {
          if (data.success) {
            this.router.navigate(['/']);
            console.log(newPost);
          }else {
            console.log(newPost);
            this.error = data.data.message;
            this.loading = false;
          }
        });
  }
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.html',
})
export class BottomComponent {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomComponent>) {
  }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

}

