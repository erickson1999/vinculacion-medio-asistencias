export interface IGetPersonas {
	apelMat: string;
	apelPat: string;
	correo: string;
	direccion: string;
	dni: string;
	docente: Nte;
	estudiante: Nte;
	fecha_registro: string;
	id: number;
	nombre: string;
	telefono: string;
}

export interface Nte {
	codigo: string;
	id: number;
}
