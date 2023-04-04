import { Pipe, PipeTransform } from '@angular/core';
import { createHash } from 'crypto';

const hashAlgorithms = ['md5', 'sha1', 'sha256', 'sha512'];

@Pipe({ name: 'hash' })
export class HashPipe implements PipeTransform {
  transform(value: string, method: string): string | Error {
    if (!hashAlgorithms.includes(method)) throw Error('Algorithm not found');
    return createHash(method).update(value).digest('hex');
  }
}
