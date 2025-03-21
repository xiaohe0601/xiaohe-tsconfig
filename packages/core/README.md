<div align="center">
  <h1>xiaohe-tsconfig</h1>
  <span>🤞 basic tsconfig for xiaohe</span>
</div>

<br>

[![github stars][github-stars-src]][github-stars-href]
[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

xiaohe0601 / [github@xiaohe0601](https://github.com/xiaohe0601) / [gitee@xiaohe0601](https://gitee.com/xiaohe0601)

### 🚁 Installation

```shell
# pnpm
pnpm add -D @xiaohe01/tsconfig

# yarn
yarn add --dev @xiaohe01/tsconfig

# npm
npm install -D @xiaohe01/tsconfig
```

### 🛹 Usage

#### Basic Usage

```json5
// tsconfig.json

{
  "extends": "@xiaohe01/tsconfig/tsconfig.app.json",
  "compilerOptions": {
    // ...
  }
}
```

#### List

- [@xiaohe01/tsconfig/tsconfig.basic.json](./packages/core/tsconfig.basic.json)
- [@xiaohe01/tsconfig/tsconfig.app.json](./packages/core/tsconfig.app.json)
- [@xiaohe01/tsconfig/tsconfig.app-vue.json](./packages/core/tsconfig.app-vue.json)
- [@xiaohe01/tsconfig/tsconfig.lib.json](./packages/core/tsconfig.lib.json)
- [@xiaohe01/tsconfig/tsconfig.lib-dom.json](./packages/core/tsconfig.lib-dom.json)

### 🏆 License

- MIT [LICENSE](./LICENSE)

[github-stars-src]: https://img.shields.io/github/stars/xiaohe0601/xiaohe-tsconfig?style=flat&colorA=080f12&colorB=1fa669&logo=GitHub
[github-stars-href]: https://github.com/xiaohe0601/xiaohe-tsconfig
[npm-version-src]: https://img.shields.io/npm/v/@xiaohe01/tsconfig?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@xiaohe01/tsconfig
[npm-downloads-src]: https://img.shields.io/npm/dm/@xiaohe01/tsconfig?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@xiaohe01/tsconfig
[license-src]: https://img.shields.io/github/license/xiaohe0601/xiaohe-tsconfig.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/xiaohe0601/xiaohe-tsconfig/blob/main/LICENSE