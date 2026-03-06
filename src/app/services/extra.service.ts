import { Injectable, Signal } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { bufferCount } from "rxjs/internal/operators/bufferCount";
import { filter } from "rxjs/internal/operators/filter";
import { map } from "rxjs/internal/operators/map";
import { take } from "rxjs/internal/operators/take";


@Injectable({
  providedIn: 'root'
})
export class ExtraService {  
  public readonly extraBehaviorSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  
  public readonly extraEnabled: Signal<boolean | undefined> = toSignal(this.extraBehaviorSubject.asObservable().pipe(    
    bufferCount(3, 1),
    map(menuVoiceList => menuVoiceList.join('')),
    filter(menuVoiceListString => menuVoiceListString == '042'),
    map(_ => true),
    take(1)
  ));
  constructor() {
  
  } 
}