import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = new Array<Subscription>();
  public title!: string;

  constructor(
    private readonly router: Router,
  ) { }
  
  ngOnInit(): void {
    this.subscriptions.push(
      this.router.events.subscribe(event => {
        if (event instanceof ActivationStart) {
          if (event.snapshot.data['title'] != null) {
            this.title = event.snapshot.data['title'];
          }
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
