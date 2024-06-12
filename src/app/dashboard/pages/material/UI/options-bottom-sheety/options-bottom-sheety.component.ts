import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-options-bottom-sheety',
  standalone: true,
  imports: [CommonModule, MatListModule],
  templateUrl: './options-bottom-sheety.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionsBottomSheetyComponent {
  openLink(event: MouseEvent): void {
    console.log('Clicked');
  }
}
