let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

let newEmptyArray = [];
for(let i = 0; i <= mix.length - 1; i++) {
    let getType = typeof mix[i]
    newEmptyArray.push(getType);
}

console.log(newEmptyArray);