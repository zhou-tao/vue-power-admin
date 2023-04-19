export class CreateUserDto {
  readonly username: string
  readonly password: string
  readonly name: string
  readonly gender: number
  readonly avatar: string
  readonly mobile: string
  readonly deptId: string
  readonly roleIds: string[]
  readonly postIds: string[]
}
