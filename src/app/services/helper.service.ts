import { Observable } from 'rxjs/Rx';
import { AngularFire } from 'angularfire2';
import { Injectable } from '@angular/core';


@Injectable()
export class FirebaseService {

    constructor(
        private af: AngularFire
    ) { }

    get(url: string): Observable<any> {
        return this.af.database.object(url)
            .map(obj => {return this.clean(obj)});
    }

    list(url: string): Observable<any> {
        return this.af.database.list(url)
            .map(list =>
                // remove unwanted fields
                list = list.map(obj => this.clean(obj))
            );
    }
    update(url: string, obj: any, ): firebase.Promise<any> {
        return this.af.database.object(url).update(obj);
    }
    push(url: string, obj: any): firebase.Promise<any> {
        return this.af.database.list(url).push(obj);
    }
    set(url: string, obj: any): firebase.Promise<any> {
        return this.af.database.object(url).set(obj);
    }
    remove(url: string): firebase.Promise<any> {
        return this.af.database.object(url).remove();
    }

    dictToArray<T>(dict: { [key: string]: T }): T[] {
        return dict && Object.keys(dict).map(key => dict[key]) || [];
    }

    arrayToDict<T>(arr: T[]): { [key: string]: T } {
        if (arr.length == 0) return {};
        return arr
            .map(obj => {
                let new_obj = {};
                new_obj[(<any>obj).key] = obj;
                return new_obj;
            })
            .reduce((prev, curr) => {
                Object.assign(prev, curr);
                return prev;
            });
    }

    private clean<T>(obj: T): T {
        let new_obj = JSON.parse(JSON.stringify(obj));
        new_obj.key = new_obj.$key;
        delete new_obj.$key;
        delete new_obj.$exists;
        delete new_obj.selected;
        return new_obj;
    }

}