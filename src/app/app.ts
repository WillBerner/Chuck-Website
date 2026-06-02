import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GalleryComponent } from './gallery.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GalleryComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Chuck-Website');
}
