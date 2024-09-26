<div align="center">
  <h1>xiaohe-tsconfig</h1>
  <span>🤞 basic tsconfig for xiaohe</span>
</div>

<br>

[![github stars][github-stars-src]][github-stars-href]
[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![License][license-src]][license-href]

Xiaohe / [github@xiaohe0601](https://github.com/xiaohe0601) / [gitee@xiaohe0601](https://gitee.com/xiaohe0601)

### 🚁 Installation

#### PNPM

``` shell
pnpm add -D @xiaohe01/tsconfig
```

#### YARN

``` shell
yarn add --dev @xiaohe01/tsconfig
```

#### NPM

``` shell
npm install -D @xiaohe01/tsconfig
```

### 🛹 Usage

#### Basic Usage

```json5
// tsconfig.json

{
  "extends": "@xiaohe01/tsconfig",
  // or
  // "extends": "@xiaohe01/tsconfig/app",
  // "extends": "@xiaohe01/tsconfig/tsconfig.app.json",
  "compilerOptions": {
    // ...
  }
}
```

#### List

- [@xiaohe01/tsconfig/basic](./packages/core/tsconfig.basic.json)：tsconfig.basic.json

- [@xiaohe01/tsconfig/app](./packages/core/tsconfig.app.json) `default`：tsconfig.app.json

- [@xiaohe01/tsconfig/app-vue](./packages/core/tsconfig.app-vue.json)：tsconfig.app-vue.json

- [@xiaohe01/tsconfig/lib](./packages/core/tsconfig.lib.json)：tsconfig.lib.json

- [@xiaohe01/tsconfig/lib-dom](./packages/core/tsconfig.lib-dom.json)：tsconfig.lib-dom.json

### 🐶 Discussion & Communication

- ❓：For questions or bug feedback, you can submit an [issues](https://github.com/xiaohe0601/xiaohe-tsconfig/issues)
  and PRs are welcome~
- 📫：[xiaohe0601@outlook.com](mailto:xiaohe0601@outlook.com)
- 🐧：Not yet available

### 🏆 License

- MIT [LICENSE](./LICENSE)

<!-- Badges -->

[github-stars-src]: https://img.shields.io/github/stars/xiaohe0601/xiaohe-tsconfig?style=flat&colorA=080f12&colorB=1fa669&logo=GitHub

[github-stars-href]: https://github.com/xiaohe0601/xiaohe-tsconfig

[npm-version-src]: https://img.shields.io/npm/v/@xiaohe01/tsconfig?style=flat&colorA=080f12&colorB=1fa669

[npm-version-href]: https://npmjs.com/package/@xiaohe01/tsconfig

[npm-downloads-src]: https://img.shields.io/npm/dm/@xiaohe01/tsconfig?style=flat&colorA=080f12&colorB=1fa669

[npm-downloads-href]: https://npmjs.com/package/@xiaohe01/tsconfig

[bundle-src]: https://img.shields.io/bundlephobia/minzip/@xiaohe01/tsconfig?style=flat&colorA=080f12&colorB=1fa669&label=minzip

[bundle-href]: https://bundlephobia.com/result?p=@xiaohe01/tsconfig

[license-src]: https://img.shields.io/github/license/xiaohe0601/xiaohe-tsconfig.svg?style=flat&colorA=080f12&colorB=1fa669

[license-href]: https://github.com/xiaohe0601/xiaohe-tsconfig/blob/main/LICENSE