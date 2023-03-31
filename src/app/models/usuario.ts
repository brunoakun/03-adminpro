export class Usuario {
    constructor(
        public id?: number,
        public username?: string,
        public password?: string,
        public rol?: string,
        public email?: string,
        public nombre?: string,
        public telefono?: string
    ) { }
}
