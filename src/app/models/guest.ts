export class Guest {
    img:string = 'https://picsum.photos/300';
    name:string = 'Cassandra Dunn';
    status: 'guest' | 'owner' = 'owner';


    constructor(data: any){
        this.img = data.img;
        this.name = data.name || 'Sem nome';
        this.status = data.status || 'guest'
    }
}