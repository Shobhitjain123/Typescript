interface TakeAPicture {
    cameraMode: string;
    filter: string;
    burst: number;
}

class Instagram implements TakeAPicture {

    constructor(
        public cameraMode: string, 
        public filter: string, 
        public burst: number
    ) {
        
    }
}

interface Story {
    createStory(): void;
}

class Youtube implements TakeAPicture, Story {
    
    constructor(
        public cameraMode: string, 
        public filter: string, 
        public burst: number,
        public short: string
    ) {
        
    }

    createStory(): void {
        console.log("Creating a story");
    }
}