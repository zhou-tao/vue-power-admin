import { Body, Controller, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import LoginUserDto from './dto/login.dto'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login (@Body() loginUser: LoginUserDto) {
    const { username, password } = loginUser
    return this.authService.login(username, password)
  }

}
