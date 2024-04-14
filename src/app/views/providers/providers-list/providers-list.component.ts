import { Component, Input, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-providers-list',
  templateUrl: './providers-list.component.html',
  styleUrls: ['./providers-list.component.scss'],
})
export class ProvidersListComponent implements OnInit {
  @Input() listProviders: any[] = [];
  constructor() {}

  ngOnInit() {}
}
