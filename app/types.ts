// types.ts
export interface NoteData {
  name: 'ДО' | 'РЕ' | 'МИ' | 'ФА' | 'СОЛЬ' | 'ЛЯ' | 'СИ';
  positionClass: string;
  colorClass: string;
}

export interface NoteProps extends NoteData {
  onNoteClick: (noteName: NoteData['name']) => void;
}