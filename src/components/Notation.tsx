import React, { useEffect } from "react";
import { NotationService } from './NotationService';
import { PianoNote } from '../core/PianoNote';
import $ from 'jquery';
import './Notation.css';


interface IProps {
  notes: PianoNote[];
  showNames: boolean;
  onNoteClick(noteIndex: number): void;
};

const notationService = new NotationService();

const Notation: React.FC<IProps> = (props) => {

  const svg = notationService.renderNotation(props.notes, props.showNames)

  useEffect(() => {
    $("g.note").off().on('click', function () { props.onNoteClick(this.id as any); });
  });

  return (
    <div id="notation" className="container" dangerouslySetInnerHTML={{ __html: svg }} />
  );

}

export default Notation;
