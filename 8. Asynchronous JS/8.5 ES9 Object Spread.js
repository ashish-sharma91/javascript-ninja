const animals = {
    tiger: 23,
    lion: 5,
    monkey: 2
};

const { tiger, ...rest } = animals;

console.log(tiger);
console.log(rest);

// output
// 23
// {lion: 5, monkey: 2}