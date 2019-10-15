import { Component, OnInit, Input, ElementRef, ViewEncapsulation } from '@angular/core';
import { PrismService } from '../services/prism/prism.service';

@Component({
  selector: 'code-block',
  templateUrl: './code-block.component.html',
  styleUrls: ['./code-block.component.scss',
  '../../../node_modules/prismjs/themes/prism-okaidia.css',
  '../../../node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.None
})
export class CodeBlockComponent implements OnInit {
  @Input() language: string = 'none';
  @Input() code: string;
  @Input() lineNumbers: boolean = true;

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

  getClass() {
    let klass: string = `language-${this.language}`;
    if (this.lineNumbers) {
      klass += ' line-numbers';
    }
    return klass;
  }
}
