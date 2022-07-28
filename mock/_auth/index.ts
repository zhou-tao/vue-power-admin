import type { MockMethod } from 'vite-plugin-mock'
import { resultError } from '../utils'

// mock 用户登录账号
export const createFakeUserList = () => [
  {
    name: 'mock_1',
    userId: '1',
    username: 'admin',
    password: '123456',
    deptCode: '0',
    deptName: null,
    mobile: '18828285656',
    posts: [],
    roles: [
      {
        id: 1,
        name: '管理员',
        code: 'ROLE_ADMIN',
        parentId: 0
      }
    ]
  },
  {
    name: 'mock_2',
    userId: '2',
    username: 'test',
    password: '123456',
    deptCode: '0',
    deptName: null,
    mobile: '18828285656',
    posts: [],
    roles: [
      {
        id: 2,
        name: 'test',
        code: 'ROLE_TEST',
        parentId: 0
      }
    ]
  }
]

const createAuthData = () => ({
  access_token:
    'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aGlyZF9pZCI6bnVsbCwidXNlcl9pZCI6MywidXNlcl9uYW1lIjoienl5Iiwic2NvcGUiOlsicmVhZCJdLCJleHAiOjE2NDUwMDE1NDIsImF1dGhvcml0aWVzIjpbIlJPTEVfREVWIl0sImp0aSI6ImYwM2IwMGVmLWY5NjQtNGI3NS1hYWYyLTA4YjBmOWU2ZTA2ZiIsImNsaWVudF9pZCI6ImNsaWVudCJ9.LreFliWUtbBv_dHS428PDIFFKYDmLk7z5Qa4yMDDiOzihLqlNI9F5b13ZASMzgsIU06lWU2NS-Ob7NRNb2dVmPGwnr9AhFHmPc3yLI9i3LNyz_LxHD_I1uEbRpUwWtpPrAulvD-o-9IlFGX8bbwArgxkJ0VwNaYTZw7HYZ7bA-uTFzgobkGcyTNR2zbx9NHcav8BE-9KjlUY59V2xSsmJPkv3KnwR_gYhMvYOP5tPlvBTvUGe_dizRqRV19bRhgTKzxOChwhh192SJWyhfz0W8Sj9L734oIfR8rJVg7yoxr5fO-pKzg7Zg65764KTTPy_1TviVu_8NWAupbQGg4FoQ',
  expires_in: 3599,
  jti: 'f03b00ef-f964-4b75-aaf2-08b0f9e6e06f',
  refresh_token:
    'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aGlyZF9pZCI6bnVsbCwidXNlcl9pZCI6MywidXNlcl9uYW1lIjoienl5Iiwic2NvcGUiOlsicmVhZCJdLCJhdGkiOiJmMDNiMDBlZi1mOTY0LTRiNzUtYWFmMi0wOGIwZjllNmUwNmYiLCJleHAiOjE2NDUwODQzNDIsImF1dGhvcml0aWVzIjpbIlJPTEVfREVWIl0sImp0aSI6IjM2YTdkMTI2LWJmODUtNDM5Yi05M2E3LTQ2OTg2ODA0MWZmMCIsImNsaWVudF9pZCI6ImNsaWVudCJ9.vjmwxcORQnQLfbiIOcygJb1EbAYX62Deb0SAZhD6vtjUnYQWlJXFqdYcU6JztJqbIDZLWd-VkQGsUw_1pSawt2jyvxJl74iWH-5xeR0oadPtaRHmLbi1FbgbiWDRK9HN3UPo63wPcZLE69rus1WeKrtDzeeHB69xobFydssKyH-mkFesfnqwLmud_6-Kpjp1LkXiSJ8M_KiQGE19LiC4UDO-pcXTjIN_A8SGjETWLLcAs_hVk6fVwFiq4y11Jf0pEwbcgz84V_g-SYP-Y8exwWBe10b1k1gAHed5l4Ox42U3FE5FKVQSbp8-vLIMLHNit0BclanZcr8dryev0ZMyRw',
  scope: 'read',
  third_id: null,
  token_type: 'bearer',
  user_id: 3
})

export default [
  {
    url: '/oauth/token',
    method: 'post',
    response: ({ body }: any) => {
      // 参数将获取失败：待插件兼容 https://github.com/vbenjs/vite-plugin-mock/issues/57
      const { username, password } = body
      const checkUser = createFakeUserList().find(
        user => user.username === username && password === user.password
      )
      if (!checkUser) {
        return resultError('用户名或密码不正确！')
      }
      return createAuthData()
    }
  }
] as MockMethod[]
