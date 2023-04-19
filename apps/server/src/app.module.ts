import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { UserModule } from './user/user.module'
import { AuthModule } from './auth/auth.module'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/vpa'),
    AuthModule,
    UserModule
  ]
})
export class AppModule {}
