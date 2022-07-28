export const PageNotFoundRoute = {
  path: '/:path(.*)*',
  name: 'PageNotFound',
  component: () => import('@/views/error/PageNotFound.vue'),
  hidden: true,
  meta: {
    title: '404 - Page Not Found',
    requiresAuth: false
  }
}
