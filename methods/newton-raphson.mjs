import { solution } from '../references/common.mjs'

export function solve(equation, error, { inputFields }) {
  const seed = Math.abs(inputFields.filter(r => r.id == 'seedInput')[0].value);

  console.info(seed);
  console.info(error);

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
  solution.message = " Si \\(f'(x_n) \\ne 0\\) $$x_{(n+1)}=x_n - {f(x_n) \\over f'(x_n)}$$";
  solution.methodName = "Newton-Raphson";

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
    "id": 'seedInput',
    "label": 'Punto Inicial',
    "value": '1'
  }
]