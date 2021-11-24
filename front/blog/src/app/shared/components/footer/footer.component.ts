import { Component, OnInit } from '@angular/core';
import { faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faLinkedin = faLinkedinIn
  faGithub = faGithub
  faGlobe = faGlobe

  constructor() { }

  ngOnInit(): void {
  }

}
