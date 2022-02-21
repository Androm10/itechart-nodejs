function multiplicate(...args) {
    return args.reduce( (mult, item) => mult*item);
}

function multiplicateNumbers(...args) {
    return args.reduce((mult, item) => 
        typeof item === 'number' ? mult*item : mult*1
    );
}