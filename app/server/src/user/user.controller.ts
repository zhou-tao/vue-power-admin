import { Controller, Get, Post, Delete, Param, Body, HttpStatus, HttpCode, UseGuards } from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/user.dto'
import { User } from './schemas/user.schema'
import { AuthGuard } from '@nestjs/passport'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @HttpCode(HttpStatus.OK)
  @Post()
  async create(@Body() createCatDto: CreateUserDto) {
    await this.userService.create(createCatDto)
  }

  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User | null> {
    return this.userService.findOne(id)
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.userService.delete(id)
  }
}
