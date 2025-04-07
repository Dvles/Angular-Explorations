import { Component } from '@angular/core';
import { ILink } from '../../models/ilink';

@Component({
  selector: 'app-nav-menu',
  standalone: false,
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.css'
})
export class NavMenuComponent {
  public links : ILink[]= [
    {title : 'Accueil', url: '/', isVisible: true},
    {title : 'Section Démonstrations', url : '/demos', children: [
      {title : 'Démonstration 01 - Les composants', url : '/demo01', isVisible: true},
      {title : 'Démonstration 02 - Les composants', url : '/demo02', isVisible: true},
      {title : 'Démonstration 03 - Les bindings', url : '/demo03', isVisible: true},
      {title : 'Démonstration 04 - Les pipes', url : '/demo04', isVisible: true},
      {title : 'Démonstration 05 - Les directives', url : '/demo05', isVisible: true},
      {title : 'Démonstration 06 - Les Input/Output', url : '/demo06', isVisible: true},
      {title : 'Démonstration 07 - Les services', url : '/demo07', isVisible: true},
      {title : 'Démonstration 08 - Les formulaires', url : '/demo08', isVisible: true}
    ], isVisible : true},
    {title : 'Section Exercices', url : '/exos', children: [
      {title : 'Exercice 01 : Le chronomètre (binding + pipe)', url : '/chrono', isVisible: true},
      {title : 'Exercice 02 : La shopping liste (input/output)', url : '/shop', isVisible: true},
      {title : 'Exercice 03 : La shopping liste V2 (service)', url : '/shopv2', isVisible: true},
    ], isVisible : true}
  ];
}
