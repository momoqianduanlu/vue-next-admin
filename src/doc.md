1. 使用eslint做代码格式化检查
   安装eslint: npm install eslint --save-dev
   eslint初始化: npx eslint --init (会进行一系列的询问，安装eslint相关的package，会生成eslintrc.js文件)
   执行 "npm run lint" 脚本进行代码eslint检查

2. 使用lint-staged进行代码提交规范eslint检查
   npx mrm@2 lint-staged (lint-staged会对git缓存在暂存区里面的代码进行lint验证)
   "lint-staged": {
    "*.{js,jsx,vue,ts,tsx}": [
      "npm run lint",
      "git add"
    ]
   }
  每次在"git commit" 时都会对代码进行eslint检查

3. 在开发和构建过程中进行eslint检查
   安装 vite-plugin-eslint (https://github.com/gxmari007/vite-plugin-eslint)
   通过该插件与vite进行融合，在开发过程中对代码进行eslint检查

4. 使用commitlint规范commit信息，在代码提交进行eslint后，使用commitlint对commit信息进行验证
   安装commitlint npm install --save-dev @commitlint/{config-conventional,cli} (https://github.com/conventional-changelog/commitlint#getting-started)
   安装husky
   创建commit-msg文件 npx husky add .husky/commit-msg ''
   修改commit-msg文件 npx --no -- commitlint --edit "\${1}"
