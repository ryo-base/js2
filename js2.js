'use strict';

const btn = document.getElementById('btn');



//計算機能
const out = function () {
    const fizz = document.getElementById('fizz').value;
    const buzz = document.getElementById('buzz').value;
    const ul = document.createElement('ul');


    const FizzBuzz = fizz + buzz;

    if (FizzBuzz % FizzBuzz === 0) {
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
