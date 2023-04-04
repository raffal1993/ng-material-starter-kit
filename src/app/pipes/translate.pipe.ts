import { Inject, Pipe, PipeTransform } from '@angular/core';
import { TRANSLATION } from '../config/translation';
import { TranslationModel, TranslationOneModel } from '../models/translation.model';

@Pipe({ name: 'translate' })
export class TranslatePipe implements PipeTransform {
  constructor(@Inject(TRANSLATION) private _translation: TranslationModel) {}
  transform(value: string, lang: string): string {
    return this._translation[lang as keyof TranslationModel][value as keyof TranslationOneModel] || value;
  }
}
