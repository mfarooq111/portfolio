import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import { useThemeMode } from '../../../theme/ThemeModeProvider';

export default function ThemeToggle() {
  const { mode, toggleMode } = useThemeMode();
  const next = mode === 'dark' ? 'light' : 'dark';

  return (
    <Tooltip title={`Switch to ${next} mode`}>
      <IconButton
        aria-label={`Switch to ${next} mode`}
        onClick={toggleMode}
        sx={(t) => ({
          border: `1px solid ${t.palette.custom.border}`,
          color: 'text.primary',
          transition: 'transform .4s ease, border-color .2s ease',
          '&:hover': { borderColor: t.palette.custom.borderStrong, transform: 'rotate(20deg)' },
        })}
      >
        {mode === 'dark' ? <LightModeRoundedIcon fontSize="small" /> : <DarkModeRoundedIcon fontSize="small" />}
      </IconButton>
    </Tooltip>
  );
}
