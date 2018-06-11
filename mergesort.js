function split(array){
    //if ()
    
   //splits an array in to two separate arrays
    const mid = Math.floor(array.length/2);
    const first = array.slice(0, mid);
    const second = array.slice(mid, array.length);
    
    return [first, second];
}


