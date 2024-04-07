import React from "react";

function StepSeven({data,onNext,onPrevious}){
    const handleNext=()=>{
        onNext({...data})
    }
    return(
        
        <div className='max-w-300 w-[700px] h-[550px] p-6 bg-white rounded-lg shadow-md mt-[100px] ml-[400px]'>
            <div className="max-w-300">
                <img src="resources/followimage.jpeg" alt="images" className="w-[100%]"/>
            </div>
            <div className="flex justify-between">
                <button onClick={onPrevious} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"><p> &larr; Back</p></button>
                <button onClick={handleNext} className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-[10px] bg-black"><p>Next &rarr;</p></button>
            </div>    
        </div>
   
    )
}
export default StepSeven;