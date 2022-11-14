import { createSlice } from '@reduxjs/toolkit'
import EnglishText from '../../languages/EnglishText'
import { ILanguageText } from '../../languages/ILanguage'
import languageTypes from '../../languages/languageTypes'
import Spanishtext from '../../languages/SpanishText'


const languagesSlice = createSlice({
  name: 'language',
  initialState: {
    text: Spanishtext,
    selectedLanguage: languageTypes.Spanish
  },
  reducers: {
    setLanguage: (state, { payload }) => {
      
      state.selectedLanguage = payload;
      switch (payload) {
        case languageTypes.Spanish:
          state.text = Spanishtext
          break;

        default:
          state.text = EnglishText
          break;
      }
    }

  }
})

export const { setLanguage } = languagesSlice.actions
export default languagesSlice.reducer; 
