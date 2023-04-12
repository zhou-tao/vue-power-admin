import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateUserDto } from './dto/user.dto'
import { User } from './schemas/user.schema'

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = await this.userModel.create(createUserDto)
    return createdUser
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec()
  }

  async findOne(id: string): Promise<User | null> {
    return this.userModel.findOne({ id }).exec()
  }

  async delete(id: string) {
    const deletedUser = await this.userModel
      .findByIdAndRemove({ id })
      .exec()
    return deletedUser
  }
}
