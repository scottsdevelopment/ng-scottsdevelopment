import { Injectable } from '@angular/core';
import * as Prism from 'prismjs';

import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-scss';

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
