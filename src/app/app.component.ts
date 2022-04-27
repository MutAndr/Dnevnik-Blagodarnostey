import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Thank } from './models/thank';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public adding = false;
  public editing = false;
  public editingIndex: number;

  public thankForm = new FormGroup({
    name: new FormControl(''),
    feeling: new FormControl(''),
    pleasure: new FormControl(''),
  });

  public thanks: Thank[] = [
    <Thank>{
      name: 'Я благодарен хорошей погоде',
      feeling: 'Радость',
      pleasure:
        'Мне нравится, что вокруг тепло, светло и солнечно. Это дает мне сил и хорошее настроение.',
    },
    <Thank>{
      name: 'Я благодарен вкусному чаю',
      feeling: 'Умиротворение',
      pleasure:
        'Я люблю пить чай вечером, наслаждаться его вкусом и вспоминать приятные моменты моей жизни.',
    },
  ];

  public onSubmit() {
    const thank = this.thankForm.value as Thank;

    if (this.editing) {
      this.thanks.splice(this.editingIndex, 1, thank);
    } else {
      this.thanks.push(thank);
    }

    this.editing = false;
    this.adding = false;
    this.exitForm();
  }

  public setEditForm(thank: Thank, index: number) {
    this.thankForm.patchValue({
      name: thank.name,
      feeling: thank.feeling,
      pleasure: thank.pleasure,
    });
    this.editing = true;
    this.editingIndex = index;
  }

  public onDelete(index: number) {
    this.thanks.splice(index, 1);
  }

  exitForm() {
    this.adding = false;
    this.editing = false;
    this.thankForm.reset();
  }

}
