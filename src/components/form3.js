import React, { useState } from "react";

function StepThree({ data, onPrevious, onNext }) {
    const [todo, setTodo] = useState('');

    const handleNext = () => {
        onNext({ ...data, todo });
    };
    
    return (
        <div className='max-w-300 w-[650px] h-[550px] p-6 bg-white rounded-lg shadow-md mt-[100px] ml-[450px]'>
            <h2 className="text-xl font-semibold mb-10">Amie</h2>
            <div className="flex justify-between">
                <button onClick={onPrevious} className="mb-7 bg-white-300 border border-gray-200 text-gray-800  py-2 px-4 rounded"><p> &larr; Back</p></button>
            </div>
            <div className="font-bold text-[16px]">how many of your calendar events are todos(no one elseis invided)? *</div>
            <div className="hover:border-red-700 mt-5 border border-gray mb-2 w-[140px] rounded-[10px]">
                <label className="border border-gray w-[140px] h-10 flex items-center rounded-[10px]">
                <span className="ml-2 border border-red w-5 text-center hover:bg-red-700 bg-gray-700 text-white h-6 rounded-[5px] text-[15px]">A</span>
                    <input
                        type="radio" 
                        value="3+ per day"
                        checked={todo === '3+ per day'}
                        onChange={() => setTodo('3+ per day')}
                        className="mr-2  ml-2 appearance-none"
                    />
                    3+ per day
                </label>
            </div>

            <div className="hover:border-red-700  border border-gray mb-2 w-[140px] rounded-[10px]">
                <label className="border border-gray w-[140px] h-10 flex items-center rounded-[10px] ">
                <span className="ml-2 border border-red w-5 text-center hover:bg-red-700 bg-gray-700 text-white h-6 rounded-[5px] text-[15px]">B</span>
                    <input
                        type="radio"
                        value="1-2 per day"
                        checked={todo === '1-2 per day'}
                        onChange={() => setTodo('1-2 per day')}
                        className="mr-2 ml-2 appearance-none"   
                    />
                    1-2 per day
                </label>
            </div>
            <div className="hover:border-red-700 border border-gray mb-2 w-[153px] rounded-[10px]">
                <label className="border border-gray w-[153px] h-10 flex items-center rounded-[10px] ">
                <span className="ml-2 border border-red w-5 text-center hover:bg-red-700 bg-gray-700 text-white h-6 rounded-[5px] text-[15px]">C</span>
                    <input
                        type="radio"
                        value="few per week"
                        checked={todo === 'few per week'}
                        onChange={() => setTodo('few per week')}
                        className="mr-2 ml-2 appearance-none"
                    />
                    few per week
                </label>
            </div>
            <div className="hover:border-red-700  border border-gray mb-2 w-[163px] rounded-[10px]">
                <label className="border border-gray w-[163px] h-10 flex items-center rounded-[10px] ">
                <span className="ml-2 border border-red w-5 text-center hover:bg-red-700 bg-gray-700 text-white h-6 rounded-[5px] text-[15px]">D</span>
                    <input
                        type="radio"
                        value="few per month"
                        checked={todo === 'few per month'}
                        onChange={() => setTodo('few per month')}
                        className="mr-2 ml-2 appearance-none"
                    />
                   few per month
                </label>
            </div >
            <div className="hover:border-red-700  border border-gray mb-2 w-[250px] rounded-[10px]">
                <label className="border border-gray w-[250px] h-10 flex items-center rounded-[10px] ">
                <span className="ml-2 border border-red w-5 text-center hover:bg-red-700 bg-gray-700 text-white h-6 rounded-[5px] text-[15px]">E</span>
                    <input
                        type="radio"
                        value="i don't schedule my todos"
                        checked={todo === 'i dont schedule my todos'}
                        onChange={() => setTodo('i dont schedule my todos')}
                        className="mr-2 ml-2 appearance-none"
                    />
                    i don't schedule my todos
                </label>
            </div>
            <div className="flex justify-between">
                <button onClick={handleNext} className=" rounded-[15px] mt-10 hover:bg-blue-700 text-white font-bold py-2 px-3  bg-black"><p>Next &rarr;</p></button>
            </div>
        </div>
    );
}

export default StepThree;
