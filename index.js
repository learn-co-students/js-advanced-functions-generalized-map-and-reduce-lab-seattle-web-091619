// Add your functions here
function map(array, func)
{
    let newArray = [];
    console.log(array);

    for (let i = 0; i < array.length; i++)
    {
        let element = array[i];
        newArray.push(func(element));
    }

    console.log(newArray);
    return newArray;
}

function reduce(array, func, starting)
{
    let newVal = (!!starting) ? starting : array[0]
    let i = (!!starting) ? 0 : 1
    console.log(array);

    for (i; i < array.length; i++)
    {

        newVal = func(array[i], newVal);
    }

    console.log(newVal);
    return newVal;
}


  
  