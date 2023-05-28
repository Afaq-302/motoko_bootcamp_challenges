import React, { useState } from 'react';
import { calculator_backend } from '../../../declarations/calculator_backend';

function App() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(0);

    function handleInput(e) {
        setInput(e.target.value);
    }

    async function handleAdd() {
        if (input !== '') {
            // setResult(parseFloat(result) + parseFloat(input));
            const result = await calculator_backend.add(parseFloat(input));
            console.log('result', result);
            setResult(result)
            setInput('');
        }
    }

    async function handleSubtract() {
        if (input !== '') {
            const result = await calculator_backend.sub(parseFloat(input));
            console.log('result', result);
            setResult(result)

            setInput('');
        }
    }

    async function handleMultiply() {
        if (input !== '') {
            const result = await calculator_backend.mul(parseFloat(input));
            console.log('result', result);
            setResult(result)

            setInput('');
        }
    }

    async function handleDivide() {
        if (input !== '') {
            const result = await calculator_backend.div(parseFloat(input));
            console.log('result', result);
            setResult(result)

            setInput('');
        }
    }

    async function handlePower() {
        if (input !== '') {
            const result = await calculator_backend.power(parseFloat(input));
            console.log('result', result);
            setResult(result)
            setInput('');

        }
    }

    async function handleSqrt() {
        if (input !== '') {
            const result = await calculator_backend.sqrt();
            console.log('Square Root Called!')
            console.log('result', result);
            setResult(result)
            setInput('');

        }
    }

    async function handleClear() {
        const result = await calculator_backend.reset();
        console.log('Reset!');
        setInput('');
        setResult(0)
    }


    function handleClick(number) {
        setInput(input + number);
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">

            <div className="flex flex-col items-center mb-4">
                <h1 className='text-4xl font-bold my-4'>Calculator</h1>
                <input type='number' value={input} onChange={handleInput} className="bg-gray-200 rounded-l-lg p-2 mb-2" />
                <h2 className='text-2xl text-blue-300'>Result: {result}</h2>
            </div>
            <div className="grid grid-cols-4 gap-2">

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg" onClick={() => handleClick('7')}>
                    7
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg" onClick={() => handleClick('8')}>
                    8
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg" onClick={() => handleClick('9')}>
                    9
                </button>

                <button onClick={handleAdd} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">+</button>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg" onClick={() => handleClick('4')}>
                    4
                </button>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg" onClick={() => handleClick('5')}>
                    5
                </button>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg" onClick={() => handleClick('6')}>
                    6
                </button>

                <button onClick={handleSubtract} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg'>
                    -
                </button>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg" onClick={() => handleClick('1')}>
                    1
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg" onClick={() => handleClick('2')}>
                    2
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg" onClick={() => handleClick('3')}>
                    3
                </button>

                <button onClick={handleMultiply} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg'>
                    *
                </button>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg" onClick={() => handleClick('0')}>
                    0
                </button>

                <button onClick={handleClear} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg'>
                    C
                </button>



                {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg" onClick={() => handleClick('floor')}>
                    ⌊⌋
                </button> */}

                <button onClick={handleDivide} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg'>
                    ÷
                </button>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg" onClick={handleSqrt}>
                    √
                </button>


            </div>
        </div>
    );
}

export default App;
