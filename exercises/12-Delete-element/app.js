let people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

// Your code below
function deletePerson(nameToBeDeleted) {
    let newArray= [people.filter((person) => person !== nameToBeDeleted )];

    return newArray;
}



console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
