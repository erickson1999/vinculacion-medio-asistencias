export interface TablePersonsI {
	users: UsersI[];
	heads: string[];
	options?: TablePersonsOptionsI;
}

export interface UsersI {
	dni: number | string;
	codigo: number | string;
	nombreCompleto: string;
	ciclo: number | string;
	grupo: number | string;
	correo: string;
}

export interface TablePersonsOptionsI {
	numeration: boolean;
	align?: 'left' | 'center' | 'right';
}
