import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProvidersService } from '../../../services/providers.service';

@Component({
  standalone: true,
  selector: 'app-providers-modal',
  templateUrl: './providers-modal.component.html',
  styleUrls: ['./providers-modal.component.scss'],
  imports: [FormsModule],
  providers: [ProvidersService],
})
export class ProvidersModalComponent implements OnInit {
  formData: any = {};
  constructor(private providerServices: ProvidersService) {}

  ngOnInit() {}

  openModal() {
    const modal = document.getElementById('exampleModal');
    modal?.classList.add('show');
    modal?.setAttribute('aria-hidden', 'false');
    modal?.setAttribute(
      'style',
      'display: block; background: rgba(0,0,0,0.5);'
    );
  }

  closeModal() {
    const modal = document.getElementById('exampleModal');
    modal?.classList.remove('show');
    modal?.setAttribute('aria-hidden', 'true');
    modal?.setAttribute('style', 'display: none;');
  }

  submitForm() {
    this.providerServices.addProviders(this.formData).subscribe(
      (res) => {
        this.closeModal();
        window.location.reload();
      },
      (err) => console.error(err)
    );
  }
}
