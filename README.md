# **isInViewport()**

> Small script to check element is on the viewport.

# **USAGE**

Install package by npm

```npm
npm i @roghz/isinviewport
```

Install package by yarn

```yarn
yarn add @roghz/isinviewport
```

### Usage Example

```javascript
import { isInViewport } from '@roghz/isinviewport';

const section = document.querySelectorAll('section');
section.forEach(item => {
    if (isInViewport(item)) {
        console.log(item);
    }
});
```

# **LICENSE**

[MIT](https://en.wikipedia.org/wiki/MIT_License) License