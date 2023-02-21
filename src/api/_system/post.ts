import type { PostModel } from './model/postModel'
import { useFetch } from '@/utils/http'
import { ListQuery, ListResult } from '../model/baseModel'

enum Api {
  ROLE_LIST = '/sysadmin/post/list',
}

export const getPostList = (data: ListQuery) => {
  return useFetch.POST<ListResult<PostModel>>({
    url: Api.ROLE_LIST,
    withToken: false,
    useMock: true,
    data
  })
}
