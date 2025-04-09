import React, { useState } from 'react';

function App() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [urlMap, setUrlMap] = useState({});

  const generateShortUrl = () => {
    const randomKey = Math.random().toString(36).substring(2, 8);
    const newShortUrl = `https://short.ly/${randomKey}`;
    
    // 메모리에 저장
    setUrlMap({ ...urlMap, [newShortUrl]: originalUrl });
    setShortUrl(newShortUrl);
  };

  return (
    <div style={{ padding: 30 }}>
      <h1>🔗 URL 단축기</h1>
      <input
        type="text"
        placeholder="긴 URL을 입력하세요"
        value={originalUrl}
        onChange={(e) => setOriginalUrl(e.target.value)}
        style={{ width: '300px', padding: '8px' }}
      />
      <button onClick={generateShortUrl} style={{ marginLeft: 10 }}>
        줄이기
      </button>

      {shortUrl && (
        <div style={{ marginTop: 20 }}>
          <p>📎 단축 URL: <a href={originalUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a></p>
        </div>
      )}
    </div>
  );
}

export default App;
