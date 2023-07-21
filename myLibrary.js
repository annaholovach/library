function addValues (a, b) {
    return a + b
}

function stringifyValue (value) {
    return typeof value === 'object' ? JSON.stringify(value) : String(value)
}

function invertBoolean (value) {
    return typeof value == 'boolean' ? !value : 'Input should be a boolean value'
}

function convertToNumber (value) {
    try {
        let result = Number(value)
        return Number.isNaN(result) ? 'Cannot convert to number' : result
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
            return String(value)
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
