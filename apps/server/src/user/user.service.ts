import { Injectable } from '@nestjs/common'

@Injectable()
export class UserService {
  getUser(): string {
    return 'Vue Power Admin User!'
  }
}
