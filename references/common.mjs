import * as methods from '../methods/index.mjs';

export const solution = {
    fields: [],
    message: '',
    methodName: ''
}

export const methodsList = [
    {
        "name": "Newton-Raphson",
        "solve": methods.NewtonRaphson.solve,
        "inputFields": methods.NewtonRaphson.inputFields
    }
]