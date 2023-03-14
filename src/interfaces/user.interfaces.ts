export interface User{
    numero_documento:number;
    contraseña:string;
    primer_nombre:string;
    segundo_nombre:string;
    primer_apellido:string;
    segundo_apellido:string;
    rol:'seguridad'|'general'|'administrador'; 
}
