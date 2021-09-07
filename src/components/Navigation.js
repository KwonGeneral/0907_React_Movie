import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css"

// a 태그의 특징은 페이지 전체를 다시 그린다.
// 그래서 react-router-dom의 Link 컴포넌트를 사용한다.
function Navigation() {
    return (
        <div className="nav">
            <Link to="/">홈</Link>
            <Link to={"/about"}>정보</Link>
        </div>
    )
}

export default Navigation;