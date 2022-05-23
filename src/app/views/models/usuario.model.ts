export class Usuario {
  public id: number;
  public usuario: string;
  public nome: string;
  public senha: string;
  public tipo_usuario: number;
  public email: string;
  public data_nascimento: string;
  public data_cadastro: string;
  public data_alteracao: string;


	constructor(id?: number, usuario?: string, nome?: string, senha?: string,
              tipo_usuario?: number, email?: string, data_nascimento?: string,
              data_cadastro?: string, data_alteracao?: string) {

		this.id = id? id : 0;
		this.usuario = usuario? usuario : "";
		this.nome = nome? nome : "";
		this.senha = senha? senha : "";
		this.tipo_usuario = tipo_usuario? tipo_usuario : 0;
		this.email = email? email : "";
		this.data_nascimento = data_nascimento? data_nascimento : "";
		this.data_cadastro = data_cadastro? data_cadastro : "";
		this.data_alteracao = data_alteracao? data_alteracao : "";
	}


  /* constructor(id?: number, usuario?: string, nome?: string, senha?: string, tipousuario?: number,) {

    this.id = id? id : 0;
    this.usuario = usuario? usuario : "";

  } */

}
