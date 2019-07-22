## Imperative vs declarative

* Imperative - говорит машине что делать и как  делать (компьютер) (jQuery )
```javascript
    for(let i = 1; i < 1000; i++){
        console.log(i)
    }
```


* declarative - говорит машине что делать и что должно получиться (человек) (React)
```bash
    [1,2,3].forEach(item => console.log(item))
```



## acync setState

* setState -  по умолчанию синхронный
```javascript
  handleClick = () => {
    this.setState((prevState, prevProps) => {
      return {meaningOfLife: prevState.meaningOfLife+prevProps.increment}
    },
       () => console.log(this.state.meaningOfLife))
    
  }
```


## react router

```javascript
  <Switch>
    <Route exact path='/' component={Home}/>
    {/* Оба /roster и /roster/:number начинаются с /roster */}
    <Route path='/roster' component={Roster}/>
    <Route path='/schedule' component={Schedule}/>
  </Switch>

  
  <Switch/>... <Switch/> // итеративно проходит по дочерним компонентам и рендерит только первый который подходит под location.pathname.
```

* - props содержит match, history,location
```javascript
import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';


const HatsPage = (props) => {
  console.log(props)
  return (
    <div>
      <Link to="/topics">Topics</Link>
      <button onClick={() => props.history.push('/topics')}>Topics</button>
      <h1>HatsPage</h1>
    </div>
  )
}

const TopicsList = (props) => {
  console.log(props)
  return (
    <div>
      <h1>TopicsList</h1>
      <Link to={`${props.match.url}/13`}>__13__ </Link>
      <Link to={`${props.match.url}/15`}>__15__ </Link>
      <Link to={`${props.match.url}/20`}>__20__ </Link>
    </div>
  )
}

const TopicDetail = (props) => {
  console.log(props)
  console.log(props.match.params.topicId)
  return (
    <div>
      <h1>TopicDetail {props.match.params.topicId}</h1>
    </div>

  )
}


function App() {
  return (
    <div>
      <Route exact path="/" component={HatsPage}/>
      <Route exact path="/topics" component={TopicsList}/>
      <Route path="/topics/:topicId" component={TopicDetail}/>
    </div>
  );
}

export default App;

// {history: {…}, location: {…}, match: {…}, staticContext: undefined}
// history: {length: 9, action: "POP", location: {…}, createHref: ƒ, push: ƒ, …}
// location: {pathname: "/", search: "", hash: "", state: undefined}
// match: {path: "/", url: "/", isExact: true, params: {…}}
// staticContext: undefined
// __proto__: Object
```

