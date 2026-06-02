import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'chuck-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="gallery-root">
      <header class="gallery-header">
        <h1>Chuck's Website</h1>
        <p class="subtitle">A small photo gallery</p>
      </header>

      <main class="gallery-grid">
        <figure *ngFor="let img of images">
            <img [src]="'assets/images/' + img.file" [alt]="img.alt"/>
          <figcaption>{{ img.caption }}</figcaption>
        </figure>
      </main>

      <footer class="gallery-footer">© Chuck</footer>
    </section>
  `,
  styles: [
    `:host { display:block; padding: 1rem; font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial; color: #222 }
    .gallery-header { text-align:center; margin-bottom: 1rem }
    .gallery-header h1 { margin:0; font-size:clamp(24px,4vw,36px) }
    .subtitle { color:#666; margin-top:6px }
    .gallery-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:18px; max-width:1100px; margin:0 auto }
    figure{ background:#fff; border-radius:10px; overflow:hidden; box-shadow:0 6px 18px rgba(20,30,50,0.08); margin:0 }
    img{ width:100%; height:300px; object-fit:cover; display:block }
    figcaption{ padding:10px 12px; font-weight:600 }
    .gallery-footer{ text-align:center; color:#666; padding:12px; margin-top:12px }
    @media (max-width:480px){ img{ height:200px } }
    `
  ]
})
export class GalleryComponent {
  images = [
    { file: 'Protest.jpg', alt: 'Protest', caption: 'Protest' },
    { file: 'Protest_2.jpg', alt: 'Protest 2', caption: 'Protest 2' },
    { file: 'Selfie.jpg', alt: 'Selfie', caption: 'Selfie' }
  ];
}
