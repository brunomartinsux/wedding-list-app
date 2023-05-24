export class Guest {
    img:string;
    name:string;
    status: 'guest' | 'owner';


    constructor(data: any){
        this.img = data.img;
        this.name = data.name || 'Sem nome';
        this.status = data.status || 'guest'
    }
}