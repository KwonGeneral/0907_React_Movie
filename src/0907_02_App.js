import React from "react";

class App extends React.Component {
    // 실행 순서
    // 1. constructor
    // 2. render
    // 3. componentDidMount
    constructor(props) {
        super(props);
        console.log("constructor 함수")
    }

    componentDidMount() {
        console.log("componentDidMount 함수")
    }

    // State의 데이터 값 변경이 발생 했을 시, 실행 됌.
    // 화면이 업데이트 되는 시점에 실행 된다고 볼 수 있음.
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate 함수")
    }

    // 컴포넌트가 죽을 때는, 아래의 함수가 실행이 됌.
    componentWillUnmount() {
        console.log("componentWillUnmount 함수")
    }

    state = {
        count: 0,
    }

    add = () => {
        this.setState(current => ({
            count: current.count + 1
        }))
    }

    minus = () => {
        this.setState(current => ({
            count: current.count - 1
        }))
    }

    render() {
        console.log("render 함수")
        return (
            <div>
                <h6>클래스형 컴포넌트 State 테스트 : {this.state.count}</h6>
                <button style={{margin: "0 1rem 0 0"}} onClick={this.add}>증가</button>
                <button onClick={this.minus}>감소</button>
            </div>
        )
    }
}


export default App;


