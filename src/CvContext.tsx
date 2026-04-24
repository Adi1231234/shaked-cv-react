import { createContext, useContext } from 'react';
import { cvData, type CVData } from './cvData';

export type Lang = 'en' | 'he';

export const CvContext = createContext<{ data: CVData; lang: Lang }>({
  data: cvData,
  lang: 'en',
});

export function useCv() {
  return useContext(CvContext).data;
}

export function useLang(): Lang {
  return useContext(CvContext).lang;
}
