export class Observer{
    constructor(
        public callback: Function
    ){}

    refresh( data: string){
        this.callback( data );
    }
}

export class HTMLUpdater {
    private observer: Observer[];

    constructor(){
        this.observer = [];
    }

    addSubscriber(observer: Observer){
        this.observer.push(observer);
    }
    removeSubscriber(observer: Observer){
        this.observer = this.observer.filter(obs => obs !== observer);
    }

    notifySubscribers( data: string){
        this.observer.forEach(obs => obs.callback( data ));
    }
}