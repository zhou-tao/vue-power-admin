export const PageNotFoundRoute = {
  path: '/:path(.*)*',
  name: 'PageNotFound',
  component: () => import('@/views/error/PageNotFound.vue'),
  hidden: true,
  meta: {
    title: 'menu.error.notFound',
    requiresAuth: false
  }
}
