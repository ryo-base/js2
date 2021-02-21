'use strict';

const btn = document.getElementById('btn');
const ul = document.createElement('ul');

//計算機能
const outResult = function () {
    const fizzValue = document.getElementById('fizz').value;
    const buzzValue = document.getElementById('buzz').value;

    //文字列数値化
    const fizz = Number(fizzValue);
    const buzz = Number(buzzValue);

    if ((fizz === 0) || (buzz === 0)) {　//空欄なら
        const li = document.createElement('li');
        li.textContent = '整数値を入力してください';
        ul.appendChild(li);
        document.body.appendChild(ul);
        return;
    }


    if ((fizz >= 100) && (buzz >= 100)) {
        const li = document.createElement('li');
        li.textContent = '表示できるのは二桁の整数までです。';
        ul.appendChild(li);
        document.body.appendChild(ul);
        return;
    }

    const pattern = /^[-]?([1-9]\d*|0)$/;;
    if (!(pattern.test(fizz)) || !(pattern.test(buzz))) {
        const li = document.createElement('li');
        li.textContent = '整数を入力して下さい。';
        ul.appendChild(li);
        document.body.appendChild(ul);
        return;
    }

    for (let i = 1; i <= 99; i++) {
        const li = document.createElement('li');
        if (i % fizz === 0 && i % buzz === 0) {
            li.textContent = 'FizzBuzz' + i;
            ul.appendChild(li);
            document.body.appendChild(ul);
        } else if (i % fizz === 0) {
            li.textContent = 'Fizz' + i;
            ul.appendChild(li);
            document.body.appendChild(ul);
        } else if (i % buzz === 0) {
            li.textContent = 'Buzz' + i;
            ul.appendChild(li);
            document.body.appendChild(ul);
        }
    };

};

//実行
btn.addEventListener('click', () => {
    ul.textContent = '';//前回分の結果を消去
    outResult();
});

