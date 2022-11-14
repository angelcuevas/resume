import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import languageTypes from '../../../../languages/languageTypes';
import { setLanguage } from '../../../../redux/slices/languagesSlice';

const TopOptions = () => {

    const languages = useSelector((state:any)=>state.languages)

    const dispatch = useDispatch();
    const handleLanguageSelection = (
      event: React.MouseEvent<HTMLElement>,
      newFormats: string[],
    ) => {

        if (newFormats !== null) {
            dispatch(setLanguage(newFormats));
        }
    };

    return (
        <div style={{textAlign:'right',marginRight:'50px'}}>
            <ToggleButtonGroup
                value={languages.selectedLanguage}
                onChange={handleLanguageSelection}
                aria-label="languages"
                exclusive={true}
            >
                <ToggleButton value={languageTypes.English} aria-label="English">
                    English
                </ToggleButton>
                <ToggleButton value={languageTypes.Spanish} aria-label="Spanish">
                    Español
                </ToggleButton>
            </ToggleButtonGroup>
        </div>
    )
}

export default TopOptions