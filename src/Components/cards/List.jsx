// import React from 'react'd
import Card from './Card';
import './List'

function List() {

    const arr = [
    { name: "mostafa", age: 25, color: 'red' }, 
    { name: "amin", age: 66, color: 'green' }, 
    { name: "abdulmotaleb", age: 21, color: 'blue' },
    { name: "ahmed", age: 22, color: 'yalowo' }, 
    { name: "khalil", age: 34, color: 'green' }, 
    { name: "ahmed", age: 18, color: 'gray' },
    { name: "hussein", age: 20, color: 'green' },
    { name: "amaar", age: 33, color: 'blue' },
    { name: "ahmed", age: 21, color: 'red' },
    { name: "ahmed", age: 50, color: 'blue' }
];
    return (
        <div className='flex'>
            {arr.map(function (item, index) { return <Card key={index} data={item} /> })}
        </div>
    )
}

export default List