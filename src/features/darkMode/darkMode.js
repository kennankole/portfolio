import { useState, useEffect } from 'react';
import { Switch } from '@material-tailwind/react';

const DarkModeToggle = () => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <Switch onClick={toggleTheme} label={theme} />
  );
};
export default DarkModeToggle;
