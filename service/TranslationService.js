export class TranslationService {

    async loadLanguage(lang) {
        try {
            const response = await fetch(`../lang/${lang}.json`);

            if (!response.ok) {
                throw new Error(`No se pudo cargar el idioma: ${lang}`);
            }

            return await response.json();
        } catch (error) {
        }
        return {};
    }
}