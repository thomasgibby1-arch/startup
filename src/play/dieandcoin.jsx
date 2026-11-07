<<<<<<< HEAD

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
=======

export function Coin(){
    var result = Math.floor(Math.random() * 2);
    if (result == 0){
        return "Heads";
    }
    else {
        return "Tails";
    }
}

export function Die(){
    var result = Math.floor(Math.random() * 6) + 1;
    return  result;
}
>>>>>>> 2f435e82571a93f3f1fd9d80f3ba940364a253cd
