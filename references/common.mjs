import {NewtonRaphson} from '../methods/index.mjs';

export const solution = {
    fields: [],
    message: '',
    methodName: ''
}

export const methodsList = [
    {
        "name": "Newton-Raphson",
        "solve": NewtonRaphson.solve,
        "inputFields": NewtonRaphson.inputFields
    }
]