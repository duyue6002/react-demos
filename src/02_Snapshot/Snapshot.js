import React, { PureComponent } from 'react';
import './Snapshot.css';

export default class Snapshot extends PureComponent {
  state= {
    messages: [],
  };

  handleNewMessage() {
    this.setState(prevState => ({
      // 在数组首位添加元素
      messages: [`msg ${prevState.messages.length}`, ...prevState.messages],
    }))
  }

  componentDidMount() {
    for (let i = 0; i < 20; i++) {
      this.handleNewMessage();
    }
    this.interval = window.setInterval(() => {
      if (this.state.messages.length > 200) {
        window.clearInterval(this.interval);
        return;
      }
      this.handleNewMessage();
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  getSnapshotBeforeUpdate() {
    return this.rootNode.scrollHeight;
  }

  componentDidUpdate(
    prevProps,
    prevState,
    prevScrollHeight
  ) {
    const scrollTop = this.rootNode.scrollTop;
    if (scrollTop < 5) return;
    this.rootNode.scrollTop =
      scrollTop +
      (this.rootNode.scrollHeight - prevScrollHeight);
  }

  render() {
    return (
      <div className="snapshot-sample" ref={ n => (this.rootNode = n) }>
        {this.state.messages.map(msg => (
          <div>{msg}</div>
        ))}
      </div>
    );
  }
}