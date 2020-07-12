# react-widget-spinner


## 安装

```
npm install --save react-widget-spinner
```

## 使用

[![Edit react-widget-spinner](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/white-fog-smdx6?fontsize=14&hidenavigation=1&theme=dark)

```js
import Spinner from 'react-widget-spinner';
import 'react-widget-spinner/style';

<Spinner />;

```

### Interfaces

```ts
declare const sizeMap: {
    small: number;
    default: number;
    medium: number;
    large: number;
};
export interface SpinnerProps extends React.HTMLAttributes<any> {
    /** 样式前缀 */
    prefixCls?: string;
    /** 组件大小 */
    size?: keyof typeof sizeMap | number;
    /** TODO: 延迟显示加载效果的时间 ms */
    delay?: number;
    /** 圈圈周长：0-1 */
    value?: number;
    /** 风格，默认：primary */
    type?: "none" | "primary" | "success" | "warning" | "danger";
    /** 边框大小 */
    strokeWidth?: number;
    /** 是否为加载中状态 */
    spinning?: boolean;
    tagName?: React.ElementType;
}
export declare const Spinner: React.FC<SpinnerProps>;
export default Spinner;

```

### defaultProps

```js
{
	prefixCls: "rw-spinner",
	size: "default",
	type: "primary",
	spinning: true,
	tagName: "div",
	value: 0.25,
}
```

### 基础样式

```css
@keyframes rw-spinner-animation {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.rw-spinner {
    display: none;
    align-items: center;
    justify-content: center;

    overflow: visible;
    vertical-align: middle;

    transition: color 500ms linear;
}

.rw-spinner-spinning {
    display: inline-flex;
}

.rw-spinner-primary {
    color: #1890ff;
}
.rw-spinner-success {
    color: #52c41a;
}
.rw-spinner-warning {
    color: #faad14;
}
.rw-spinner-danger {
    color: #ff4d4f;
}

.rw-spinner svg {
    display: block;
}

.rw-spinner path {
    fill-opacity: 0;
}

.rw-spinner-head {
    transform-origin: center;
    transition: stroke-dashoffset 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
    stroke-linecap: round;
}

.rw-spinner-track {
    stroke: rgba(92, 112, 128, 0.2);
}

.rw-spinner .rw-spinner-animation {
    animation: rw-spinner-animation 500ms linear infinite;
}

```
