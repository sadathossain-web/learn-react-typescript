import './App.css';
import { Button } from './components/Button';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

function App() {
  const personName ={
    first: 'Sadat',
    last: 'hossain',
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne',
    },
    {
      first: 'Rakib',
      last: 'Hossain',
    },
    {
      first: 'Miky',
      last: 'mouse',
    }
  ]
    
  

  return (
    <div className="App" style={{ paddingTop: "30px"}}>
      <Greet name = {'Sadat'}  isLoggedIn= {false}  />
      <Person name = {personName} />
      <PersonList names = {nameList} />
      <Status status={'success'}/>
      <Heading>Place holder</Heading>
      <Oscar>
        <Heading>
          Go to hell!
        </Heading>
      </Oscar>
      <Button handleClick={(event) =>{
        console.log('Button clicked', event);
      }}/>
      <Input value='' handleChange={(event)=> console.log(event)} />
    </div>
  );
}

export default App;
