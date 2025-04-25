import React, { useState, useEffect } from 'react';
import AgeVerification from './pages/AgeVerification';
// import Home from './pages/Home'; // Nanti, setelah age gate lolos

function App() {
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('ageVerified') === 'true') {
      setVerified(true);
    }
  }, []);

  if (!verified) {
    return <AgeVerification onVerified={() => setVerified(true)} />;
  }

  // Setelah verifikasi umur, tampilkan halaman utama (katalog game).
  return (
    <div>
      <h1>Selamat Datang di Game Dewasa +18</h1>
      {/* <Home /> */}
      <p>Katalog game akan ditampilkan di sini...</p>
    </div>
  );
}

export default App;
