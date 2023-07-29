import type { DateLogModel } from '@/api/model/baseModel'
import type { ButtonEnum } from '@/enums/permissionEnum'
import type { AppRouteConfig } from '@/router/types'

export interface BuildMenuModel
  extends Omit<AppRouteConfig, 'name' | 'component' | 'redirect' | 'children'> {
  name: Nullable<string>
  component: string
  redirect?: Nullable<string>
  permissions: ButtonEnum[]
  children?: BuildMenuModel[]
}

export interface MenuModel
  extends Omit<BuildMenuModel, 'meta' | 'children'>,
  DateLogModel {
  title: string
  order: number
  parentId: number
  icon: string
  leaf: boolean
  [key: string]: any
}
