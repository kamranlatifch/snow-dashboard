import { useEffect, useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@components';
import { LeftSidebar } from '@pages';
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <>
      {/* <div>
        <button onClick={() => setIsDarkMode(!isDarkMode)}>
          Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
        <div className='bg-base text-text_primary dark:bg-black dark:text-text_primary_dark'>
          Your content here
        </div>
        SDFSDD
      </div> */}
      {/* <LeftSidebar /> */}
      SDFSDF
    </>
  );
}

export default App;
