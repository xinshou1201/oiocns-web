# oiocns-web

奥集能平台前端

## git commit 规范

<类型>[可选的作用域]: <描述>

主要type

feat: 增加新功能
add: 增加新文件
fix: 修复 bug

特殊 type

docs: 只改动了文档相关的内容
style: 不影响代码含义的改动，例如去掉空格、改变缩进、增删分号
build: 构造工具的或者外部依赖的改动，例如vite, webpack, npm
refactor: 代码重构时使用
revert: 执行 git revert 打印的 message

其他 type

test: 添加测试或者修改现有测试
perf: 提高性能的改动
ci: 与 CI（持续集成服务）有关的改动
chore: 不修改 src 或者 test 的其余修改，例如构建过程或辅助工具的变动
other: 其他修改

### 名称规范

pages 所有页面组件 需大写字母开头

#### 项目目录
├── .husky                              // husky git hooks配置目录
    ├── _                               // husky 脚本生成的目录文件
    ├── commit-msg                      // commit-msg钩子，用于验证 message格式
    ├── pre-commit                      // pre-commit钩子，主要是和eslint配合
├── config                              // 全局配置文件
    ├── vite                            // vite 相关配置
    ├── constant.ts                     // 项目配置
    ├── themeConfig.ts                  // 主题配置
├── dist                                // 默认的 build 输出目录
├── mock                                // 前端数据mock
├── public                              // vite项目下的静态目录
└── src                                 // 源码目录
    ├── assets                          // 公共的文件（如image、css、font等）
    ├── components                      // 项目组件
    ├── enums                           // 自定义 常量（枚举写法）
    ├── hooks                           // 自定义 hooks
    ├── layout                          // 全局布局
    ├── router                          // 路由
    ├── store                           // 状态管理器
    ├── utils                           // 工具库
    ├── pages                           // 页面模块目录
        ├── Home                       // Home页面模块
        ├── ...
    ├── app.tsx                         // 顶层文件
    ├── index.tsx                         // 项目入口文件
    ├── typings                           // 项目type类型定义文件夹
├── .editorconfig                       // IDE格式规范
├── .env                                // 环境变量
├── .eslintignore                       // eslint忽略
├── .eslintrc                           // eslint配置文件
├── .gitignore                          // git忽略
├── .npmrc                              // npm配置文件
├── .prettierignore                     // prettierc忽略
├── .prettierrc                         // prettierc配置文件
├── commitlint.config                   // git提交配置文件
├── index.html                          // 入口文件
├── LICENSE.md                          // LICENSE
├── package.json                        // package
├── postcss.config.js                   // postcss
├── README.md                           // README
├── tsconfig.json                       // typescript配置文件
└── vite.config.ts                      // vite
