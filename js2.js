'use strict';

const btn = document.getElementById('btn');

//整数チェック
const checkNum = function (x, y) {
    if (Number.isInteger(x, y)) {
        return 'ok';
    } else {
        return 'not';
    }
}

//計算機能
const out = function () {
    const fizzValue = document.getElementById('fizz').value;
    const buzzValue = document.getElementById('buzz').value;
    const ul = document.createElement('ul');

    const fizz = Number(fizzValue);
    const buzz = Number(buzzValue);

    if (checkNum(fizz, buzz) === 'ok') {
        for (let i = 1; i < 99; i++) {
            const li = document.createElement('li');
            if (i % fizz === 0 && i % buzz === 0) {
                li.textContent = 'FizzBuzz' + i;
                ul.appendChild(li);

            } else if (i % fizz === 0) {
                li.textContent = 'Fizz' + i;
                ul.appendChild(li);

            } else if (i % buzz === 0) {
                li.textContent = 'Buzz' + i;
                ul.appendChild(li);

            }
        };
    } else {
        alert('整数を入力してください。');
    }

    document.body.appendChild(ul);
}

//実行
btn.addEventListener('click', out);

