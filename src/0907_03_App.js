import React from "react";
import axios from 'axios';

class App extends React.Component {
    state = {
        isLoading: true,
        movie_list: [],
    }

    // 어싱크, 어웨잇을 통해 API 통신의 순서를 제어.
    // async는 이 함수가 API 통신을 하는데에 있어 시간이 걸린다고 말해주고.
    // await은 해당 함수의 실행을 기다려 달라고 말한다.
    getMovieData = async () => {
        // 일반적인 사용법
        // const get_movie = await axios.get("https://yts-proxy.now.sh/list_movies.json")

        // ES6 구조 분해 할당 사용법
        const {
            data: {
                // 아래의 값은 => movies.data.data.movies를 말함.
                data: { movies },
            }
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json")

        this.setState({movie_list: movies, isLoading: false})
    }

    componentDidMount() {
        this.getMovieData()
    }

    render() {
        const { isLoading } = this.state;

        return (
            <div>
                { isLoading ? '로딩중...' : "로딩완료"}
            </div>
        )
    }
}


export default App;


