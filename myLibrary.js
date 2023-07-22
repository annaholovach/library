function addValues(a, b) {
    if ((typeof a === 'number' || typeof a === 'string') &&
        (typeof b === 'number' || typeof b === 'string')) {
        return a + b;
    } else {
        return 'Cannot add'
    }
}

function stringifyValue (value) {
    return typeof value === 'object' ? JSON.stringify(value) : String(value)
}

function invertBoolean (value) {
    return typeof value == 'boolean' ? !value : 'Input should be a boolean value'
}

function convertToNumber (value) {
    try {
        let number = Number(value)
        return Number.isNaN(number) ? 'Cannot convert to number' : number
    }catch (e){
        return e.message
    }
}

function coerceToType (value, type) {
    switch (type) {
        case 'number' :
            const number = Number(value)
            return Number.isNaN(number) ? 'Cannot convert to number' : number
        case 'string' :
            return typeof value === 'object' ? JSON.stringify(value) : String(value)
        case 'boolean' :
            return !!value
        case 'null' :
            return value = null
        case 'undefined' :
            return value = undefined
    }
}

module.exports = {
    addValues,
    stringifyValue,
    invertBoolean,
    convertToNumber,
    coerceToType
};
