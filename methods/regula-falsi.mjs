import { solution } from '../references/common.mjs'

export const name = "Regla Falsa";

export function solve(equation, error, { inputFields }) {
  const a = Math.abs(inputFields.filter(r => r.id == 'a')[0].value);
  const b = Math.abs(inputFields.filter(r => r.id == 'b')[0].value);

  let solution = initSolution();

  let currentError = 1;
  let x = parseInt(seed);
  let counter = 0;

  do {
    const fx = equation.eval({ x });
    const dfx = math.derivative(equation, math.parse('x')).eval({ x });
    const y = x - fx / dfx;

    currentError = counter > 0
      ? solution.fields[4].values[counter - 1] - y
      : 1;

    solution.fields[0].values.push(counter + 1);
    solution.fields[1].values.push(x);
    solution.fields[2].values.push(fx);
    solution.fields[3].values.push(dfx);
    solution.fields[4].values.push(y);
    solution.fields[5].values.push(counter > 0 ? currentError : null);

    x = y;
    counter++;
  } while (currentError > error)

  return solution;
}


export const inputFields = [
  {
    "id": 'a',
    "label": 'Punto a',
    "value": '1'
  },
  {
    "id": 'b',
    "label": 'Punto b',
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
      "title": "f(x_n)",
      "values": [],
    },
    {
      "title": "f'(x_n)",
      "values": [],
    },
    {
      "title": "x_{(n+1)}",
      "values": [],
      "isAnswer": true
    },
    {
      "title": "E",
      "values": [],
    }
  ];
  solution.message = "Si \\(f'(x_n) \\ne 0\\) $$x_{(n+1)}=x_n - {f(x_n) \\over f'(x_n)}$$";
  solution.methodName = name;

  return solution;
}