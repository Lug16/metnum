export function displaySolution(solution, controls) {
    const {
      errorInput,
      methodMessage,
      methodTitle,
      resultTable
    } = controls;

    const decimals = Math.abs(3);

    methodTitle.innerText = solution.methodName;
    methodMessage.innerHTML = solution.message;
    resultTable.innerHTML = '';

    for (let i = 0; i < solution.fields.length; i++) {
      const row = resultTable.insertRow(i);
      const cell = row.insertCell(0);
      const integer = solution.fields[i].int;
      const isAnswer = solution.fields[i].isAnswer;

      cell.innerHTML = `\\(${solution.fields[i].title}\\)`;

      for (let j = 0; j < solution.fields[i].values.length; j++) {
        const cell = row.insertCell(j + 1);
        const value = solution.fields[i].values[j];
        const isLastCell = j + 1 == solution.fields[i].values.length;
        cell.classList.add(isAnswer && isLastCell ? 'answer' : 'x');
        cell.innerHTML = !!value ? (!!integer ? value : value.toFixed(decimals)) : '-';
      }
    }

    MathJax.Hub.Queue(['Typeset', MathJax.Hub, methodMessage]);
    MathJax.Hub.Queue(['Typeset', MathJax.Hub, resultTable]);
  }