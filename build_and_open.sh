#!/bin/bash
# 一键构建并打开静态文件的脚本

set -e  # 遇到错误立即退出

echo "==> 设置 Ruby 环境"
export PATH="$(brew --prefix ruby)/bin:$PATH"

echo "==> 检查并安装兼容依赖"
if ! grep -q "gem 'csv'" Gemfile; then
    echo "gem 'csv'" >> Gemfile
    echo "gem 'logger'" >> Gemfile
    echo "gem 'base64'" >> Gemfile
    echo "gem 'bigdecimal'" >> Gemfile
fi

echo "==> 安装依赖"
bundle config set path 'vendor/bundle'
bundle install

echo "==> 创建兼容文件"
cat > compat_tainted.rb << 'EOF'
# Ruby 3.4+ 兼容补丁
class Object
  unless method_defined?(:tainted?)
    def tainted?
      false
    end
  end
end
EOF

echo "==> 构建站点"
RUBYOPT="-r./compat_tainted" bundle exec jekyll build

echo "==> 用浏览器打开"
open _site/index.html

echo "==> 完成！"

