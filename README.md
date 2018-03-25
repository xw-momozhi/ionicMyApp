# ionicMyApp

使用ionic3 及 angular5.3 写的一个模板页

首页tabs 切换  左边menu滑动 菜单页

app/animations                  写动画模块

   /component/guards.page.ts    页面基类 封装有登陆验证(当进入页面时检测)  登录为弹框显示
   
   /services                    一些工具(auth登录使用、ipCookie 封装过) 以后会添加更多
   
assets                          图片文件夹

theme                           样式文件夹

pages/                          所有页面

     /login                     登陆页面
	 
     /navPage                   首页 tabs 切换页面
	 
	 /userPage                  用户信息页面
	 
	          /userMessage      消息查看页面(无)
			  