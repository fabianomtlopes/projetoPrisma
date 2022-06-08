interface ICreateClient {
  username: string;
  password: string;
}

export class CreateClientUseCase {
  async execute({ username, password }: ICreateClient) {
    // Validar se o usuario existe
    // Criptografar a senha
    // Salvar o cliente
  }
}
