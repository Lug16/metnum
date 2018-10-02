import {
    NewtonRaphson,
    Secant
} from '../methods/index.mjs';

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
    },
    {
        "name": "Secante",
        "solve": Secant.solve,
        "inputFields": Secant.inputFields
    }
]