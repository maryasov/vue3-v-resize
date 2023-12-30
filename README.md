# vue3-v-resize

[![version](https://img.shields.io/npm/v/vue3-v-resize?style=flat-square)](https://www.npmjs.com/package/vue3-v-resize)
[![download](https://img.shields.io/npm/dm/vue3-v-resize?style=flat-square)](https://www.npmjs.com/package/vue3-v-resize)
[![languages](https://img.shields.io/github/languages/top/maryasov/vue3-v-resize?style=flat-square)](https://github.com/maryasov/vue3-v-resize)
[![license](https://img.shields.io/npm/l/vue3-v-resize?style=flat-square)](https://github.com/maryasov/vue3-v-resize)
![vue@3.x](https://img.shields.io/badge/Vue-3.x-brightgreen?style=flat-square)


Resize observer for Vue.  
Detect size changes of DOM elements. Support Vue's directive and component.

> Forked from [Meqn/v-resize-observer](https://github.com/Meqn/v-resize-observer)

- [Vue3 Live](https://stackblitz.com/edit/vite-vue3-resize-demo?file=src%2FApp.vue)


## Feature
- 🕰 Based on `ResizeObservable API` implementation
- 🎁 Support `vue3`
- 💊 Support the use of directives or components
- 🧲 Optimize the frequency of triggering resize events
- 🛠 Support browsers: Edge/Chrome/Safari/Firefox



## Install

**npm**
```
npm install vue3-v-resize
```

## Usage

- [Vue3.x Example](https://github.com/Meqn/v-resize-observer/tree/main/examples/vue3)

```html
<template>
  <div id="app">
    <!-- directives -->
    <div v-resize:50.immediate="onResize">
      Listened to elements
    </div>
    
    <!-- Components -->
    <ResizeComponent @resize="onResize" :delay="100" :disabled="disabled">
      <div>Listened to elements</div>
    </ResizeComponent>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ResizeComponent, resizeDirective as vResize } from 'vue3-v-resize'

const disabled = ref(false)

function onResize({ width, height }, target) {
  console.log(target, width, height)
}
</script>
```

### 1. Global Configuration
```js
// main.js
import Resizer from 'vue3-v-resize'

// vue@3.x
const app = createApp(App)
app.use(Resizer, {
  // Custom command names and component names
  directive: 'resize',
  component: 'ResizeComponent'
})

```

### 2. On demand
```html
<script setup>
import { ref } from 'vue'
import {
  ResizeComponent,
  resizeDirective as vResizeObserver //You can change the directive name, the default: `v-resize, 
} from 'vue3-v-resize'

// OR
// import Resizer from 'v-resize-observer'
// const ResizeComponent = Resizer.component
// const vResize = Resizer.directive

function onResize({ width, height }, target) {
  console.log(target, width, height)
}
</script>

<template>
  <div id="app">
    <!-- directives -->
    <div v-resize-observer:100="onResize">
      Listened to elements
    </div>
    
    <!-- Components -->
    <ResizeComponent @resize="onResize">
      <div>Listened to elements</div>
    </ResizeComponent>
  </div>
</template>
```
立即执行一次callback

## API
| Parameter  | Type                    | Default | Description                                             |
| ---------- | ----------------------- | ------- | ------------------------------------------------------- |
| `target`   | `string`, `HTMLElement` | -       | Target elements to listen to                            |
| `delay`    | `number`                | `150`   | Delayed execution time                                  |
| `immediate` | `boolean`               | `false` | executed immediately                                       |
| `disabled` | `boolean`               | `false` | disable listening                                       |
| `resize`   | `function`              | -       | Callback function to listen for changes in element size |


`resize(data, target)`
- `data` : elements size `{ width, height }`
- `target` : Listening elements


## use `directive`

> The directive default name is `v-resize`, if you want to change it, you can specify it when you import it.


```html
<div v-resize="onResize" />

<div v-resize:100="onResize" />
<div v-resize:100.immediate="onResize" />
<!-- No limit on trigger frequency -->
<div v-resize:0="onResize" />
```
**Parameter：**
- `arg`: => `delay`
- `value`: => `resize`
- `modifiers.immediate`


## use `Component`
```html
<ResizeComponent target="#app" :delay="0" disabled="false" @resize="onResize">
  <div>Listened to elements</div>
</ResizeComponent>
```
### props
- `target`: The target element to listen to, the default current element.
- `delay`: Delay execution time, default: `150`.
- `immediate`: Execute immediately, default: `false`.
- `disabled`: disable listening, default: `false`.

### events
- `resize`: Triggered when listening for element size changes.

