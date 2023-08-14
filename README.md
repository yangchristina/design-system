
<p align="left">
  <a href="https://www.npmjs.com/package/@planda/design-system"><img src="https://img.shields.io/npm/v/@planda/design-system" alt="Stable Release" /></a>
  <a href="./LICENSE"><img allt="MIT License" src="https://badgen.now.sh/badge/license/MIT"/></a>
</p>

Built off of [radix-ui/design-system](https://github.com/radix-ui/design-system)

Built with [Stitches](https://github.com/stitchesjs/stitches) and [Radix UI Primitives](https://radix-ui.com/primitives/docs/overview/introduction).

```sh
npm install --save @planda/design-system
npm install --save next-transpile-modules
```

```js
// next.config.js
const withTM = require('next-transpile-modules')(['@planda/design-system'])
// ...
module.exports = withTM(nextConfig)
```

Bugs log
- unexpected token: tsconfig-> "jsx": "react", (preserve caused error)