import { solution } from '../references/common.mjs'

export const name = "Punto Fijo ";

export function solve(equation, error, { inputFields }) {
    let x1 = parseFloat(inputFields.filter(r => r.id == 'x1')[0].value);
    let gx = math.parse(inputFields.filter(r => r.id == 'gx')[0].value);

    let solution = initSolution();

    let currentError = 1;
    let counter = 0;

    while (currentError > error) {
        const fx1 = gx.eval({ x: x1 });

        currentError = counter > 0
            ? Math.abs(solution.fields[2].values[counter - 1] - y)
            : 1;

        solution.fields[0].values.push(counter + 1);
        solution.fields[1].values.push(x1);
        solution.fields[2].values.push(fx1);
        solution.fields[3].values.push(counter > 0 ? currentError : null);

        x1 = fx1;

        counter++;
    }

    return solution;
}


export const inputFields = [
    {
        "id": 'gx',
        "label": 'Ecuación g(x)',
        "value": '',
        "type": "text"
    },
    {
        "id": 'x1',
        "label": 'Punto x1',
        "value": '1'
    }
]

function initSolution() {
    solution.fields = [
        {
            "title": "n",
            "values": [],
            "int": true
        },
        {   
            "title": "x_n",
            "values": [],
        },
        {
            "title": "g(x_n)",
            "values": [],
            "isAnswer": true
        },
        {
            "title": "E",
            "values": [],
        }
    ];
    solution.message = "$$x_{n+1}={{{x_{n-1} + x_n} \\over 2}}$$";
    solution.methodName = name;

    return solution;
}