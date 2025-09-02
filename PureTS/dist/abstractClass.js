"use strict";
class TakeAPhoto {
    constructor(camera, filter) {
        this.camera = camera;
        this.filter = filter;
    }
}
class Snapchat extends TakeAPhoto {
    constructor(camera, filter, burst) {
        super(camera, filter);
        this.camera = camera;
        this.filter = filter;
        this.burst = burst;
    }
    getLikes() {
        console.log("Getting likes");
    }
}
const photo = new Snapchat("Portrait", "B&W", 3);
console.log(photo);
