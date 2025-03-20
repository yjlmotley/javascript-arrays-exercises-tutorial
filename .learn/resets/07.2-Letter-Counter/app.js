let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// Your code here
for(let i in par) {
    const letter = par[i].toLowerCase();
    console.log("processing letter count for", par[i]);
    if(letter == " ") continue;
    else if(counts[letter] == undefined) {
        console.log("adding letter as a property");
        counts[letter] = 1;
    } 
    else {
        console.log("count increasing to", counts[letter] + 1);
        counts[letter] = counts[letter] + 1;
    }
}

console.log(counts);
