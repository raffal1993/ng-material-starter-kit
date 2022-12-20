import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, debounceTime, Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CryptoModel } from '../../models/crypto.model';
import { CryptoService } from '../../services/crypto.service';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CryptoComponent {
  readonly cryptoForm: FormGroup = new FormGroup({
    cryptoSymbol: new FormControl(),
  });

  private _cryptoInputSubject: Subject<string> = new Subject<string>();
  public cryptoInput$: Observable<string> =
    this._cryptoInputSubject.asObservable();

  readonly autocompleteCryptos: Observable<CryptoModel[]> =
    this.cryptoInput$.pipe(
      debounceTime(1000),
      switchMap((data) => this._cryptoService.getCrypto(data))
    );

  private _displayedCryptosSubject: BehaviorSubject<string[]> =
    new BehaviorSubject<string[]>([]);
  public displayedCryptos$: Observable<string[]> =
    this._displayedCryptosSubject.asObservable();

  setInputCrypto(cryptoInput: string): void {
    this._cryptoInputSubject.next(cryptoInput);
  }

  addCrypto(cryptoSymbol: string): void {
    this._displayedCryptosSubject.next([
      ...this._displayedCryptosSubject.value,
      cryptoSymbol,
    ]);
  }

  constructor(private _cryptoService: CryptoService) {}
}
