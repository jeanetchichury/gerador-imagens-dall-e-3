import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class LoginService {
  
  constructor(
    private user: UserService
  ) {} 

  async create(login: LoginDto) {
    const userLogin = await this.user.findUserByUser(login.user)

    if (login.password != userLogin.password) {
      throw new Error("Unauthorized")
    }

    return 'Welcome';
  }
}
