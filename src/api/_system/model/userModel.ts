import type { RoleModel } from './roleModel'
import type { PostModel } from './postModel'

export interface UserInfoModel {
  id: string | number
  name: string
  userId: number
  username: string
  gender: string
  avatar: string
  deptCode: Nullable<string>
  deptName: Nullable<string>
  mobile: Nullable<string>
  roles: Partial<RoleModel>[]
  posts: Partial<PostModel>[]
}
