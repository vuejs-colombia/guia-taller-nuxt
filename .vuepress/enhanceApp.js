export default ({
  Vue,
  options,
  router,
  siteData,
  isServer
}) => {
  router.beforeEach((to, from, next) => {
    if (to.path === '/desafios/') {
      next({ path: '/desafios/primer-desafio/' })
    }
    next()
  })
}