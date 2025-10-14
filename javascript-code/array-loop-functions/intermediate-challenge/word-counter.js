// Given a sentence, count how many times each word appears.

// Return an object (or array of pairs) showing the word and its count.


const names = ["Divine Ajaegbu", "Ikechukwu Agu", "Chizoba Ajaegbu", "Shedrack Ajaegbu", "Bekee Mba", "Gideon Arinze"];


const wordCounter = () => {
    let counter = [];

    for(let i = 0; i < names.length; i++) {
        const result = `${names[i]}: ${names[i].length}`;
       
        counter.push(result);

    }

    console.log(counter);
   
}

wordCounter();