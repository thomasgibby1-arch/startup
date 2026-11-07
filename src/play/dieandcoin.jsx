
export function Coin(){
    const result = Math.floor(Math.random() * 2);
    if (result == 0){
        return "Heads";
    }
    else {
        return "Tails";
    }
}

export function Die(){
    const result = Math.floor(Math.random() * 6) + 1;
    return  result;
}