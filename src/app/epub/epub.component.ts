import { AfterViewInit, Component, OnInit } from '@angular/core';

declare var ePub: any

@Component({
  selector: 'app-epub',
  templateUrl: './epub.component.html',
  styleUrls: ['./epub.component.css']
})
export class EpubComponent implements OnInit {
  book:any;

  constructor() { 
    this.book = ePub("https://s3.amazonaws.com/moby-dick/moby-dick.epub");
    this.book.renderTo("area", { width: '100%', height: '100%' });
  }

  ngOnInit(): void {
  }

  // ngAfterViewInit(): void {
  //   // this.book.renderTo()
  //   this.book.renderTo("area", { width: '100%', height: '100%' });
  // }

}
