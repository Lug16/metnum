import { solution } from '../references/common.mjs'

export const name = "Punto Fijo";

export function solve(equation, error, { inputFields }) {
    let gx = math.parse(inputFields.filter(r => r.id == 'gx')[0].value);

    let solution = initSolution();

    let currentError = 1;
    let counter = 0;
    let x1 = undefined;

    for (let i = -10; i <= 10; i++) {
        const a = equation.eval({ x: i });
        const b = equation.eval({ x: i + 1 });
        if (b * a < 0) {
            x1 = i > 0 ? i + 1 : i - 1;
            break;
        }
    }

    while (currentError > error) {
        const fx1 = gx.eval({ x: x1 });

        currentError = counter > 0
            ? Math.abs(solution.fields[1].values[counter - 1] - fx1)
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
            "isAnswer": true
        },
        {
            "title": "g(x_n)",
            "values": []
        },
        {
            "title": "E",
            "values": [],
        }
    ];
    solution.message = "$$x_{n+1}={g(x_n)}$$";
    solution.methodName = name;

    return solution;
}