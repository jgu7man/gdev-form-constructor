export class InputModel {
    constructor(
        public etiqueta: string,
        public ID: string,
        public tipo: string,
        public requerido: boolean,
        public index?: number,
        public placeholder?: string,
        public info?: string
    ) {
        
    }
}

