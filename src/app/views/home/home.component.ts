import { Component, OnInit } from '@angular/core';
import { ProfileImageComponent } from '../components/profile-image/profile-image.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    ProfileImageComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    HttpClientModule,
  ],
  providers: [UsersService],
})
export class HomeComponent implements OnInit {
  user: any = [];
  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.userService.getUsers().subscribe(
      (users) => {
        this.user = users;
        console.log(this.user);
      },
      (err) => console.error(err)
    );
  }
}
