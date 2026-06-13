import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: navigator.language.slice(0, 2),
  fallbackLng: "en",
  resources: {
    en: {
      translation: {
        title: "Tenzies",
        description: "Roll until all dice are the same.",
        newGame: "New Game",
        roll: "Roll",
        congrats: "Congratulations! You won!",
        share: "Share via WhatsApp",
        shareMessage: `I won Tenzies in {{time}}! Can you beat that? https://dixdicegame.netlify.app`,
      },
    },
    fr: {
      translation: {
        title: "Dix Dice Game",
        description: "Lancez jusqu'à ce que tous les dés soient identiques.",
        newGame: "Nouvelle partie",
        roll: "Lancer",
        congrats: "Félicitations ! Vous avez gagné !",
        share: "Partage sur WhatsApp",
        shareMessage: `J'ai gagné Dix dice Game en {{time}}! Peux tu me battre? https://dixdicegame.netlify.app`,
      },
    },
  },
});

export default i18n;
