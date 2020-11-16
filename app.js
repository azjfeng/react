const Koa = require('koa');
const app = new Koa();
const views = require('koa-views')
const Router = require('koa-router')
const router = new Router();
const static = require('koa-static')
const path = require('path')
app.use(views(__dirname+'/public/dev',{
    // map:{html:html}
}))
app.use(static(
    path.join(__dirname,"/public/dev")
))
router.get('/',async(ctx,next)=>{
  await  ctx.render('index')
})

app.use(router.routes()).use(router.allowedMethods())

app.listen('3000',()=>{
    console.log('http://127.0.0.1:3000')
})