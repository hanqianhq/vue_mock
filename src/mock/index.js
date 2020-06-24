import Mock from 'mockjs'

// 定义get请求
Mock.mock('/api/news', 'get', {
  status: 200,
  msg: '获取数据成功'
})

// 定义拦截post请求
Mock.mock('/api/news', 'post', {
  status: 200,
  msg: '修改数据成功'
})

const { newsList } = Mock.mock({
  'newsList|30-50': [
    {
      id: '@increment',
      title: '@ctitle()',
      content: '@cparagraph(5,15)',
      img_url: '@image("100x100","#ff8cfa","#ccc","png","牛逼")',
      add_time: '@date(yyyy-MM-dd)'
    }
  ]
})

Mock.mock('/api/get/news', 'get', () => {
  return {
    status: 200,
    message: '为了部落',
    list: newsList,
    total: newsList.length
  }
})

// console.log(data)
