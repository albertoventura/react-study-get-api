export class Exception extends Error {
    constructor(message){
        super();
        this.message = message;
    }
}