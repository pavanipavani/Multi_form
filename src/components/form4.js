import React, { useState } from "react";

function StepFour({ data, onPrevious, onNext }) {
    const [work, setWork] = useState('');

    const handleNext = () => {
        onNext({ ...data, work });
    };
    
    return (
        <div className='max-w-300 w-[650px] h-[1000px] p-6 bg-white rounded-lg shadow-md mt-[100px] ml-[350px]'>
            <h2 className="text-xl font-semibold mb-10">Amie</h2>
            <div className="flex justify-between">
                <button onClick={onPrevious} className="mb-7 bg-white-300 border border-gray-200 text-gray-800  py-2 px-4 rounded"><p> &larr; Back</p></button>
            </div>
            <div className="font-bold text-[16px]">What kind of work do you do ?</div>
            <div className="hover:border-red-700 mt-5 border border-gray mb-2 w-[110px] rounded-[10px]">
                <label className="border border-gray w-[110px] h-10 flex items-center rounded-[10px]">
                <span className="ml-2 border border-red w-5 text-center hover:bg-red-700 bg-gray-700 text-white h-6 rounded-[5px] text-[15px]">A</span>
                    <input
                        type="radio" 
                        value="student"
                        checked={work === 'student'}
                        onChange={() => setWork('student')}
                        className="mr-2 ml-2 appearance-none"
                    />
                    student
                </label>
            </div>
            <div className="hover:border-red-700  border border-gray mb-2 w-[95px] rounded-[10px]">
                <label className="border border-gray w-[95px] h-10 flex items-center rounded-[10px] ">
                <span className="ml-2 border border-red w-5 text-center hover:bg-red-700 bg-gray-700 text-white h-6 rounded-[5px] text-[15px]">B</span>
                    <input
                        type="radio"
                        value="sales"
                        checked={work === 'sales'}
                        onChange={() => setWork('sales')}
                        className="mr-2 ml-2 appearance-none"
                    />
                    sales
                </label>
            </div>
            <div className="hover:border-red-700 border border-gray mb-2 w-[135px] rounded-[10px]">
                <label className="border border-gray w-[135px] h-10 flex items-center rounded-[10px] ">
                <span className="ml-2 border border-red  pl-1 pr-1 h-6 text-center hover:bg-red-700 bg-gray-700 text-white rounded-[5px] text-[15px]">C</span>
                   <input
                        type="radio"
                        value="marketing"
                        checked={work === 'marketing'}
                        onChange={() => setWork('marketing')}
                        className="mr-2 ml-2 appearance-none"
                    />
                    marketing
                </label>
            </div>
            <div className="hover:border-red-700  border border-gray mb-2 w-[200px] rounded-[10px]">
                <label className="border border-gray w-[200px] h-10 flex items-center rounded-[10px] ">
                <span className="ml-2 border border-red w-5 text-center pl-1 pr-1 hover:bg-red-700 bg-gray-700 text-white h-6 rounded-[5px] text-[15px]">D</span>
                    <input
                        type="radio"
                        value="finance/accounting"
                        checked={work === 'finance/accounting'}
                        onChange={() => setWork('finance/accounting')}
                        className="mr-2 ml-2 appearance-none"
                    />
                   finance/accounting
                </label>
            </div >
            <div className="hover:border-red-700  border border-gray mb-2 w-[180px] rounded-[10px]">
                <label className="border border-gray w-[180px] h-10 flex items-center rounded-[10px] ">
                <span className="ml-2 border border-red w-5 text-center hover:bg-red-700 bg-gray-700 text-white h-6 rounded-[5px] text-[15px]">E</span>
                    <input
                        type="radio"
                        value="venture capital"
                        checked={work === 'venture capital'}
                        onChange={() => setWork('venture capital')}
                        className="mr-2 ml-2 appearance-none"
                    />
                    venture capital
                </label>
            </div>
            <div className="hover:border-red-700 border border-gray mb-2 w-[110px] rounded-[10px]">
                <label className="border border-gray w-[110px] h-10 flex items-center rounded-[10px]">
                <span className="ml-2 border border-red w-5 text-center pl-1 pr-1 hover:bg-red-700 bg-gray-700 text-white h-6 rounded-[5px] text-[15px]">F</span>
                    <input
                        type="radio" 
                        value="design"
                        checked={work === 'design'}
                        onChange={() => setWork('design')}
                        className="mr-2 ml-2 appearance-none"
                    />
                    design
                </label>
            </div>
            <div className="hover:border-red-700  border border-gray mb-2 w-[210px] rounded-[10px]">
                <label className="border border-gray w-[210px] h-10 flex items-center rounded-[10px] ">
                <span className="ml-2 border border-red w-5 text-center hover:bg-red-700 bg-gray-700 text-white h-6 rounded-[5px] text-[15px]">G</span>
                    <input
                        type="radio"
                        value="executive assistance "
                        checked={work === 'executive assistance'}
                        onChange={() => setWork('executive assistance')}
                        className="mr-2 ml-2 appearance-none"
                    />
                    executive assistance
                </label>
            </div>
            <div className="hover:border-red-700 border border-gray mb-2 w-[140px] rounded-[10px]">
                <label className="border border-gray w-[140px] h-10 flex items-center rounded-[10px] ">
                <span className="ml-2 border border-red w-5 pl-1 pr-1 text-center hover:bg-red-700 bg-gray-700 text-white h-6 rounded-[5px] text-[15px]">H</span>
                    <input
                        type="radio"
                        value="operations"
                        checked={work === 'operations'}
                        onChange={() => setWork('operations')}
                        className="mr-2 ml-2 appearance-none"
                    />
                    operations
                </label>
            </div>
            <div className="hover:border-red-700  border border-gray mb-2 w-[180px] rounded-[10px]">
                <label className="border border-gray w-[180px] h-10 flex items-center rounded-[10px] ">
                <span className="ml-2 border border-red w-5 pl-1 pr-1 text-center hover:bg-red-700 bg-gray-700 text-white h-6 rounded-[5px] text-[15px]">I</span>
                    <input
                        type="radio"
                        value="recruiting/people appearance-none"
                        checked={work === 'recruiting/people'}
                        onChange={() => setWork('recruiting/people')}
                        className="mr-2 ml-2 appearance-none"
                    />
                  recruiting/people
                </label>
            </div >
            <div className="hover:border-red-700  border border-gray mb-2 w-[140px] rounded-[10px]">
                <label className="border border-gray w-[140px] h-10 flex items-center rounded-[10px] ">
                <span className="ml-2 border border-red w-5 pl-1 pr-1 text-center hover:bg-red-700 bg-gray-700 text-white h-6 rounded-[5px] text-[15px]">J</span>
                    <input
                        type="radio"
                        value="engineering"
                        checked={work === 'engineering'}
                        onChange={() => setWork('engineering')}
                        className="mr-2 ml-2 appearance-none" 
                    />
                    engineering
                </label>
            </div>
            <div className="hover:border-red-700  border border-gray mb-2 w-[110px] rounded-[10px]">
                <label className="border border-gray w-[110px] h-10 flex items-center rounded-[10px] ">
                <span className="ml-2 border border-red w-5 pl-1 pr-1 text-center hover:bg-red-700 bg-gray-700 text-white h-6 rounded-[5px] text-[15px]">K</span>
                    <input
                        type="radio"
                        value="founder"
                        checked={work === 'founder'}
                        onChange={() => setWork('founder')}
                        className="mr-2 ml-2 appearance-none"
                    />
                founder
                </label>
            </div >
            <div className="hover:border-red-700  border border-gray mb-2 w-[110px] rounded-[10px]">
                <label className="border border-gray w-[110px] h-10 flex items-center rounded-[10px] ">
                <span className="ml-2 border border-red w-5 pl-1 pr-1 text-center hover:bg-red-700 bg-gray-700 text-white h-6 rounded-[5px] text-[15px]">L</span>
                    <input
                        type="radio"
                        value="product"
                        checked={work === 'product'}
                        onChange={() => setWork('product')}
                        className="mr-2 ml-2 appearance-none"
                    />
                    product
                </label>
            </div>
            <div className="hover:border-red-700 border border-gray mb-2 w-[90px] rounded-[10px]">
                <label className="border border-gray w-[90px] h-10 flex items-center rounded-[10px]">
                <span className="ml-2 border border-red w-5 text-center hover:bg-red-700 bg-gray-700 text-white h-6 rounded-[5px] text-[15px]">M</span>
                    <input
                        type="radio" 
                        value="other"
                        checked={work === 'other'}
                        onChange={() => setWork('other')}
                        className="mr-2 ml-2 appearance-none"
                    />
                    other
                </label>
            </div>
            <div className="flex justify-between">
                <button onClick={handleNext} className=" rounded-[15px] mt-10 hover:bg-blue-700 text-white font-bold py-2 px-3  bg-black"><p>Next &rarr;</p></button>
            </div>
        </div>
    );
}
export default StepFour;
