# oiocns-web

奥集能平台前端

## 前往 product/rules 查看编码规则

## (TODO) git 提交跳过检查 --no-verify

### 项目目录
```
├── .husky // husky git hooks 配置目录
├── \_ // husky 脚本生成的目录文件
├── commit-msg // commit-msg 钩子，用于验证 message 格式
├── pre-commit // pre-commit 钩子，主要是和 eslint 配合
├── config // 全局配置文件
├── vite // vite 相关配置
├── constant.ts // 项目配置
├── themeConfig.ts // 主题配置
├── dist // 默认的 build 输出目录
├── mock // 前端数据 mock
├── public // vite 项目下的静态目录
└── src // 源码目录
├── assets // 公共的文件（如 image、css、font 等）
├── components // 项目组件
├── enums // 自定义 常量（枚举写法）
├── hooks // 自定义 hooks
├── layouts // 全局布局
├── routes // 路由
├── store // 状态管理器
├── utils // 工具库
├── pages // 页面模块目录
├── Home // Home 页面模块
├── ...
├── app.tsx // 顶层文件
├── index.tsx // 项目入口文件
├── typings // 项目 type 类型定义文件夹
├── .editorconfig // IDE 格式规范
├── .env // 环境变量
├── .eslintignore // eslint 忽略
├── .eslintrc // eslint 配置文件
├── .gitignore // git 忽略
├── .npmrc // npm 配置文件
├── .prettierignore // prettierc 忽略
├── .prettierrc // prettierc 配置文件
├── commitlint.config // git 提交配置文件
├── index.html // 入口文件
├── LICENSE.md // LICENSE
├── package.json // package
├── postcss.config.js // postcss
├── README.md // README
├── tsconfig.json // typescript 配置文件
└── vite.config.ts // vite
```
