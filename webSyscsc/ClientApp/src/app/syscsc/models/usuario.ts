export class Usuario {
    numeroCedula: string;
    tipoUsuario: number;
    tipoUsuarioNombre: string;
    primerNombre: string;
    segundoNombre: string;
    primerApellido: string;
    segundoApellido: string;
    nombreCompleto: string;
    usuarioI: string;
    contrasena: string;
    confirmarContrasena: string;
    telefono: string;
    email: string;   

    setTipoUsuarioNombre(){
        let tipo = [];
        tipo[1] = 'Administrador';
        tipo[2] = 'Técnico';
        this.tipoUsuarioNombre = tipo[this.tipoUsuario];
    }

    setNombreCompleto(){
        this.nombreCompleto = this.primerNombre +' '+ this.segundoNombre +' '+ this.primerApellido +' '+ this.segundoApellido;
    }

    validarContrasena(){
        if(this.contrasena == this.confirmarContrasena){
            return true;
        }
        return false;
    }
}