// import logo from './logo.svg';
// import './App.css';
// import React from 'react';
// import Greet from './Components/Greet';
// import Hello from './Components/Hello';
// import { Footer } from './Components/Footer';
// import { Header } from './Components/Header';
// import { Sidenav } from './Components/Sidenav';
// import { Maincon } from './Components/Maincon';
// import { Form } from './Components/Form';
// import Welcome from './Components/Welcome';
// import Register from './Components/Register';
// import tree from './tree.jpeg';
// import react1 from './react1.png'
// import Message from './Components/Message';
// import Counter from './Components/Counter';
// import HookCounter1 from './Components/HookCounter1';
// import HookCounter2 from './Components/HookCounter2';
// import Discount from './Components/Discount';
// import EventBind from './Components/EventBind';
// import UserGreeting from './Components/UserGreeting';
// import UserGreet_functional from './Components/UserGreeting_functional';
// import NameList from './Components/NameList';
// import PostList from './Components/PostList';
// import HookCounter3 from './Components/HookCounter3';
// import HookCounter4 from './Components/HookCounter4';
// import UserForm from './Components/UserForm';
// import UserForm1 from './Components/UserForm1';
// import { UppertoLower } from './Components/UppertoLower';
// import About from './Components/About';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


// function App() {
//   return (
//     <div className='App'>
//       {/* <Router>
//         <nav>
//           <Link to='/'>Home</Link> &nbsp;&nbsp;
//           <Link to='/about'>About Us</Link> &nbsp;&nbsp;
//           <Link to='/contact'>Contact Us</Link> &nbsp;&nbsp;
//         </nav>
//         <Routes>
//           <Route path='/' element={<About />}></Route>
//           <Route path='/about' element={<About />}></Route>
//           <Route path='/contact' element={<About />}></Route>
//         </Routes>
//       </Router> */}


//       {/* <About/> */}
//       {/* <UppertoLower/> */}
//       {/* <UserForm1/> */}
//       {/* <UserForm/> */}
//       {/* <HookCounter4/> */}
//       {/* <HookCounter3/> */}
//       {/* <PostList/> */}
//       {/* <NameList/> */}
//       {/* <UserGreet_functional /> */}
//       {/* <UserGreeting/> */}
//       {/* <EventBind /> */}
//       {/* <Discount/> */}
//       {/* <HookCounter2 number={2}/> */}
//       {/* <HookCounter1/> */}
//       {/* <Counter value={4}/> */}
//       {/* <Message/> */}
//       {/* <Hello/> */}
//       {/* <Form/> */}
//       {/* <Header/> */}
//       {/* <Sidenav/> */}
//       {/* <Maincon/> */}
//       {/* <Footer/> */}
//       {/* <Welcome firstname="Ayush" lastname="Chandak"/> 
//       <Welcome firstname="Aatish" lastname="Kachhaway"/>
//       <Welcome firstname="Rohit" lastname="Pillai"/> 
//       <Welcome/> */}
//       {/* <Greet firstname="Ayush" lastname="Chandak"/>
//       <Greet firstname="Ayush" lastname="C"/>
//       <Greet firstname="Ayush"/> */}
//       {/* <Greet empid={35} ename="Ayush"/> */}
//       {/* <p>This is children props</p> */}
//       {/* <button>Click Me</button> */}
//       {/* <img src={logo} alt='not found'></img> */}
//       {/* <Greet empid={36}/> */}
//       <Greet />
//       {/* <Register name="Ayush" age="19" department="AIML" picture={tree}/> */}
//       {/* <Register name="Aatish" age="19" department="AIML" picture={react1}/> */}
//       {/* <Register/> */}
//     </div>
//   );
// }

// // function Greet(){
// //   return(
// //        <div className='App'>
// //           <h1>Welcome Ayush</h1>
// //        </div>
// //   );
// // }

// // function Hello(){
// //   return(
// //        <div className='App'>
// //           <h1>Hello.Second Child Component</h1>
// //        </div>
// //   );
// // }

// // function Header(){
// //     return(
// //          <div className='App'>
// //             <h1>HEADER</h1>
// //          </div>
// //     );
// //  }

// // function Sidenav(){
// //     return(
// //          <div className='App'>
// //             <h1>SIDENAV</h1>
// //          </div>
// //     );
// // }

// // function Maincon(){
// //     return(
// //          <div className='App'>
// //             <h1>MAINCON</h1>
// //          </div>
// //     );
// // }

// // function Footer(){
// //     return(
// //          <div className='App'>
// //             <h1>FOOTER</h1>
// //          </div>
// //     );
// // }

// export default App;



// //    React.createElement('div',{className:'App'}),
// //    React.createElement('h1',{className:"h1" ,id:"hel"},'good morning'),
// //    React.createElement('h2',{},'have a nice day'),
// //    React.createElement('p',{},'good bye!')


// {/* <React.Fragment>
//     <h1>good morning </h1>
//     <h2>have a nice day</h2>
//     <p>good bye!</p>
// </React.Fragment> */}



import { Provider } from 'react-redux';
import store from './redux/store';
import CakeContainer from './redux/CakeContainer';
import React from 'react';
import IcecreamContainer from './redux/IcecreamContainer';
import ItemContainer from './redux/ItemContainer';

function App() {
    return (
        <Provider store={store}>
            <div>
                <CakeContainer />
                <IcecreamContainer/> 
                <ItemContainer cake/>
            </div>
        </Provider>
    )
}
export default App;