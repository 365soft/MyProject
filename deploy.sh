#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
#npm install && export NODE_OPTIONS=--max_old_space_size=4096 &&npm run build
yarn add -D vuepress && export NODE_OPTIONS=--max_old_space_size=4096 &&yarn build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果发布到自定义域名，请使用，不填则使用 GitHub 自带的 <username>.github.io
#echo 'softhub.cc' > CNAME

# 如果手运行该脚本，则执行 if 里的，如果是 GitHub 自动执行该脚本，则是 else 里的
if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:365soft/softhub.git
else
  msg='来自 Github actions 的自动部署'
  githubUrl=https://365soft:${GITHUB_TOKEN}@github.com/365soft/softhub.git
  #githubUrl=https://github.com/365soft/softhub.git
  git config --global user.name "365soft"
  git config --global user.email "flyyhui@qq.com"
fi
git init
# git remote add origin https://github.com/365soft/softhub
# git config user.name "365soft"
# git config user.email "flyyhui@qq.com"
# git checkout -b master
git add -A
git commit -m "${msg}"
git push -f $githubUrl main:master # 推送到 Github gh-pages 分支

# deploy to coding pages
# echo 'softhub.cc' > CNAME  # 自定义域名
# echo 'google.com, pub-7828333725993554, DIRECT, f08c47fec0942fa0' > ads.txt # 谷歌广告相关文件

# if [ -z "$CODING_TOKEN" ]; then  # -z 字符串 长度为0则为true；$CODING_TOKEN来自于github仓库`Settings/Secrets`设置的私密环境变量
#   codingUrl=git@e.coding.net:xgy/xgy.git
# else
#   codingUrl=https://HmuzsGrGQX:${CODING_TOKEN}@e.coding.net/xgy/xgy.git
# fi
# git add -A
# git commit -m "${msg}"
# git push -f $codingUrl master # 推送到coding

# 退回开始所在目录
cd - 
# 删除打包项目
rm -rf docs/.vuepress/dist
