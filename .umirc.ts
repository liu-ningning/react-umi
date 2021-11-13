import { defineConfig } from 'umi'
import routes from './src/routes'

const config = defineConfig({
  // 标题
  title: 'umi-react',
  // 路由
  routes,
  // 配置是否让生成的文件包含 hash 后缀，通常用于增量发布和避免浏览器加载缓存。
  hash: true,
  // 配置 <head> 里的额外脚本，数组项为字符串或对象。
  // headScripts: [`alert(1);`, `https://a.com/b.js`],
  // 是否启用按需加载，即是否把构建产物进行拆分，在需要的时候下载额外的 JS 再执行。
  dynamicImport: {},
  // 配置需要兼容的浏览器最低版本
  targets: {
    ie: 11,
  },
  // 配置额外的 meta 标签
  metas: [
    {
      name: 'keywords',
      content: 'umi, umijs',
    },
    {
      name: 'description',
      content: '🍙 插件化的企业级前端应用框架。',
    },
  ],
  // 配置额外的 link 标签。
  links: [
    {
      rel: "shortcut icon",
      type: "image/x-icon",
      href: "https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg"
    }
  ],
  // 主题
  theme: {},
  // 忽略 moment 的 locale 文件，用于减少尺寸
  ignoreMomentLocale: true,
  // 配置是否需要生成额外用于描述产物的 manifest 文件，默认会生成 asset-manifest.json
  manifest: {
    basePath: '/',
  },
  // 配置额外的 babel 插件。
  extraBabelPlugins: [
    ['react-css-modules',
      {
        exclude: 'node_modules',
        generateScopedName: '[name]__[local]___[hash:base64:5]',
        filetypes: {
          '.less': {
            syntax: 'postcss-less',
          },
        },
      },
    ],
  ],
})

export default config