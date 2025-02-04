
import './styled.css';

import PropTypes from 'prop-types';
import React from 'react';

export const ThemeSwitcher = React.memo(({ handleChangeTheme, theme }) => {
  return (
    <>
      <label className="switch">
        <input
          onChange={handleChangeTheme}
          type="checkbox"
          className="themeSwitcher"
          checked={theme === 'light' ? true : false}
        />
        <span className="slider"></span>
      </label>
    </>
  );
});
ThemeSwitcher.displayName = 'ThemeSwitcher';

ThemeSwitcher.propTypes = {
  handleChangeTheme: PropTypes.func,
  theme: PropTypes.string,
};


