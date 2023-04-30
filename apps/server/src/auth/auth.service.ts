import { Injectable } from '@nestjs/common'
import { UserService } from '../user/user.service'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUser (name: string, pass: string) {
    const user = await this.userService.findOneByUsername(name)
    if (user?.password !== pass) {
      return null
    }
    return user
  }

  login(user: any) {
    return {
      access_token: this.jwtService.sign({ username: user.username, sub: user.password }),
    }
  }
}
