module.exports = app =>{
  const {router,controller} = app
  router.get('/admin/index' ,controller.admin.home.index)
  router.post('/admin/checkLogin',controller.admin.home.checkLogin) // login 方法
  router.get('/admin/getTypeInfo' ,controller.admin.home.getTypeInfo)
  router.post('/admin/addArticle',controller.admin.home.addArticle)
  router.post('/admin/updateArticle',controller.admin.home.updateArticle)
  router.get('/admin/getArticleList',controller.admin.home.getArticleList)
  router.get('/admin/delArticle/:id', controller.admin.home.delArticle)
  router.get('/admin/getArticleById/:id',controller.admin.home.getArticleById)
}