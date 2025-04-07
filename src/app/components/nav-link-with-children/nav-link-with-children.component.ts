import { Component, Input } from '@angular/core';
import { ILink } from '../../models/ilink';

@Component({
  selector: 'app-nav-link-with-children',
  standalone: false,
  templateUrl: './nav-link-with-children.component.html',
  styleUrl: './nav-link-with-children.component.css'
})
export class NavLinkWithChildrenComponent {
  @Input()
  public link! : ILink;  
  @Input()
  public parentUrl? : string;
}
