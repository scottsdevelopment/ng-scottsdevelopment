import { Component, OnInit, Input, ElementRef, ViewEncapsulation } from '@angular/core';
import { PrismService } from '../services/prism/prism.service';

@Component({
  selector: 'code-block',
  templateUrl: './code-block.component.html',
  styleUrls: ['./code-block.component.scss',
  '../../../node_modules/prismjs/themes/prism-okaidia.css'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.None
})
export class CodeBlockComponent implements OnInit {
  @Input() language: string;
  @Input() code: string;

  constructor(private el: ElementRef,  private prismService: PrismService) { 
    
  }

  ngOnInit() {

  }

  ngAfterViewChecked() {
    // highlightElement(code-block > pre > code)
    if (this.el.nativeElement && this.el.nativeElement.children[0] && this.el.nativeElement.children[0].children[0]) {
      this.prismService.prism().highlightElement(this.el.nativeElement.children[0].children[0]);
    }
  }

  getLanguageClass() {
    return `language-${this.language}`;
  }
}
