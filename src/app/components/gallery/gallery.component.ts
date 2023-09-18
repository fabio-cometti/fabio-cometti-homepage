import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryItem } from 'src/app/models/gallery-item';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'fc-gallery',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  @Input('items') items: GalleryItem[] = [];
}
