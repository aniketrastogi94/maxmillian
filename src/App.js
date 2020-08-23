import React,{Component} from "react";
import "./styles.css";
import Person from "./Person";
class App extends Component {
  state={
    persons:[
      {id:1,name:'max',age:28},
      {id:2,name:'Man',age:29},
      {id:3,name:'Stephanie',age:26}
    ],otherState:'some other value',
    showPersons: false
  }
  switchNameHandler=(newName)=>{
    this.setState({
      persons:[
        {name:newName,age:25},
        {name:'Man',age:29},
        {name:'Stephanie',age:26}
      ]
    });
  }
  togglePersonHandler=()=>{
    const doesShow=this.state.showPersons;
    this.setState({showPersons:!doesShow});
  }
  nameChangeHandler=(event,id)=>{
    const personIndex =this.state.persons.find(p=>{
      return p.id===id;
    });


    const person={
      ...this.state.persons[personIndex]
    };

    
    person.name=event.target.value;
    
    const persons=[...this.state.persons];
    
    persons[personIndex]=person;
    // const person=Object.assign({},this.state.persons[personIndex]);
    this.setState( {persons : persons } );
  
  }
    deletePersonalHandler=(personIndex)=>{
      const persons=[...this.state.persons];
      persons.splice(personIndex,1);
      this.setState( {persons : persons} );
  }
  render() {
    let persons=null;
    if(this.state.showPersons){
      persons=(
        <div>
          {this.state.persons.map((person,index) => {
            return <Person
            click={()=>this.deletePersonalHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            chnaged={(event)=>this.nameChangeHandler(event,person.id)} />
          })}
        </div>
      );
      // style.backgroundColor='red';
      // style[':hover']={
      //   backgroundColor:"lightred",
      //   color:'white'
      // };
    }
    const classes=[];
    if(this.state.persons.length<=2){
      classes.push('red');
    }
    if(this.state.persons.length<=1){
      classes.push('bold');
    }
    return (
      <div className="App">
       <h1>Hello I'm a react app</h1>
       <h2 className={classes.join(' ')}>This is really working</h2>
       <button className="button" onClick={this.togglePersonHandler}>Switch Name</button>
       {persons}
      </div>
    );
  }
}
export default App;
