import { FormatphonePipe } from './../pipes/formatphone-pipe';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpsUserService } from '../services/httpsuser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detailuser',
  imports: [CommonModule, RouterLink, FormatphonePipe],
  templateUrl: './detailuser.html',
  styleUrl: './detailuser.scss',
})
export class Detailuser implements OnInit {
  user: any = null;

  today = new Date();

  constructor(
    private route: ActivatedRoute,
    private userServie: HttpsUserService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.userServie.getUserById(Number(id)).subscribe({
        next: (data) => {
          this.user = data;
          console.log('Tanlangan user:', this.user);

          // <--- 3. Majburlab yangilaymiz
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error(err);
          this.cdr.detectChanges(); // Xatoda ham yangilaymiz
        },
      });
    }
  }
}
