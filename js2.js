'use strict';

const btn = document.getElementById('btn');

//整数チェック
const checkNum = function (x, y) {
    if (Number.isSafeInteger(x)) {
        if (Number.isSafeInteger(y)) {
            return true;
        }
    } else {
        return false;
    }
}

//計算機能
const out = function () {
    const fizzValue = document.getElementById('fizz').value;
    const buzzValue = document.getElementById('buzz').value;
    const ul = document.createElement('ul');


    //文字列数値化
    const fizz = Number(fizzValue);
    const buzz = Number(buzzValue);

    if ((fizz === 0) || (buzz === 0)) {　//空欄なら
        const li = document.createElement('li');
        li.textContent = '整数値を入力してください';
        ul.appendChild(li);
    } else if (checkNum(fizz, buzz) === true) { //空欄以外なら
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
    } else {　//少数または文字なら
        const li = document.createElement('li');
        li.textContent = '整数値を入力してください';
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
}

//実行
btn.addEventListener('click', out);