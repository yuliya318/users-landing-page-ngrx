import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { User } from '@shared/interfaces/user.interface';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCardComponent implements OnInit {
  @Input() user: User;

  constructor() {}

  ngOnInit(): void {}

  handleImageError(event): void {
    event.target.src = '../../../../assets/images/user.svg';
  }
}
