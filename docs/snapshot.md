# React 生命周期

![](http://ww1.sinaimg.cn/large/6b60d8d8ly1g1vdt6jjdgj21vg0zmgsf.jpg)

## 使用场景

### constructor

1. 初始化内部状态，很少使用
2. 唯一可以直接修改 `state` 的地方

### getDerivedStateFromProps

1. 尽量不要使用
2. 当 `state` 需要从 `props` 初始化时使用
3. 每次 render 会调用
4. 典型场景：表单控件读取默认值

### componentDidMount

1. UI渲染完成后调用
2. 只执行一次
3. 典型场景：获取外部资源

### componentWillUnmount

1. 组件移除时调用
2. 典型场景：资源释放

### getSnapshotBeforeUpdate

1. render前调用，`state` 已更新
2. 典型场景：获取 render 前的DOM状态

### componentDidUpdate

1. 每次UI更新时都会被调用
2. 典型场景：页面需要根据 `props` 变化重新获取数据

### shouldComponentUpdate

1. 决定 Virtual DOM 是否需要重绘
2. PureComponent 自动实现
3. 典型场景：性能优化

## Demo

<iframe src="https://codesandbox.io/embed/w6y7k3o8l5?fontsize=14" title="Snapshot" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>