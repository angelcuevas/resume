import { configureStore } from '@reduxjs/toolkit'
import { ILanguageText } from '../languages/ILanguage';
import languagesSlice  from './slices/languagesSlice';

const store = configureStore({
    reducer: {
      languages: languagesSlice
    }
  })

export default store; 