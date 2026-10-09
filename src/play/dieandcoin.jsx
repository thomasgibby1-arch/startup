
export function Coin(){
    var result = Math.floor(Math.random());
    if (result == 0){
        return "Heads";
    }
    else {
        return "Tails";
    }
}

export function Die(){
    var result = Math.floor(Math.random() * 7) + 1;
    return  result;
}