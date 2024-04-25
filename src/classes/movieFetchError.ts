/* 
    The purpose of this custom error
    is to declare currentTime so it is used as a key attr on ErrorDialog.tsx.
*/

export class MovieFetchError extends Error {
    constructor(message: string, public currentTime: string) {
        super(message);
    }
}