import { Component, OnInit } from '@angular/core';
import { ProvidersListComponent } from './providers-list/providers-list.component';
import { ProvidersService } from '../../services/providers.service';
import { HttpClientModule } from '@angular/common/http';
import { ProvidersModalComponent } from './providers-modal/providers-modal.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.scss'],
  imports: [
    ProvidersListComponent,
    ProvidersModalComponent,
    HttpClientModule,
    CommonModule,
  ],
  providers: [ProvidersService],
})
export class ProvidersComponent implements OnInit {
  providers: any = [];
  showModal = false;

  constructor(private providerServices: ProvidersService) {}

  ngOnInit() {
    this.getProvidersList();
  }

  getProvidersList() {
    this.providerServices.getProviders().subscribe(
      (providers) => {
        this.providers = providers;
      },
      (err) => console.error(err)
    );
  }
  openModal() {
    const modal = document.getElementById('exampleModal');
    modal?.classList.add('show');
    modal?.setAttribute('aria-hidden', 'false');
    modal?.setAttribute(
      'style',
      'display: block; background: rgba(0,0,0,0.5);'
    );
  }
}
