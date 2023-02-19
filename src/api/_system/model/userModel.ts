import { PostModel } from './postModel'
import { RoleModel } from './roleModel'

export interface UserInfoModel {
  id: string | number,
  name: string
  userId: number
  username: string
  gender: string
  deptCode: Nullable<string>
  deptName: Nullable<string>
  mobile: Nullable<string>
  posts: Partial<PostModel>[]
  roles: Partial<RoleModel>[]
}
