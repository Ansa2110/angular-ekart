import { Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  toHome()
  {
    document.getElementById('home')?.scrollIntoView({behavior:"smooth"});
  }
  toSpecs()
  {
    document.getElementById('specs')?.scrollIntoView({behavior:"smooth"});
  }
  toFeatures()
  {
    document.getElementById('features')?.scrollIntoView({behavior:"smooth"});
  }
  toReviews()
  {
    document.getElementById('reviews')?.scrollIntoView({behavior:"smooth"});
  }
}