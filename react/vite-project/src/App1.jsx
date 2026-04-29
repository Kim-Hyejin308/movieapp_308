import React from "react";

class App1 extends React.Component {
  state = {
    counter: 0,
  };

  onclick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  componentDidMount = () => console.log("화면이 렌더링되었습니다");

  componentDidUpdate = () => console.log("화면이 업데이트되었습니다");

  componentWillUnmount = () => console.log("화면이 제거되었습니다");

  render() {
    return (
      <>
        <h1>React Class Component</h1>
        <hr />
        <p>{this.state.counter}</p>
        <button onClick={this.onclick}>click</button>
      </>
    );
  }
}

export default App1;
