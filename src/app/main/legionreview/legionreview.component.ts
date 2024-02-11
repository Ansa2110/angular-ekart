import { Component } from '@angular/core';
import {faStar, faQuoteRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-legionreview',
  templateUrl: './legionreview.component.html',
  styleUrls: ['./legionreview.component.css']
})
export class LegionreviewComponent {
  star = faStar
  quoteRight = faQuoteRight
}
