import { Injectable } from '@angular/core';
import * as Prism from 'prismjs';

import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-scss';

import 'prismjs/plugins/line-numbers/prism-line-numbers';

@Injectable({
  providedIn: 'root',  
})
export class PrismService {
  constructor() { 
  
  }

  prism() {
    return Prism;
  }
}
