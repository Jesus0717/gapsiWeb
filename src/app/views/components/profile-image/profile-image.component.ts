import { Component, Input, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-profile-image',
  templateUrl: './profile-image.component.html',
  styleUrls: ['./profile-image.component.scss'],
})
export class ProfileImageComponent implements OnInit {
  @Input() profileImage: any;
  constructor() {}

  ngOnInit() {}
}
