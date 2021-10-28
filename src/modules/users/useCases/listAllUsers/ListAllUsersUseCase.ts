import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string | string[];
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User[] {
    const userFound = this.usersRepository.findById(user_id as string)
    if (!userFound) {
      throw new Error("Mensagem do erro");
    }

    if (!userFound.admin) {
      throw new Error("Mensagem do erro");
    }

    return this.usersRepository.list()
  }
}

export { ListAllUsersUseCase };
