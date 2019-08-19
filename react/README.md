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




## REact Hooks

* - can write only functional component



```javascript 
// пример
import React, { useState } from 'react';

import Card from '../card/card.component';

const UseStateExample = () => {
  const [name, setName] = useState('Yihua');
  const [address, setAddress] = useState('Amsterdam');

  return (
    <Card>
      <h1> {name} </h1>
      <h1> {address} </h1>
      <button onClick={() => setName('Andrei')}>Set Name to Andrei</button>
      <button onClick={() => setAddress('Canada')}>Set Address</button>
    </Card>
  );
};

export class StateClassComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      name: 'Yihua',
      address: 'Canada'
    };
  }

  render() {
    return (
      <Card>
        <h1> {this.state.name} </h1>
        <button onClick={this.setState({ name: 'Andrei' })}>
          Set Name to Andrei
        </button>
        <button onClick={this.setState({ address: 'Amsterdam' })}>
          Set Address
        </button>
      </Card>
    );
  }
}

export default UseStateExample;

```


* - useEffect - give us ability to fire sideeffect inside of out functional component.


```javascript
  //  Запускаеться при каждом ререндеринге
  useEffect(() => {
    console.log('hello')
  })

  // Запускаеться как componentDidMount
  useEffect(() => {
    console.log('hello')
  }, [])
```

```javascript
import React, { useState, useEffect } from 'react';

import Card from '../card/card.component';

const UseEffectExample = () => {
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('Bret');

  useEffect(() => {
    console.log('hello')
    const fetchFunc = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${searchQuery}`)
      const resJson = await response.json();
      console.log(resJson[0])
      setUser(resJson[0]);
    }
    fetchFunc()
  }, [searchQuery])

  return (
    <Card>
      <input
        type='search'
        value={searchQuery}
        onChange={event => setSearchQuery(event.target.value)}
      />
      {user ? (
        <div>
          <h3>{user.name}</h3>
          <h3> {user.username} </h3>
          <h3> {user.email} </h3>
        </div>
      ) : (
        <p>No user found</p>
      )}
    </Card>
  );
};

export default UseEffectExample;
```


```javascript
// componentWillUnmount()
  useEffect(() => {
    console.log("I am subscribeing")
    const unsubscribeFromCollections = firestore.collection('collections').onSnapshot(snapshot => console.log(snapshot))
    return () => {
      console.log("I am unsubscribeing")
      unsubscribeFromCollections()
    }
  })
```

```javascript
// ComponentDidMount
//Class
componentDidMount() {
    console.log('I just mounted!');
}
 
//Hooks
useEffect(() => {
    console.log('I just mounted!');
}, [])


// ComponentWillUnmount
//Class
componentWillUnmount() {
    console.log('I am unmounting');
}
 
//Hooks
useEffect(() => {
    return () => console.log('I am unmounting');
}, [])


// ComponentWillReceiveProps
//Class
componentWillReceiveProps(nextProps) {
    if (nextProps.count !== this.props.count) {
        console.log('count changed', nextProps.count);
    }
}
 
//Hooks
useEffect(() => {
    console.log('count changed', props.count);
}, [props.count])
```
