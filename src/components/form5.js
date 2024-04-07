import React, { useState } from "react";

function StepFive({ data, onPrevious, onNext }) {
    const [company, setCompany] = useState('');

    const handleNext = () => {
        onNext({ ...data, company });
    };
    
    return (
        <div className='max-w-300 w-[650px] h-[700px] p-6 bg-white rounded-lg shadow-md mt-[100px] ml-[450px]'>
            <h2 className="text-xl font-semibold mb-10">Amie</h2>
            <div className="flex justify-between">
                <button onClick={onPrevious} className="mb-7 bg-white-300 border border-gray-200 text-gray-800  py-2 px-4 rounded"><p> &larr; Back</p></button>
            </div>
            <div className="font-bold text-[16px]">how big is your company? *</div>
            <div className=" hover:border-red-700 mt-5 border border-gray mb-2 w-[110px] rounded-[10px]">
                <label className="border border-gray w-[110px] h-10 flex items-center rounded-[10px]">
                <span className="ml-2 border border-red w-5 text-center hover:bg-red-700 bg-gray-700 text-white h-6 rounded-[5px] text-[15px]">A</span>
                    <input
                        type="radio" 
                        value="just me"
                        checked={company === 'just me'}
                        onChange={() => setCompany('just me')}
                        className="mr-2 ml-2 appearance-none"
                    />
                   just me
                </label>
            </div>
            <div className="hover:border-red-700  border border-gray mb-2 w-[90px] rounded-[10px]">
                <label className="border border-gray w-[90px] h-10 flex items-center rounded-[10px] ">
                <span className="ml-2 border border-red w-5 text-center hover:bg-red-700 bg-gray-700 text-white h-6 rounded-[5px] text-[15px]">B</span>
                    <input
                        type="radio"
                        value="2-10"
                        checked={company === '2-10'}
                        onChange={() => setCompany('2-10')}
                        className="mr-2 ml-2 appearance-none"
                    />
                    2-10
                </label>
            </div>
            <div className="hover:border-red-700 border border-gray mb-2 w-[100px] rounded-[10px]">
                <label className="border border-gray w-[100px] h-10 flex items-center rounded-[10px] ">
                <span className="ml-2 border border-red  pl-1 pr-1 h-6 text-center hover:bg-red-700 bg-gray-700 text-white rounded-[5px] text-[15px]">C</span>
                    <input
                        type="radio"
                        value="11-25"
                        checked={company === '11-25'}
                        onChange={() => setCompany('11-25')}
                        className="mr-2 ml-2 appearance-none"
                    />
                    11-25
                </label>
            </div>
            <div className="hover:border-red-700  border border-gray mb-2 w-[100px] rounded-[10px]">
                <label className="border border-gray w-[100px] h-10 flex items-center rounded-[10px] ">
                <span className="ml-2 border border-red w-5 text-center pl-1 pr-1 hover:bg-red-700 bg-gray-700 text-white h-6 rounded-[5px] text-[15px]">D</span>
                    <input
                        type="radio"
                        value="26-50"
                        checked={company === '26-50'}
                        onChange={() => setCompany('26-50')}
                        className="mr-2 ml-2 appearance-none"
                    />
                  26-50
                </label>
            </div >
            <div className="hover:border-red-700  border border-gray mb-2 w-[115px] rounded-[10px]">
                <label className="border border-gray w-[115px] h-10 flex items-center rounded-[10px] ">
                <span className="ml-2 border border-red w-5 text-center hover:bg-red-700 bg-gray-700 text-white h-6 rounded-[5px] text-[15px]">E</span>
                    <input
                        type="radio"
                        value="51-100"
                        checked={company === '51-100'}
                        onChange={() => setCompany('51-100')}
                        className="mr-2 ml-2 appearance-none"
                    />
                   51-100
                </label>
            </div>
            <div className="hover:border-red-700 border border-gray mb-2 w-[120px] rounded-[10px]">
                <label className="border border-gray w-[120px] h-10 flex items-center rounded-[10px] ">
                <span className="ml-2 border border-red w-5 text-center pl-1 pr-1 hover:bg-red-700 bg-gray-700 text-white h-6 rounded-[5px] text-[15px]">F</span>
                    <input
                        type="radio"
                        value="101-250"
                        checked={company === '101-250'}
                        onChange={() => setCompany('101-250')}
                        className="mr-2 ml-2 appearance-none"
                    />
                   101-250
                </label>
            </div>
            <div className="hover:border-red-700  border border-gray mb-2 w-[120px] rounded-[10px]">
                <label className="border border-gray w-[120px] h-10 flex items-center rounded-[10px] ">
                <span className="ml-2 border border-red w-5 text-center hover:bg-red-700 bg-gray-700 text-white h-6 rounded-[5px] text-[15px]">G</span>
                    <input
                        type="radio"
                        value="251-500"
                        checked={company === '251-500'}
                        onChange={() => setCompany('251-500')}
                        className="mr-2 ml-2 appearance-none"
                    />
                 251-500
                </label>
            </div >
            <div className="hover:border-red-700  border border-gray mb-2 w-[90px] rounded-[10px]">
                <label className="border border-gray w-[90px] h-10 flex items-center rounded-[10px] ">
                <span className="ml-2 border border-red w-5 pl-1 pr-1 text-center hover:bg-red-700 bg-gray-700 text-white h-6 rounded-[5px] text-[15px]">H</span>
                    <input
                        type="radio"
                        value="500+"
                        checked={company === '500+'}
                        onChange={() => setCompany('500+')}
                        className="mr-2 ml-2 appearance-none"
                    />
                   500+
                </label>
            </div>
            <div className="flex justify-between">
                <button onClick={handleNext} className=" rounded-[15px] mt-10 hover:bg-blue-700 text-white font-bold py-2 px-3  bg-black"><p>Next &rarr;</p></button>
            </div>
        </div>
    );
}

export default StepFive;
