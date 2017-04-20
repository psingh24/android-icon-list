# android-icon-list [![Build Status](https://travis-ci.org/SamVerschueren/android-icon-list.svg?branch=master)](https://travis-ci.org/SamVerschueren/android-icon-list)

> List of the [Android launcher icons](https://developer.android.com/guide/practices/ui_guidelines/icon_design_launcher.html#size)


## Install

```
$ npm install --save android-icon-list
```


## Usage

```js
const androidIconList = require('android-icon-list');

androidIconList();
//=> [{file: 'mipmap-ldpi/icon.png', density: 'ldpi', size: 36}, ...]

androidIconList('xhdpi');
//=> {file: 'mipmap-xhdpi/icon.png', density: 'xhdpi', size: 96}
```


## API

### androidIconList([density])

#### density

Type: `string`

Density of the icon you want to retrieve.


## Related

- [ios-icon-list](https://github.com/SamVerschueren/ios-icon-list) - List of the iOS app icons
- [bb10-icon-list](https://github.com/SamVerschueren/bb10-icon-list) - List of the BlackBerry 10 app icons


## License

MIT © [Sam Verschueren](https://github.com/SamVerschueren)
