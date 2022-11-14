export interface ILanguageText {
    navBar: navBarText,
    greeting: greeting
}

interface navBarText {
    homeLabel:string;
    portfolioLabel:string,
    ExpirienceLabel: string
}

interface greeting {
    title:string,
    message: string
}