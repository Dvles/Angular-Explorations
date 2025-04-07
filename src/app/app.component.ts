import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy{
  title = 'Demo-Angular';
  count : number = 0;
  
  ngOnInit(): void {
    console.log(`${this.count} : OnInit`);
    this.count ++;
  }
  ngAfterViewInit(): void {
    console.log(`${this.count} : AfterViewInit`);
    this.count ++;
  }
  ngOnDestroy(): void {
    console.log(`${this.count} : OnDestroy`);
    this.count ++;
  }
}
