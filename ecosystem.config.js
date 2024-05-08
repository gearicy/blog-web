module.exports = {
    apps: [
        {
            name: 'YYFBLOG',  // 设置启动项目名称
            port: '4000',
            exec_mode: 'cluster',
            instances: 'max',
            // 注意这里的相对路径
            script: './server/index.mjs'
        }
    ]
}
