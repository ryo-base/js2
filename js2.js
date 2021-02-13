'use strict';

const btn = document.getElementById('btn');

//整数チェック
const checkNum = function (x, y) {
    if ((Number.isSafeInteger(x) === true) && (Number.isSafeInteger(x) === true)) {
        return true;
    } else {
        return false;
    }
}

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
    }
    if ((fizz >= 100) && (buzz >= 100)){
        const li = document.createElement('li');                                        //return;　を書くと動作しない
        li.textContent = '表示できるのは二桁の整数までです。';
        ul.appendChild(li);
    }
    if (checkNum(fizz, buzz)) { //空欄以外なら
        for (let i = 1; i <= 99; i++) {
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
    } 
    if (!checkNum(fizz, buzz)) {　//少数または文字なら
        const li = document.createElement('li');
        li.textContent = '整数値を入力してください';
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
}


//実行
btn.addEventListener('click', () => {
    ul.textContent = '';//前回分の結果を消去
    outResult();
});