const newMap = (n) => { 
    return n.map(item => item * 2);
};

const filterEvens = (n) => {
    return n.filter(item => item % 2 === 0);
};

const findFirstEven = (n) => {
    return n.find(item => item % 2 === 0)
}

const reduceObject = (items) => {
    return items.reduce(function(obj, item){
        if (!obj[item]) {
            obj[item] = 1;
        } else {
            obj[item]++;
        }
        return obj;
    }, {})
};

const everyEven = (n) => {
    return n.every(item => item % 2 === 0);
}
module.exports = {
    newMap,
    filterEvens,
    reduceObject,
    everyEven,
    findFirstEven
}