import Methods from '../methods/index.mjs';

export const solution = {
    fields: [],
    message: '',
    methodName: ''
}

export const methodsList = [
    {
        "name": Methods.Bisection.name,
        "solve": Methods.Bisection.solve,
        "inputFields": Methods.Bisection.inputFields
    },
    {
        "name": Methods.NewtonRaphson.name,
        "solve": Methods.NewtonRaphson.solve,
        "inputFields": Methods.NewtonRaphson.inputFields
    },
    {
        "name": Methods.RegulaFalsi.name,
        "solve": Methods.RegulaFalsi.solve,
        "inputFields": Methods.RegulaFalsi.inputFields
    },
    {
        "name": Methods.Secant.name,
        "solve": Methods.Secant.solve,
        "inputFields": Methods.Secant.inputFields
    }
]