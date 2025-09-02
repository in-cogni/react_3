import React from 'react';
import './Convert.css';

class Convert extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Результат"
        }
    }
    binarydecimal = () => {
        let num = document.getElementById('num_input').value;
        let arr = Array.from(String(num)).reverse();
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === '1') {
                sum += Math.pow(2, i);
            }
            else if (arr[i] !== '0') {
                this.setState({ text: "Введено некорректное значение" });
                return 0;
            }
        }
        this.setState({ text: sum.toString() });
        return sum;
    }
    decimalbinary = () => {
        let num = parseInt(document.getElementById('num_input').value);
        let sum = "";

        if (num === 0) {
            this.setState({ text: "0" });
            return 0;
        }

        while (num !== 0) {
            sum += String(num % 2);
            num = Math.floor(num / 2);
        }
        let arr = Array.from(sum).reverse().join('');
        this.setState({ text: arr });
        return arr;
    }
    decimalhex = () => {
        let num = parseInt(document.getElementById('num_input').value);
        let sum = "";
        let rem;

        if (num === 0) {
            this.setState({ text: "0" });
            return 0;
        }

        while (num !== 0) {
            rem = num % 16;
            if ((rem >= 10) && (rem <= 15)) {
                if (rem === 10) sum += "A";
                else if (rem === 11) sum += "B";
                else if (rem === 12) sum += "C";
                else if (rem === 13) sum += "D";
                else if (rem === 14) sum += "E";
                else if (rem === 15) sum += "F";
            }
            else {
                sum += String(rem);
            }
            num = Math.floor(num / 16);
        }
        let arr = Array.from(sum).reverse().join('');
        this.setState({ text: arr });
        return arr;
    }
    hexdecimal = () => {
        let num = document.getElementById('num_input').value.toUpperCase();
        let arr = Array.from(String(num)).reverse();
        let sum = 0;
        let value;

        for (let i = 0; i < arr.length; i++) {
            switch(arr[i]){
                case 'A': value = 10; break;
                case 'B': value = 11; break;
                case 'C': value = 12; break;
                case 'D': value = 13; break;
                case 'E': value = 14; break;
                case 'F': value = 15; break;
                default: value = parseInt(arr[i]);
            }
            if(isNaN(value)){
                this.setState({ text: "Введено некорректное значение"});
                return 0;
            }
            sum += value * Math.pow(16, i);
        }
        this.setState({ text: sum.toString() });
        return sum;
    }

    optionClick = () => {
        let option = document.getElementById("choose_system").value;
        if (option === 'bin_dec') {
            this.binarydecimal();
        }
        else if (option === 'dec_bin') {
            this.decimalbinary();
        }
        else if (option === 'dec_hex') {
            this.decimalhex();
        }
        else if (option === 'hex_dec') {
            this.hexdecimal();
        }
    }
    render() {
        return (
            <div class="converter">
                <div id="system">
                    <select id="choose_system" defaultValue="">
                        <option value="" disabled>Выберите систему счисления</option>
                        <option value="bin_dec">Из двоичной в десятичную</option>
                        <option value="dec_bin">Из десятичной в двоичную</option>
                        <option value="dec_hex">Из десятичной в шестнадцатеричную</option>
                        <option value="hex_dec">Из шестнадцатеричной в десятичную</option>
                    </select>
                </div>
                <div>
                    <input type="text" id="num_input" placeholder='Введите число' />
                </div>
                <div id="btn_convert"><button onClick={this.optionClick}>Convert</button></div>
                <div id='result_convert'>{this.state.text}</div>
            </div>
        )
    }
}


export default Convert;