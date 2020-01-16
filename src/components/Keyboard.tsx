import React, { useState } from 'react';
import './Keyboard.css';

type PianoKey = {
  whiteKeyId: number;
  whiteKeyName?: string;
  blackKeyId?: number;
  blackKeyName?: string;
  blackKeyNameAlt?: string;
}

const pianoKeys: PianoKey[] = [
  { whiteKeyId: 16, whiteKeyName: "C" },
  { whiteKeyId: 18, whiteKeyName: "D", blackKeyId: 17, blackKeyName: "D\u266D", blackKeyNameAlt: "C\u266F" },
  { whiteKeyId: 20, whiteKeyName: "E", blackKeyId: 19, blackKeyName: "E\u266D", blackKeyNameAlt: "D\u266F" },
  { whiteKeyId: 21, whiteKeyName: "F" },
  { whiteKeyId: 23, whiteKeyName: "G", blackKeyId: 22, blackKeyName: "G\u266D", blackKeyNameAlt: "F\u266F" },
  { whiteKeyId: 25, whiteKeyName: "A", blackKeyId: 24, blackKeyName: "A\u266D", blackKeyNameAlt: "G\u266F" },
  { whiteKeyId: 27, whiteKeyName: "B", blackKeyId: 26, blackKeyName: "B\u266D", blackKeyNameAlt: "A\u266F" },
  { whiteKeyId: 28, whiteKeyName: "C" },
  { whiteKeyId: 30, whiteKeyName: "D", blackKeyId: 29, blackKeyName: "D\u266D", blackKeyNameAlt: "C\u266F" },
  { whiteKeyId: 32, whiteKeyName: "E", blackKeyId: 31, blackKeyName: "E\u266D", blackKeyNameAlt: "D\u266F" },
  { whiteKeyId: 33, whiteKeyName: "F" },
  { whiteKeyId: 35, whiteKeyName: "G", blackKeyId: 34, blackKeyName: "G\u266D", blackKeyNameAlt: "F\u266F" },
  { whiteKeyId: 37, whiteKeyName: "A", blackKeyId: 36, blackKeyName: "A\u266D", blackKeyNameAlt: "G\u266F" },
  { whiteKeyId: 39, whiteKeyName: "B", blackKeyId: 38, blackKeyName: "B\u266D", blackKeyNameAlt: "A\u266F" },
  { whiteKeyId: 40, whiteKeyName: "C" },
  { whiteKeyId: 42, whiteKeyName: "D", blackKeyId: 41, blackKeyName: "D\u266D", blackKeyNameAlt: "C\u266F" },
  { whiteKeyId: 44, whiteKeyName: "E", blackKeyId: 43, blackKeyName: "E\u266D", blackKeyNameAlt: "D\u266F" },
  { whiteKeyId: 45, whiteKeyName: "F" },
  { whiteKeyId: 47, whiteKeyName: "G", blackKeyId: 46, blackKeyName: "G\u266D", blackKeyNameAlt: "F\u266F" },
  { whiteKeyId: 49, whiteKeyName: "A", blackKeyId: 48, blackKeyName: "A\u266D", blackKeyNameAlt: "G\u266F" },
  { whiteKeyId: 51, whiteKeyName: "B", blackKeyId: 50, blackKeyName: "B\u266D", blackKeyNameAlt: "A\u266F" },
  { whiteKeyId: 52, whiteKeyName: "C" },
  { whiteKeyId: 54, whiteKeyName: "D", blackKeyId: 53, blackKeyName: "D\u266D", blackKeyNameAlt: "C\u266F" },
  { whiteKeyId: 56, whiteKeyName: "E", blackKeyId: 55, blackKeyName: "E\u266D", blackKeyNameAlt: "D\u266F" },
  { whiteKeyId: 57, whiteKeyName: "F" },
  { whiteKeyId: 59, whiteKeyName: "G", blackKeyId: 58, blackKeyName: "G\u266D", blackKeyNameAlt: "F\u266F" },
  { whiteKeyId: 61, whiteKeyName: "A", blackKeyId: 60, blackKeyName: "A\u266D", blackKeyNameAlt: "G\u266F" },
  { whiteKeyId: 63, whiteKeyName: "B", blackKeyId: 62, blackKeyName: "B\u266D", blackKeyNameAlt: "A\u266F" },
  { whiteKeyId: 64, whiteKeyName: "C" }
];

interface IProps {
  showNames: boolean;
  onKeyPress(keyId: number): void;
};

const Keyboard: React.FC<IProps> = (props) => {

  const keys = pianoKeys.map((key) =>
    <li key={key.whiteKeyId}>
      <div className="anchor" onClick={() => props.onKeyPress(key.whiteKeyId)}>{props.showNames && key.whiteKeyName}</div>
      {key.blackKeyId && <span className="blackkey" onClick={() => props.onKeyPress(key.blackKeyId!)}>
        {props.showNames && <span>{key.blackKeyName}</span>}
        {props.showNames && <span>{key.blackKeyNameAlt}</span>}
      </span>}
    </li>
  );

  return (
    <div id="p-wrapper">
      <ul id="piano">
        {keys}
      </ul>
    </div>
  );

}

export default Keyboard;