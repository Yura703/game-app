'use client';

import { useState } from 'react';

export default function Home() {
  const [activeNote, setActiveNote] = useState<string>('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [teamScores, setTeamScores] = useState([0, 0, 0, 0]);

    // Функция для открытия попапа
  const handleNoteClick = (noteName: string, noteSymbol: string) => {
    setActiveNote(noteName);
    setIsPopupOpen(true);
  };

  // Функция для закрытия попапа
  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setActiveNote('');
  };  

  const increaseScore = (teamIndex: number) => {
    setTeamScores(prev => {
      const newScores = [...prev];
      newScores[teamIndex] += 1;
      return newScores;
    });
  };
  
  const decreaseScore = (teamIndex: number) => {
    setTeamScores(prev => {
      const newScores = [...prev];
      newScores[teamIndex] = Math.max(0, newScores[teamIndex] - 1);
      return newScores;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 p-4 md:p-8">
      <main className="max-w-6xl mx-auto wrapper">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-2">НОТЫ</h1>
        
        {/* Блок команд с очками */}
<div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-6 md:mb-8">
  {['Команда 1', 'Команда 2', 'Команда 3', 'Команда 4'].map((team, index) => (
    <div key={index} className="flex flex-col items-center bg-white p-4 rounded-xl shadow-md min-w-[150px]">
      <h3 className="font-bold text-lg text-gray-800 mb-3">{team}</h3>
      <div className="flex items-center justify-center space-x-4">
        <button 
          className="w-10 h-10 flex items-center justify-center bg-red-100 hover:bg-red-200 text-red-600 rounded-full text-xl font-bold transition-colors"
          onClick={() => decreaseScore(index)}
        >
          -
        </button>
        <span className="text-2xl font-bold text-blue-600 min-w-[40px] text-center">{teamScores[index]}</span>
        <button 
          className="w-10 h-10 flex items-center justify-center bg-green-100 hover:bg-green-200 text-green-600 rounded-full text-xl font-bold transition-colors"
          onClick={() => increaseScore(index)}
        >
          +
        </button>
      </div>
      <p className="text-sm text-gray-500 mt-2">Очки</p>
    </div>
  ))}
</div>

        <div className=" bg-white rounded-2xl shadow-xl p-4 md:p-8 mt-4">
          
          {/* Нотный стан */}
          <div className=" h-[300px] md:h-[300px] w-full mt-[100px] mb-[100px]">
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
              <div className='w-1/8'>
                <button className='note w-[100%] h-[100%] note-up mt-8'
                  onClick={() => handleNoteClick('ЛЯ1', 'ля1')}>
                </button>
              </div>
            </div>
            <div className='w-full flex h-[20%] border-t-2 border-gray-800'>
              <div className='w-1/8'></div>
              <div className='w-1/8'></div>
              <div className='w-1/8'></div>
              <div className='w-1/8'></div>
              <div className='w-1/8'></div>
              <div className='w-1/8'>
                <button className='note w-[100%] h-[100%] note-up mt-8'
                  onClick={() => handleNoteClick('ЛЯ2', 'ля2')}>
                </button>
              </div>
              <div className='w-1/8'><button className='note w-[100%] h-[100%]'
                onClick={() => handleNoteClick('ЛЯ2', 'ля2')}>
              </button></div>
              <div className='w-1/8'></div>
            </div>

            <div className='w-full flex h-[20%] border-t-2 border-gray-800'>
              <div className='w-1/8'></div>
              <div className='w-1/8'></div>
              <div className='w-1/8'></div>
              <div className='w-1/8'>
                <button className='note w-[100%] h-[100%] note-up mt-8'
                  onClick={() => handleNoteClick('ЛЯ2', 'ля2')}>
                </button>
              </div>
              <div className='w-1/8'>
                <button className='note w-[100%] h-[100%]'
                  onClick={() => handleNoteClick('ЛЯ2', 'ля2')}>
                </button>
              </div>
              <div className='w-1/8'></div>
              <div className='w-1/8'></div>
              <div className='w-1/8'></div>
            </div>

            <div className='w-full flex h-[20%] border-t-2 border-gray-800'>
              <div className='w-1/8'></div>
              <div className='w-1/8  border-b-2 border-gray-800'>
                <button className='note w-[100%] h-[100%] note-up mt-8'
                  onClick={() => handleNoteClick('ЛЯ2', 'ля2')}>
                </button>
              </div>
              <div className='w-1/8'>
                <button className='note w-[100%] h-[100%]'              
                  onClick={() => handleNoteClick('ЛЯ2', 'ля2')}>
                </button>
              </div>
              <div className='w-1/8'></div>
              <div className='w-1/8'></div>
              <div className='w-1/8'></div>
              <div className='w-1/8'></div>
              <div className='w-1/8'></div>
            </div>
            
            <div className='w-full flex items-end text-center h-[20%] mt-[20px]'>
              <div className='w-1/8 text-2xl text-blue-600 font-bold'></div>
              <div className='w-1/8 text-2xl text-blue-600 font-bold'>ДО</div>
              <div className='w-1/8 text-2xl text-blue-600 font-bold'>РЕ</div>
              <div className='w-1/8 text-2xl text-blue-600 font-bold'>МИ</div>
              <div className='w-1/8 text-2xl text-blue-600 font-bold'>ФА</div>
              <div className='w-1/8 text-2xl text-blue-600 font-bold'>СОЛЬ</div>
              <div className='w-1/8 text-2xl text-blue-600 font-bold'>ЛЯ</div>
              <div className='w-1/8 text-2xl text-blue-600 font-bold'>СИ</div>
            </div>           
          </div>      
        </div>        
              
  {isPopupOpen && activeNote && (
  <div 
    className="fixed inset-0 bg-blue-300/30 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
    onClick={handleClosePopup}
  >
    <div 
      className="bg-white/95 rounded-2xl shadow-2xl w-[80vw] max-w-[1200px] relative max-h-[85vh] overflow-y-auto border-2 border-blue-100"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Кнопка закрытия */}
      <button
        onClick={handleClosePopup}
        className="absolute right-6 top-6 w-12 h-12 flex items-center justify-center text-gray-600 hover:text-gray-800 hover:bg-gray-100 text-3xl font-bold z-10 rounded-full transition-all duration-200"
      >
        ×
      </button>
      
      {/* Заголовок */}
      <div className="p-8 border-b border-gray-200">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Нота {activeNote}
        </h2>               
      </div>
      
      {/* Контент */}
      <div className="p-8">
        <div className="space-y-6">
          <div className="text-gray-700 text-lg leading-relaxed bg-gray-50 p-6 rounded-xl">
            <p className="font-semibold text-gray-800 mb-4">
              Вопрос 
            </p>
            <p className="mb-4">
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaa 
              aaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaa 
              aaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaa 
              aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaa 
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaa 
              aaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaa 
              aaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaa 
              aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaa
            </p>
            <p>
              оооооооооооооооооооооооооооооооооооооооооооооооооооооооооооо
              оооооооооооооооооооооооооооооооооооооооооооооооооооооооооооо
            </p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
            <h3 className="font-semibold text-blue-800 text-xl mb-4">Варианты ответов</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">ппппппппппппппппппп</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">вввввввввввввв</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">вввввввввввввввввв</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">ммммммммммммммммммм</span>
                </div>
              </div>
            </div>
          </div>          
          
          {/* Дополнительный контент */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-100 to-white p-6 rounded-xl shadow-sm">
              <h4 className="font-bold text-blue-700 mb-3">аааа</h4>
              <p className="text-gray-600 text-sm">
                аааааааааааааааа
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-white p-6 rounded-xl shadow-sm">
              <h4 className="font-bold text-green-700 mb-3">ммммммммммммммм</h4>
              <p className="text-gray-600 text-sm">
                ммммммммммммммммммммм
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-white p-6 rounded-xl shadow-sm">
              <h4 className="font-bold text-purple-700 mb-3">тттттттттттт</h4>
              <p className="text-gray-600 text-sm">
                тттттттттттттттттттттттт
              </p>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  </div>
)}
        
        <footer className="mt-8 text-center text-gray-500 text-sm">
         
        </footer>
      </main>
    </div>
  );
}