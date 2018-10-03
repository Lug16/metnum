import { solution } from '../references/common.mjs'

export const name = "Regla Falsa";

export function solve(equation, error, { inputFields }) {
  let x0 = parseInt(inputFields.filter(r => r.id == 'x0')[0].value);
  let x1 = parseInt(inputFields.filter(r => r.id == 'x1')[0].value);

  let solution = initSolution();

  let currentError = 1;
  let counter = 0;

  while (currentError > error) {
    const fx0 = equation.eval({ x: x0 });
    const fx1 = equation.eval({ x: x1 });
    const y = x0 - fx0 * ((x1 - x0) / (fx1 - fx0));
    const fy = equation.eval({ x: y });
    const fx0fy = fx0 * fy;

    currentError = counter > 0
      ? Math.abs(solution.fields[5].values[counter - 1] - y)
      : 1;

    solution.fields[0].values.push(counter + 1);
    solution.fields[1].values.push(x0);
    solution.fields[2].values.push(x1);
    solution.fields[3].values.push(fx0);
    solution.fields[4].values.push(fx1);
    solution.fields[5].values.push(y);
    solution.fields[6].values.push(fy);
    solution.fields[7].values.push(fx0fy);
    solution.fields[8].values.push(counter > 0 ? currentError : null);

    if (fx0fy > 0)
      x0 = y;
    else
      x1 = y;

    counter++;
  }

  return solution;
}


export const inputFields = [
  {
    "id": 'x0',
    "label": 'Punto x0',
    "value": '0'
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
      "title": "x_{n-1}",
      "values": [],
    },
    {
      "title": "x_n",
      "values": [],
    },
    {
      "title": "f(x_{n-1})",
      "values": [],
    },
    {
      "title": "f(x_n)",
      "values": [],
    },
    {
      "title": "x_{n+1}",
      "values": [],
      "isAnswer": true
    },
    {
      "title": "f(x_{n+1})",
      "values": [],
    },
    {
      "title": "f(x_{n-1})f(x_{n+1})",
      "values": [],
    },
    {
      "title": "E",
      "values": [],
    }
  ];
  solution.message = "$$x_{n+1}={x_{n-1} - f(x_{n-1}){{x_n - x_{n-1}} \\over {f(x_n) - f(x_{n-1})}}}$$";
  solution.methodName = name;

  return solution;
}