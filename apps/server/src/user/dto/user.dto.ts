export class CreateUserDto {
  readonly name: string
  readonly userId: number
  readonly username: string
  readonly gender: number
  readonly avatar: string
  readonly mobile: string
  readonly deptId: string
  readonly roleIds: string[]
  readonly postIds: string[]
}
