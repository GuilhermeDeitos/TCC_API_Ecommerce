class UsuarioService{

    constructor(usuarioModel){
        this.usuario = usuarioModel;
    }

    async getUsuarios(){
        const usuarios = await this.usuario.findAll();
        return usuarios
    }

    async addUsuario(usuarioDTO){ //DTO = Data Transfer Object

        const usuario = await this.usuario.findOne({
            where: {
                email: usuarioDTO.email
            }
        })

        if(usuario != null){
            throw new Error('Já existe uma conta com este Email!');
        }
        try {
            await this.usuario.create(usuarioDTO);
        } catch (error) {
            console.error(error.message);
            throw error
            
        }
    }

}
module.exports = UsuarioService
