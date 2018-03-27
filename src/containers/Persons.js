import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actionTypes from '../store/actions'

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    // state = {
    //     persons: []
    // }

    // personAddedHandler = () => {
    //     const newPerson = {
    //         id: Math.random(), // not really unique but good enough here!
    //         name: 'Max',
    //         age: Math.floor( Math.random() * 40 )
    //     }
    //     this.setState( ( prevState ) => {
    //         return { persons: prevState.persons.concat(newPerson)}
    //     } );
    // }

    // personDeletedHandler = (personId) => {
    //     this.setState( ( prevState ) => {
    //         return { persons: prevState.persons.filter(person => person.id !== personId)}
    //     } );
    // }

    render () {
        return (
            <div>
                {/* <AddPerson personAdded={this.personAddedHandler} /> */}
                <AddPerson personAdded={this.props.onAddPerson} />
                {this.props.persons.map(person => ( //this.props.persons = is gotten from mapStateToProps
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onDeletePerson(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        persons: state.persons //state.persons must match the same as the one used in the reducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPerson: () => dispatch({type: actionTypes.ADD_PERSON}),
        onDeletePerson: (personId) => dispatch({type: actionTypes.DELETE_PERSON, id: personId})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Persons);