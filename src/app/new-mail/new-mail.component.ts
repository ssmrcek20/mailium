import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-new-mail',
  standalone: true,
  imports: [RouterModule, MatIconModule, MatTooltipModule, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, MatSelectModule],
  templateUrl: './new-mail.component.html',
  styleUrl: './new-mail.component.scss'
})
export class NewMailComponent {
  model = { title: '', sendTo: '', mail: '' };

  onSubmit() {
    console.log(this.model);
  }
}
