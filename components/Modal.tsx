import React, { Dispatch, SetStateAction } from "react";

type Props = {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  isToken: boolean;
};

export default function Modal({ show, setShow, isToken }: Props) {
  if (isToken) {
  return (
    <>
      {show ? (
        <div className="fixed top-10 flex items-center justify-center p-10 left-0 right-0 bottom-0 bg-opacity-20 bg-black z-10">
        <div className="bg-black p-10 rounded-lg max-w-2xl z-50 relative overflow-y-scroll">
          <div
            className="absolute top-5 right-5 bg-gray-300 p-3 rounded-full hover:bg-gray-400 transition-all cursor-pointer"
            onClick={() => setShow(false)}
          >
            <img
              src="https://iconape.com/wp-content/png_logo_vector/cross-2.png"
              className="h-3 w-3"
            />
          </div>
          <div className="font-bold text-white text-2xl">Mint with Tokens!</div>
          <div className='mt-2 text-blue-400 text-center pb-2'>
              <h4 className=''>1 NFT costs {0} TKN</h4>
            </div>
          <div className='flex items-center m-5 space-x-2 text-white bg-[#061114] border-[#293542] border p-4'>
            <p className='extra'>AMOUNT</p>
            <input className='flex w-full bg-transparent text-right outline-none' type='number' />
          </div>
          <div className='flex extra justify-between items-center text-right text-white pb-2'>
              <h4 className='extra'>Price Per Entry</h4>
              <p className='extra'>{0} TKN</p>
            </div>
          <div className="mt-5 space-y-2 space-x-3">
          <div className='flex items-center justify-between text-blue-400 text-sm italic font-extrabold'>
                <p className='extra'>Total cost</p>
                <p className='extra'>{0} TKN</p>
              </div>
              <div className='flex items-center justify-between text-blue-400 text-xs italic'>
                <p className='extra'>+ Network Fees</p>
                <p className='extra'>TBC</p>
              </div>
            <button className="px-5 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all">
               Approve to Mint
            </button>
          </div>
        </div>
      </div>
      ) : null
      }
    </>
  );
    } else {
      return (
        <>
          {show ? (
        <div className="fixed top-10 flex items-center justify-center p-10 left-0 right-0 bottom-0 bg-opacity-20 bg-black z-10">
        <div className="bg-black p-10 rounded-lg max-w-2xl z-50 relative overflow-y-scroll">
          <div
            className="absolute top-5 right-5 bg-gray-300 p-3 rounded-full hover:bg-gray-400 transition-all cursor-pointer"
            onClick={() => setShow(false)}
          >
            <img
              src="https://iconape.com/wp-content/png_logo_vector/cross-2.png"
              className="h-3 w-3"
            />
          </div>
          <div className="font-bold text-white text-2xl">Mint with ETH!</div>
          <div className='mt-2 text-blue-400 text-center pb-2'>
              <h4 className=''>1 NFT costs {0} ETH</h4>
            </div>
          <div className='flex items-center m-5 space-x-2 text-white bg-[#061114] border-[#293542] border p-4'>
            <p className='extra'>AMOUNT</p>
            <input className='flex w-full bg-transparent text-right outline-none' type='number' />
          </div>
          <div className='flex extra justify-between items-center text-right text-white pb-2'>
              <h4 className='extra'>Price Per Entry</h4>
              <p className='extra'>{0} ETH</p>
            </div>
          <div className="mt-5 space-y-2 space-x-3">
          <div className='flex items-center justify-between text-blue-400 text-sm italic font-extrabold'>
                <p className='extra'>Total cost</p>
                <p className='extra'>{0} ETH</p>
              </div>
              <div className='flex items-center justify-between text-blue-400 text-xs italic'>
                <p className='extra'>+ Network Fees</p>
                <p className='extra'>TBC</p>
              </div>
            <button className="px-5 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all">
               Mint
            </button>
          </div>
        </div>
      </div>
          ) : null
          }
        </>
      );
    }
}
