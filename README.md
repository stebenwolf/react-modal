# react-modal

> &quot;Stebenwolf&#x27;s React Modal package [OC P14]&quot;

[![NPM](https://img.shields.io/npm/v/react-modal.svg)](https://www.npmjs.com/package/react-modal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @stebenwolf/react-modal
```

NB: you might need to force the installation with 
```bash 
npm install @stebenwolf/react-modal --force
```

## Usage

This package is quite straightforward: once you launch it, it displays a modal.
The modal is made of 3 elements:
- a background
- the modal itself
- a close button

Each element has its own default style but you can completely customize and overwrite the style of each element via the following optional props:
- customBackStyle: customize the background (default: dark semi-transparent background that covers the page behind the modal)
- customModalStyle: customize the modal (default: a white rectangle)
- customCloseStyle: customize the close button (default: a classic "x" positionned at the top right)

Inside the modal you can put any content you wish, via the `content` props.


```jsx
import React from 'react'

import MyComponent from '@stebenwolf/react-modal'

export default function Example {
  return (
     <MyComponent 
        content={<AnythingYouWant />} 
        customBackStyle={{}} 
        customModalStyle={{}} 
        customCloseStyle={{}}
      />
  )
}
```

## License

MIT © [stebenwolf](https://github.com/stebenwolf)
