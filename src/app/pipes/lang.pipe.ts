import { Pipe, PipeTransform } from '@angular/core';

const langHandler = {
  Name: {
    en: 'Name',
    pl: 'Nazwa',
  },
  Image: {
    en: 'Image',
    pl: 'Obrazek',
  },
  Price: {
    en: 'Price',
    pl: 'Cena',
  },
  'Published Since': {
    en: 'Published Since',
    pl: 'Opublikowano',
  },
  'Product Code': {
    en: 'Product Code',
    pl: 'Kod Produktu',
  },
};

@Pipe({ name: 'lang' })
export class LangPipe implements PipeTransform {
  transform(value: string, lg: string): string {
    //@ts-ignore
    return langHandler[value][lg];
  }
}
