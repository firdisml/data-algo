for (var i = 2; i <= 100; i = i + 1)
{
    var isPrime = true;
    for (var x = 2; x < i; x = x + 1)
    {
        if (i % x === 0)
        {
            isPrime = false;
            x = i;
        }
    }
    if (isPrime === true)
    {
        console.log(i);
    }
}