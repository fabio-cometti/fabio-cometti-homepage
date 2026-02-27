import { ChangeDetectionStrategy, Component, Input, input } from '@angular/core';

import { GalleryItem } from 'src/app/models/gallery-item';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'fc-gallery',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  items = input<GalleryItem[]>([]);
}
