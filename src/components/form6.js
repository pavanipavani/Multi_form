import React, { useState } from 'react';


function StepSix({ data, onNext ,onPrevious}) {
  const [accountemail, setAccountemail] = useState('');
  

  const handleNext = () => {
    onNext({ ...data, accountemail });
  };

  return (
    <div className='max-w-300 w-[650px] h-[500px] p-6 bg-white rounded-lg shadow-md mt-[100px] ml-[450px]'>
      <h2 className="text-xl font-semibold mb-10">Amie</h2>
       <div className="flex justify-between">
            <button onClick={onPrevious} className="mb-7 bg-white-300 border border-gray-200 text-gray-800  py-2 px-4 rounded"><p> &larr; Back</p></button>
        </div>
        <div className="mb-4">
        <h3 className="text-lg mt-10 mb-3 font-bold">Which emails would you like to connect?</h3>
        
        <p className="  text-[16px] text-gray-600 mb-5 flex justify-between">This helps us understand if it's multiple personal emails or your work accounts.</p>
        <input
          type="email"
          placeholder="account@refero.design"
          value={accountemail}
          onChange={(e) => setAccountemail(e.target.value)}
          className="border border-gray rounded-[10px] py-2 px-3 block w-[330px] mb-20"
        />
      </div>
      <div className="flex justify-between">
        <button onClick={handleNext} disabled={!accountemail} className=" hover:bg-blue-700 text-white font-bold py-2 px-4 w-[80px] rounded-[10px] bg-black"> <p> Next&rarr; </p></button>
      </div>
    </div>
  );
}

export default StepSix;
