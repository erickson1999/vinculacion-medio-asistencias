export interface IGetMenu {
	icono: string;
	idMenu: number;
	nombre: string;
	roles: Role[];
	url: string;
}

export interface Role {
	descRol: string;
	estado: string;
	idRol: number;
	nombreRol: string;
}
