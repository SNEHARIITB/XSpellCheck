import React, { useState } from 'react';

const customDictionary = {
  teh: 'the',
  wrok: 'work',
  fot: 'for',
  exampl: 'example'
};

const XSpellCheck = () => {
  const [text, setText] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const handleChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);

    if (inputText.trim() === '') {
      setSuggestion('');
      return;
    }

    
    const words = inputText.split(/\s+/);
    const misspelledWord = words.find((word) => {
      const lowerWord = word.toLowerCase();
      return Object.keys(customDictionary).includes(lowerWord);
    });

    if (misspelledWord) {
      const corrected = customDictionary[misspelledWord.toLowerCase()] || " ";
      setSuggestion(`Did you mean: ${corrected}?`);
    } else {
      setSuggestion('');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', maxWidth: '500px', margin: 'auto' }}>
      <h2>Spell Check and Auto-Correction</h2>
      <textarea
        rows="5"
        cols="50"
        value={text}
        onChange={handleChange}
        placeholder="Enter text..."
        style={{ padding: '10px', fontSize: '16px', width: '100%' }}
      />
      {suggestion && (
        <p style={{ marginTop: '10px', color: '#d35400', fontWeight: 'bold' }}>{suggestion}</p>
      )}
    </div>
  );
};

export default XSpellCheck;
