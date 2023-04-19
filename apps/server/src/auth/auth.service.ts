import { Injectable, UnauthorizedException } from '@nestjs/common'
import { UserService } from '../user/user.service'

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async login (name: string, pass: string): Promise<any> {
    const user = await this.userService.findOneByUsername(name)
    if (user?.password !== pass) {
      throw new UnauthorizedException()
    }
    // const { password, ...result } = user;
    // TODO: Generate a JWT and return it here
    // instead of the user object
    return user
  }
}
