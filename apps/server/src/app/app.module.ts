import { Module } from '@nestjs/common'
import { UserModule } from '../user/user.module'
import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
