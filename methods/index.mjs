import * as NewtonRaphson from './newton-raphson.mjs';
import * as Secant from './secant.mjs';
import * as RegulaFalsi from './regula-falsi.mjs';
import * as Bisection from './bisection.mjs';
import * as FixedPoint from './fixed-point.mjs';

const Methods = {
    Bisection,
    FixedPoint,
    NewtonRaphson,
    RegulaFalsi,
    Secant,
};

export default Methods;