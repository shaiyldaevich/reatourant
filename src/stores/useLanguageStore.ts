import { create } from 'zustand'

interface LanguageStore {
	language: 'ky' | 'ru' | 'en'
	setLanguage: (language: 'ky' | 'ru' | 'en') => void
	t: (ky: string, ru: string, en: string) => string
}

export const useLanguageStore = create<LanguageStore>((set, get) => ({
	language: 'en',
	setLanguage: (language: 'ky' | 'ru' | 'en') => set({ language }),
	t: (ky: string, ru: string, en: string) => {
		const currentLanguage = get().language
		if (currentLanguage === 'ky') return ky
		if (currentLanguage === 'ru') return ru
		return en
	}
}))
