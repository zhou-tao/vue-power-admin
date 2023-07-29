import type { ListQuery, ListResult } from '../model/baseModel'
import type { PostModel } from './model/postModel'
import { useFetch } from '@/utils/http'

export enum Api {
  POST_LIST = '/sysadmin/post/list'
}

export const getPostList = (data: ListQuery) => {
  return useFetch.POST<ListResult<PostModel>>({
    url: Api.POST_LIST,
    useMock: true,
    data
  })
}
