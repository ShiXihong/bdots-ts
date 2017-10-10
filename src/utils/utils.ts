export class Utils {

    public static getUserLanguage() {
        const lang = window.navigator.language;
        return {
            language: lang,
            local: 'zh',
            lang: 'zh-CN'
        };
    }

    public static queryString(name: string, url: string = window.location.href) {
        name = name.replace(/[[]]/g, '\\$&');

        const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)', 'i');
        const results = regex.exec(url);

        if (!results) {
            return null;
        }
        if (!results[2]) {
            return '';
        }

        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
    
}