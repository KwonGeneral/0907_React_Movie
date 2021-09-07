import React from "react";

// 클래스형 컴포넌트의 기본 뼈대는 React.Component를 상속받는 것이다.
// State를 사용하기 위해서는 클래스형 컴포넌트를 사용해야 한다. (이거는 따로 알아봐야 할 필요가 있을 듯)
class App extends React.Component {
    // state는 아래와 같이 정의해야 함. 이는 약속임.
    // state = { 변수 값: 타입에 따른 값 }
    state = {
        count: 0,
    }

    // 함수를 만들 때, const, function 안됌. (방금 확인해봄)
    // 클래스 내부에서는 그냥 함수명만 적고 형식 맞춰서 알고리즘 작성하고.
    // 이를 리턴해줄 때만 필요에 의해 사용하는 모양인듯.
    // 방금 this.state.count += 1; 을 넣어봤는데, 동작하지 않음. 아마도 state는 값 변경에 대한 약속이 따로 있는 모양임.
    // 아, 값은 변경이 되는데, render 함수가 실행되는 약속이 존재하나봄. 실제로 프론트에 반영하는건 render가 하니까.
    add = () => {
        // this.state.count += 1;

        // 니꼴라스는 아래와 같은 코드는 좋지 않은 방법이라고 설명함.
        // 내가 코드를 짠다면 아래와 같은 방법으로 짰을 듯. 역시 공부는 끝이없구나.
        // this.setState({count: this.state.count + 1})

        // 니꼴라스가 추천하는 방법 (current는 "현재의"라는 뜻이다.)
        // 음..! 직접 내부의 값을 사용하는 방법보다는 새로운 객체를 생성해서 그 값을 변경하는게 안전한 방법으로 보인다.
        // 하지만, 값 전달이 많이 이뤄지고, 그 값들이 계속 유기적으로 계속 변경이 되어야 하는 값이라면, 아래와 같은 방법은...
        // 머리를 많이 써야할 듯 싶다..ㄷㄷ.. 역시 머리좋은 사람들은 남다르네!
        this.setState(current => ({
            count: current.count + 1
        }))
    }

    minus = () => {
        // 책 : setState 함수는 바뀐 state의 데이터만 업데이트 한다.
        // 비동기의 핵심인 부분으로 보인다. 전체를 다시 그리는게 아닌, 필요한 영역만 추출해서 변경하기 때문에!
        this.setState(current => ({
            count: current.count - 1
        }))
    }

    // 클래스형 컴포넌트는 반환을 위해 render() 함수를 사용한다.
    render() {
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


