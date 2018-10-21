export class User {
    constructor(
        readonly id: number,
        public lastName: string = '',
        public firstName: string = '',
        public surName: string = '') {

        }
}
