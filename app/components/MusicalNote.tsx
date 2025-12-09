// app/components/MusicalNote.tsx
'use client';

interface MusicalNoteProps {
  note: string;
  isActive: boolean;
  onClick: () => void;
}

export const MusicalNote = ({ note, isActive, onClick }: MusicalNoteProps) => {
  // Разные смайлики для каждой ноты
  const noteEmojiMap: Record<string, string> = {
    'ДО': '😊',
    'РЕ': '😄',
    'МИ': '😃',
    'ФА': '😁',
    'СОЛЬ': '🤩',
    'ЛЯ': '🥳',
    'СИ': '🎵'
  };
  
  const emoji = noteEmojiMap[note] || '🎵';
  
  return (
    <div 
      className={`relative transition-all duration-300 ${isActive ? 'opacity-50 scale-95' : 'opacity-100 hover:scale-110 hover:rotate-6'}`}
      onClick={onClick}
    >
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 100 100" 
        className="cursor-pointer drop-shadow-lg"
      >
        {/* Фон ноты - кружок */}
        <circle 
          cx="50" 
          cy="50" 
          r="45" 
          fill={isActive ? "#d1d5db" : "#fef3c7"} 
          stroke={isActive ? "#9ca3af" : "#f59e0b"} 
          strokeWidth="3"
          className="transition-all duration-300"
        />
        
        {/* Смайлик */}
        <text 
          x="50" 
          y="65" 
          textAnchor="middle" 
          fontSize="50" 
          fill={isActive ? "#6b7280" : "#92400e"}
          className="select-none"
        >
          {emoji}
        </text>
        
        {/* Эффект при наведении (только для неактивных нот) */}
        {!isActive && (
          <>
            <circle 
              cx="50" 
              cy="50" 
              r="48" 
              fill="transparent" 
              stroke="#fbbf24" 
              strokeWidth="2"
              strokeDasharray="5,5"
              className="animate-pulse"
            />
          </>
        )}
        
        {/* Эффект нажатия */}
        <circle 
          cx="50" 
          cy="50" 
          r="45" 
          fill="transparent" 
          className="hover:fill-yellow-100 hover:fill-opacity-30 transition-all duration-200"
        />
      </svg>
      
      {/* Название ноты под смайликом */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
        <span className="text-sm font-semibold text-gray-700 bg-white bg-opacity-80 px-2 py-1 rounded-md shadow-sm">
          {note}
        </span>
      </div>
    </div>
  );
};