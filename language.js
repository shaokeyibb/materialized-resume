const i18nPages = [
    {
        acceptLanguages: [
            "zh"
        ],
        page: "/zh.html"
    },
    {
        acceptLanguages: [
            "en"
        ],
        page: "/en.html"
    }
]

function changeLanaguge(changeWhenInSubpage) {
    const page = (i18nPages.find(it => it.acceptLanguages.includes(new Intl.Locale(navigator.language).language)) ?? i18nPages[0]).page // find page
    if ((changeWhenInSubpage || window.location.pathname == "/") && page != window.location.pathname) { // if in root page but language mismatches
        window.location.replace(page) // jump to correct page
    }
}

window.addEventListener('languagechange', () => changeLanaguge(true))

changeLanaguge(false)