abstract class TakeAPhoto {
    constructor(
        public camera: string,
        public filter: string
    ) {
    }
    abstract getLikes(): void

    getComments(): void { 
        console.log("Getting comments");
     }
}

class Snapchat extends TakeAPhoto {
    constructor(
        public camera: string,
        public filter: string,
        public burst: number
    ) {
        super(camera, filter);
    }

    getLikes(): void {
        console.log("Getting likes");
    }
}

const photo = new Snapchat("Portrait", "B&W", 3);
console.log(photo);
console.log(photo.getLikes());
console.log(photo.getComments());