// import React from 'react'
// import PropTypes from 'prop-types'
// import { useDispatch } from 'react-redux'

// function cakeContainer(props) {
//     const [number,setNumber]=useState(1)
//     const numOfCakes=useSelector(state=>state.cake.numOfCakes)
//     const dispatch=useDispatch();
//   return (
//     <div>
//       <h2>Number of Cakes- {numOfCakes}</h2>
//       <input type='text' value={number} onChange={e=>setNumber(e.target.value)}></input>
//       <button onClick={()=>dispatch(buyCake(number))}>Buy {number} Cake</button>
//     </div>
//   )
// }

// export default cakeContainer


import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCake } from './cake/cakeActions';
// import PropTypes from 'prop-types'

function CakeContainer(props) {
  const [number, setNumber] = useState(1)
  // const numOfCakes = useSelector(state => state.cake.numOfCakes)
  // const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Cakes - {props.numOfCakes} </h2>
      <input type='text' value={number} onChange={e => setNumber(e.target.value)}></input>
      <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: number => dispatch(buyCake(number))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
