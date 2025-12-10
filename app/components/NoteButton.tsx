"use client";

import { useState } from "react";

interface NoteSvgProps {
  color?: string;
  className?: string;
  isActive?: boolean;
}

const NoteSvg: React.FC<NoteSvgProps> = ({ 
  color = '#00FFFF', 
  className = '',
  isActive = true
}) => {
  return (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
    width="128.000000pt" height="128.000000pt" viewBox="0 0 1280.000000 1280.000000"
    className={className}
    preserveAspectRatio="xMidYMid meet">
   <metadata>
   Created by potrace 1.15, written by Peter Selinger 2001-2017
   </metadata>
   
   <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)">
     <circle cx="6400" cy="6400" r="6000" 
     fill={isActive ? color : '#CCCCCC'} // Серый цвет для неактивного состояния
     stroke={isActive ? '#000000' : '#888888'}
     strokeWidth={isActive ? '200' : '100'}
     />
   </g>
   
   <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
      fill="black" stroke="none">
     
     <path d="M6100 12794 c-463 -31 -741 -68 -1090 -145 -865 -191 -1718 -582
   -2430 -1114 -1404 -1050 -2317 -2613 -2529 -4335 -32 -256 -41 -384 -48 -665
   -21 -907 151 -1803 509 -2647 74 -175 262 -548 358 -713 924 -1578 2489 -2696
   4270 -3050 1522 -303 3088 -50 4426 714 377 215 722 460 1049 745 152 132 453
   434 592 592 1184 1351 1743 3107 1558 4893 -67 639 -225 1250 -480 1851 -72
   168 -261 544 -355 705 -952 1625 -2575 2756 -4420 3079 -352 62 -624 86 -1030
   90 -179 2 -350 2 -380 0z m575 -574 c1305 -69 2469 -526 3475 -1364 170 -142
   523 -490 669 -661 691 -808 1151 -1787 1326 -2823 204 -1204 23 -2447 -515
   -3537 -290 -588 -639 -1073 -1110 -1546 -341 -342 -649 -588 -1044 -834 -782
   -489 -1636 -773 -2586 -861 -252 -24 -728 -24 -980 0 -993 91 -1876 395 -2685
   924 -1103 721 -1931 1787 -2346 3022 -414 1234 -408 2535 16 3767 227 660 577
   1276 1049 1843 156 189 521 553 711 711 598 497 1227 846 1954 1084 652 213
   1385 311 2066 275z"/>
     
     <path d="M3910 9663 c-426 -45 -829 -225 -1133 -504 l-69 -62 203 -203 203
   -203 55 48 c218 187 454 298 726 341 105 17 326 14 440 -5 255 -42 522 -173
   712 -347 l44 -42 200 200 c110 109 198 204 197 210 -6 23 -169 159 -283 236
   -263 178 -576 293 -887 327 -91 10 -329 12 -408 4z"/>
     
     <path d="M8370 9654 c-282 -36 -580 -147 -819 -304 -99 -65 -219 -160 -276
   -219 l-39 -41 201 -202 201 -201 70 61 c294 253 646 369 1033 341 296 -22 576
   -139 808 -339 l73 -63 201 201 201 202 -39 41 c-102 104 -295 241 -465 328
   -340 174 -760 245 -1150 195z"/>
     
     <path d="M3975 8196 c-190 -47 -339 -195 -390 -387 -19 -69 -19 -199 0 -268
   45 -169 184 -317 351 -372 338 -112 695 145 697 501 1 97 -17 168 -62 255 -70
   136 -211 243 -359 274 -68 14 -173 13 -237 -3z"/>
     
     <path d="M8503 8196 c-185 -47 -332 -190 -387 -376 -10 -33 -17 -91 -17 -145
   0 -151 41 -252 148 -365 160 -170 400 -215 612 -115 136 65 257 213 290 355
   15 66 13 197 -4 263 -43 167 -175 310 -340 368 -75 27 -227 34 -302 15z"/>
     
     <path d="M3560 4474 l-245 -245 75 -71 c1144 -1084 2747 -1468 4260 -1022 484
   143 947 376 1357 683 206 154 473 388 473 414 0 11 -472 487 -483 487 -5 0
   -51 -40 -102 -88 -242 -232 -611 -484 -921 -628 -1007 -471 -2136 -471 -3146
   -1 -309 144 -670 390 -919 626 -54 50 -99 91 -101 91 -2 0 -113 -111 -248
   -246z"/>
   </g>
   </svg>      
  );
};

// Основной компонент
export const NoteButton: React.FC<NoteSvgProps> = () => {

  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(true); // Состояние активности кнопки

  const handleNoteClick = (noteName: string, noteId: string) => {
    console.log(`Clicked note: ${noteName} (${noteId})`);
    
    // Делаем кнопку неактивной после нажатия
    setIsActive(false);
    setIsPressed(true);
    
    // Можно также добавить задержку для визуальной обратной связи
    setTimeout(() => {
      setIsPressed(false);
    }, 150);
  };

  const handleMouseEnter = () => {
    if (isActive) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPressed(false);
  };

  const handleMouseDown = () => {
    if (isActive) {
      setIsPressed(true);
    }
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  return (
    <div className='w-1/8'>
      <button 
        className={`
          note w-[100%] h-[100%] note-up mt-8
          transition-all duration-200 ease-in-out
          ${isHovered && isActive ? 'scale-105' : ''}
          ${isPressed ? 'scale-95' : ''}
          ${!isActive ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer hover:shadow-lg'}
        `}
        onClick={() => isActive && handleNoteClick('ЛЯ2', 'ля2')}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        disabled={!isActive} // Отключаем кнопку
        aria-label="ЛЯ2 нота"
        title={isActive ? "Нажмите чтобы воспроизвести ноту" : "Нота уже была воспроизведена"}
      >
        <NoteSvg 
          color={isHovered && isActive ? "#00BBFF" : "#00FFFF"} // Темнее при наведении
          className="w-full h-full transition-transform duration-200"
          isActive={isActive}
        />
        
        {/* Индикатор нажатия (опционально) */}
        {isPressed && isActive && (
          <div className="absolute inset-0 bg-black/10 rounded-full"></div>
        )}
        
        {/* Текст ноты (опционально) */}
        <div className={`
          absolute bottom-2 left-0 right-0 text-center
          font-bold text-white text-lg
          ${!isActive ? 'text-gray-400' : 'text-white'}
          transition-colors duration-200
        `}>
          ЛЯ2
        </div>
      </button>
    </div>
  );
};