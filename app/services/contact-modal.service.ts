/**
 * Created by Colin on 6/24/2016.
 * The contact modal service. Not sure I ended up using this.
 */
import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
@Injectable()
export class ContactModalService {

    isClicked:Subject<boolean> = new Subject<boolean>();

}
