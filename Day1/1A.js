import fs from "fs";

const data = fs.readFileSync('./Day1/data.txt').toString().split("\n").filter((val)=> val !="").map((val)=> parseInt(val));

const calcFuel = (weight) =>{
    return (Math.floor(weight/3) - 2);
}

export const Day1A = () =>{
    const fuelValues = data.map(calcFuel);
    return fuelValues.reduce((acc, curr)=>{ return acc + curr} , 0)
}

const calcFuelFuel = (weight, acc) => {
    const newWeight = calcFuel(weight);

    if(weight <= 0 || newWeight <= 0){
        return acc
    }else{
        acc += newWeight;
        return calcFuelFuel(calcFuel(weight), acc)
    }
}

export const Day1B = () => {
    const fuelFuelValues = data.map((weight)=> calcFuelFuel(weight, 0));
    return fuelFuelValues.reduce((acc,curr) => {return acc + curr}, 0)
}
