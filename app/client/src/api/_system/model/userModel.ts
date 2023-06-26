import { RoleModel } from './roleModel'
import { PostModel } from './postModel'

export interface UserInfoModel {
  id: string | number,
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
