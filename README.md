# react-zoom-pan-pinch

[![NPM](https://img.shields.io/npm/v/react-zoom-pan-pinch.svg)](https://www.npmjs.com/package/react-zoom-pan-pinch)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-zoom-pan-pinch)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Package Quality](https://npm.packagequality.com/shield/react-zoom-pan-pinch.svg)](https://packagequality.com/#?package=react-zoom-pan-pinch)
![NPM](https://img.shields.io/npm/l/react-zoom-pan-pinch)
![npm](https://img.shields.io/npm/dm/react-zoom-pan-pinch)
![GitHub stars](https://img.shields.io/github/stars/prc5/react-zoom-pan-pinch?style=social)

> Super fast and light react npm package for zooming, panning and pinching html
> elements in easy way

## Features

- :rocket: Fast and easy to use
- :factory: Light, without external dependencies
- :gem: Mobile gestures, touchpad gestures and desktop mouse events support
- :gift: Powerful context usage, which gives you a lot of freedom
- :wrench: Highly customizable
- :crown: Animations and many options

## DEMO

[DEMO EXAMPLE](https://prc5.github.io/react-zoom-pan-pinch/)

## Install

```bash
npm install --save react-zoom-pan-pinch
```

or

```bash
yarn add react-zoom-pan-pinch
```

## Usage

```jsx
import React, { Component } from "react";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

class Example extends Component {
  render() {
    return (
      <TransformWrapper>
        <TransformComponent>
          <img src="image.jpg" alt="test" />
        </TransformComponent>
      </TransformWrapper>
    );
  }
}
```

or

```jsx
import React, { Component } from "react";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

class Example extends Component {
  render() {
    return (
      <TransformWrapper
        defaultScale={1}
        defaultPositionX={200}
        defaultPositionY={100}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <React.Fragment>
            <div className="tools">
              <button onClick={zoomIn}>+</button>
              <button onClick={zoomOut}>-</button>
              <button onClick={resetTransform}>x</button>
            </div>
            <TransformComponent>
              <img src="image.jpg" alt="test" />
              <div>Some text</div>
            </TransformComponent>
          </React.Fragment>
        )}
      </TransformWrapper>
    );
  }
}
```

## Props of TransformWrapper

| Props            | Default |     Type |
| :--------------- | :-----: | -------: |
| previousScale    |    1    |   number |
| scale            |    1    |   number |
| positionX        |  auto   |   number |
| positionY        |  auto   |   number |
| defaultPositionX |  null   |   number |
| defaultPositionY |  null   |   number |
| defaultScale     |  null   |   number |
| options          |  {...}  |   object |
| wheel            |  {...}  |   object |
| pan              |  {...}  |   object |
| pinch            |  {...}  |   object |
| zoomIn           |  {...}  |   object |
| zoomOut          |  {...}  |   object |
| doubleClick      |  {...}  |   object |
| reset            |  {...}  |   object |
| onWheelStart     |  null   | Function |
| onWheel          |  null   | Function |
| onWheelStop      |  null   | Function |
| onPanningStart   |  null   | Function |
| onPanning        |  null   | Function |
| onPanningStop    |  null   | Function |
| onPinchingStart  |  null   | Function |
| onPinching       |  null   | Function |
| onPinchingStop   |  null   | Function |
| onZoomChange     |  null   | Function |
| enablePadding    |  true   |  Boolean |
| enablePanPadding |  true   |  Boolean |

#### Options prop elements

| Props            | Default |         Type |
| :--------------- | :-----: | -----------: |
| disabled         |  false  |      boolean |
| transformEnabled |  true   |      boolean |
| minPositionX     |  null   | null, number |
| maxPositionX     |  null   | null, number |
| minPositionY     |  null   | null, number |
| maxPositionY     |  null   | null, number |
| minScale         |    1    |       number |
| maxScale         |    8    |       number |
| limitToBounds    |  true   |      boolean |
| centerContent    |  true   |      boolean |

#### scalePadding prop elements

| Props         | Default |    Type |
| :------------ | :-----: | ------: |
| disabled      |  false  | boolean |
| size          |  0.45   |  number |
| animationTime |   200   |  number |
| animationType | easeOut |  string |

#### Wheel prop elements

| Props                | Default |    Type |
| :------------------- | :-----: | ------: |
| disabled             |  false  | boolean |
| step                 |   6.5   |  number |
| wheelEnabled         |  true   | boolean |
| touchPadEnabled      |  true   | boolean |
| disableLimitsOnWheel |  true   | boolean |

#### Pan prop elements

| Props                | Default |    Type |
| :------------------- | :-----: | ------: |
| disabled             |  false  | boolean |
| lockAxisX            |  false  | boolean |
| lockAxisY            |  false  | boolean |
| velocity             |  false  | boolean |
| velocityEqualToMove  |  false  | boolean |
| velocitySensitivity  |    1    |  number |
| velocityActiveScale  |    1    |  number |
| velocityMinSpeed     |   1.8   |  number |
| velocityBaseTime     |  1800   |  number |
| limitToWrapperBounds |  false  | boolean |
| padding              |  true   | boolean |
| paddingSize          |    6    |  number |
| animationTime        |   200   |  number |
| animationType        | easeOut |  string |

#### Pinch prop elements

| Props    | Default |    Type |
| :------- | :-----: | ------: |
| disabled |  false  | boolean |
| step     |    1    |  number |

#### zoomIn prop elements

| Props         | Default |    Type |
| :------------ | :-----: | ------: |
| disabled      |  false  | boolean |
| step          |   40    |  number |
| animation     |  true   | boolean |
| animationTime |   200   |  number |
| animationType | easeOut |  string |

#### zoomOut prop elements

| Props         | Default |    Type |
| :------------ | :-----: | ------: |
| disabled      |  false  | boolean |
| step          |   40    |  number |
| animation     |  true   | boolean |
| animationTime |   200   |  number |
| animationType | easeOut |  string |

#### doubleClick prop elements

| Props         | Default |    Type |
| :------------ | :-----: | ------: |
| disabled      |  false  | boolean |
| step          |   40    |  number |
| animation     |  true   | boolean |
| animationTime |   200   |  number |
| animationType | easeOut |  string |

#### reset prop elements

| Props         | Default |    Type |
| :------------ | :-----: | ------: |
| disabled      |  false  | boolean |
| step          |   40    |  number |
| animation     |  true   | boolean |
| animationTime |   200   |  number |
| animationType | easeOut |  string |

#### Animations types

| Value          |
| :------------- |
| easeOut        |
| linear         |
| easeInQuad     |
| easeOutQuad    |
| easeInOutQuad  |
| easeInCubic    |
| easeOutCubic   |
| easeInOutCubic |
| easeInQuart    |
| easeOutQuart   |
| easeInOutQuart |
| easeInQuint    |
| easeOutQuint   |
| easeInOutQuint |

## Values returned from TransformWrapper component

| Value                                     | Description                                    |      Type      |
| :---------------------------------------- | :--------------------------------------------- | :------------: |
| setScale(scale)                           | Sets scale                                     |     Number     |
| setPositionX(positionX)                   | Sets position x                                |     Number     |
| setPositionY(positionY)                   | Sets position y                                |     Number     |
| zoomIn()                                  | Zooming in function, used for controls button  |      ---       |
| zoomOut()                                 | Zooming out function, used for controls button |      ---       |
| setTransform(positionX, positionY, scale) | Sets transformations of content                | Number or null |
| resetTransform()                          | Reset transformations to the initial values    |     Number     |
| dbClickMode                               | Available modes: "zoomIn", "zoomOut", "reset"  |     String     |

## License

MIT © [prc5](https://github.com/prc5)

## Contributors ✨

Thanks goes to these wonderful people
([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://maciejpyrc.pl"><img src="https://avatars3.githubusercontent.com/u/20928302?v=4" width="80px;" alt="Maciej Pyrc"/><br /><sub><b>Maciej Pyrc</b></sub></a><br /><a href="#review-prc5" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/prc5/react-zoom-pan-pinch/commits?author=prc5" title="Code">💻</a> <a href="#infra-prc5" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-prc5" title="Maintenance">🚧</a> <a href="#example-prc5" title="Examples">💡</a> <a href="#question-prc5" title="Answering Questions">💬</a></td>
    <td align="center"><a href="https://github.com/shaneeza"><img src="https://avatars2.githubusercontent.com/u/5740159?v=4" width="80px;" alt="Shaneeza"/><br /><sub><b>Shaneeza</b></sub></a><br /><a href="https://github.com/prc5/react-zoom-pan-pinch/issues?q=author%3Ashaneeza" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/gabrielfmp"><img src="https://avatars2.githubusercontent.com/u/36622624?v=4" width="80px;" alt="gabrielfmp"/><br /><sub><b>gabrielfmp</b></sub></a><br /><a href="https://github.com/prc5/react-zoom-pan-pinch/commits?author=gabrielfmp" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/pablovegau"><img src="https://avatars1.githubusercontent.com/u/20138953?v=4" width="80px;" alt="Pablo Vega Uceta"/><br /><sub><b>Pablo Vega Uceta</b></sub></a><br /><a href="https://github.com/prc5/react-zoom-pan-pinch/commits?author=pablovegau" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the
[all-contributors](https://github.com/all-contributors/all-contributors)
specification. Contributions of any kind welcome!
