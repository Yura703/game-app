'use client';

import { useState } from 'react';

export default function Home() {
  
  
    

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 p-4 md:p-8">
      <main className="max-w-6xl mx-auto wrapper">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-2">
          НОТЫ
        </h1>
        
        <div className="relative bg-white rounded-2xl shadow-xl p-4 md:p-8 mt-4">
          
          {/* Нотный стан */}
          <div className="relative h-[300px] md:h-[300px] w-full mt-[100px] mb-[100px]">
            <div className='w-full flex h-[20%] border-t-2 border-gray-800'>
              <div className='w-1/8'>
                <div className='key w-[100%] h-[500%]'></div>
              </div>
              <div className='w-1/8'></div>
              <div className='w-1/8'></div>
              <div className='w-1/8'></div>
              <div className='w-1/8'></div>
              <div className='w-1/8'></div>
              <div className='w-1/8'></div>
              <div className='w-1/8'></div>
            </div>
            <div className='w-full flex h-[20%] border-t-2 border-gray-800'>
              <div className='w-1/8'></div>
              <div className='w-1/8'></div>
              <div className='w-1/8'></div>
              <div className='w-1/8'></div>
              <div className='w-1/8'></div>
              <div className='w-1/8'></div>
              <div className='w-1/8'></div>
              <div className='w-1/8'><button className='note w-[100%] h-[100%] note-up mt-8'></button></div>
            </div>
            <div className='w-full flex h-[20%] border-t-2 border-gray-800'>
              <div className='w-1/8'></div>
              <div className='w-1/8'></div>
              <div className='w-1/8'></div>
              <div className='w-1/8'></div>
              <div className='w-1/8'></div>
              <div className='w-1/8'><button className='note w-[100%] h-[100%] note-up mt-8'></button></div>
              <div className='w-1/8'><button className='note w-[100%] h-[100%]'></button></div>
              <div className='w-1/8'></div>
            </div>

            <div className='w-full flex h-[20%] border-t-2 border-gray-800'>
              <div className='w-1/8'></div>
              <div className='w-1/8'></div>
              <div className='w-1/8'></div>
              <div className='w-1/8'>
                <button className='note w-[100%] h-[100%] note-up mt-8'></button>
              </div>
              <div className='w-1/8'>
                <button className='note w-[100%] h-[100%]'></button>
              </div>
              <div className='w-1/8'></div>
              <div className='w-1/8'></div>
              <div className='w-1/8'></div>
            </div>

            <div className='w-full flex h-[20%] border-t-2 border-gray-800'>
              <div className='w-1/8'></div>
              <div className='w-1/8  border-b-2 border-gray-800'>
                <button className='note w-[100%] h-[100%] note-up mt-8'></button>
              </div>
              <div className='w-1/8'>
                <button className='note w-[100%] h-[100%]'              
                
                ></button>
              </div>
              <div className='w-1/8'></div>
              <div className='w-1/8'></div>
              <div className='w-1/8'></div>
              <div className='w-1/8'></div>
              <div className='w-1/8'></div>
            </div>
            
            <div className='w-full flex flex-center h-[20%] '>
              <div className='w-1/8'></div>
              <div className='w-1/8'>ДО</div>
              <div className='w-1/8'>РЕ</div>
              <div className='w-1/8'>МИ</div>
              <div className='w-1/8'>ФА</div>
              <div className='w-1/8'>СОЛЬ</div>
              <div className='w-1/8'>ЛЯ</div>
              <div className='w-1/8'>СИ</div>
            </div>
            {/* <div className="absolute inset-0">
             
              <div className="absolute left-[25%] top-[23%]">
                <MusicalNote 
                  note="ДО" 
                  isActive={activeNotes.includes('ДО')}
                  onClick={() => handleNoteClick('ДО')}
                />
              </div>
              
              
            </div> */}
          </div>      
        </div>
        
        
        
        <footer className="mt-8 text-center text-gray-500 text-sm">
         
        </footer>
      </main>
    </div>
  );
}