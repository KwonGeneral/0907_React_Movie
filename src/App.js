import React from "react";
import PropTypes from 'prop-types';

function TestProps({name, image, rating}) {
    console.log(name)
    return (
        <div>
            <h5>{ name }</h5>
            <h6>{ rating }/5.0</h6>
            <img src={image} alt={name}/>
        </div>

    )
}

const PropsList = [
    {
        id: 1,
        name: "kwonputer1",
        image: "https://kwonputer.com/media/2021-09-02T020005.635.jpg",
        rating: 5
    },
    {
        id: 2,
        name: "kwonputer2",
        image: "https://kwonputer.com/media/2021-09-01T012047.237_FO1xNog.jpg",
        rating: 3.4
    },
    {
        id: 3,
        name: "kwonputer3",
        image: "https://kwonputer.com/media/2021-09-01T002707.945_IZ5ju2q.jpg",
        rating: 4.5
    },
];

// function renderMessage(props) {
//     return <TestProps name={props.name} image={props.image} key={props.id} rating={props.rating}/>
// }

function App() {
  return (
      <div>
          {PropsList.map(item => (<TestProps key={item.id} name={item.name} image={item.image} rating={item.rating} />))}
          {/*{PropsList.map(renderMessage)}*/}
      </div>

  );
}

TestProps.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
};


export default App;


