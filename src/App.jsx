import { Fragment } from 'react';

import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';

// function CoreConcept(props) {
//   return (
//     <li>
//       <img src= {props.image} alt={props.title}/>
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// }

// function CoreConcept({image, title, description}) {
//   return (
//     <li>
//       <img src= {image} alt={title}/>
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </li>
//   );
// }


function App() {

  return (
    <Fragment>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
        <h2>Time to get started!</h2>
      </main>
    </Fragment>
  );
}

export default App;
