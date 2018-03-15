"use strict";
var APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).
var SKILL_STATES = {
    SLOGAN: "_STARTMODE",
    HELP: "_HELPMODE" // The user is asking for help.
};

var slogans = [
    "Glaube an Wunder, Liebe und Glück! Schau nach vorn und nicht zurück! Tu was du willst, und steh dazu; denn dein Leben lebst nur du!",
    "Das Glück ist das einzige, was sich verdoppelt, wenn man es teilt.",
    "Wir leben zu sehr in der Vergangenheit, haben Angst vor der Zukunft und vergessen dabei völlig, die Gegenwart zu genießen.",
    "Denke nicht so oft an das, was dir fehlt,sondern an das, was du hast.",
    "Das Vertrauen ist eine zarte Pflanze. Ist es zerstört, so kommt es so bald nicht wieder.",
    "Das sind die Starken der Welt: die unter Tränen lachen, eigene Sorgen verbergen, und andere glücklich machen.",
    "Wer dein Schweigen nicht versteht, versteht deine Worte auch nicht.",
    "Die, die nichts zu sagen haben, reden viel. Die, die was zu sagen haben, hingegen kaum.",
    "Tue nie etwas halb, sonst verlierst du mehr, als du je wieder einholen kannst.",
    "Wer einen Fluss überquert, muss die eine Seite verlassen.",
    "Was immer du tun kannst oder erträumst zu können, beginne es jetzt. ",
    "Die Definition von Wahnsinn ist, immer das Gleiche zu tun und andere Ergebnisse zu erwarten.",
    "Zwei Dinge sind unendlich: Das Universum und die menschliche Dummheit. Aber beim Universum bin ich mir nicht ganz sicher.",
    "Wenn zwei Menschen immer die gleiche Meinung haben, taugen beide nichts.",
    "Ein Zyniker ist ein Mensch, der die Dinge so sieht, wie sie sind, und nicht, wie sie sein sollten",
    "Die Wahrheit liegt meist am Rande, nicht in der Mitte.",
    "Wer die Wahrheit hören will, den sollte man vorher fragen, ob er sie ertragen kann. ",
    "Wir denken selten an das, was wir haben, aber immer an das, was uns fehlt.",
    "Die Liebe stirbt niemals an Hunger, wohl aber an Übersättigung.",
    "Alt ist man erst dann, wenn man an der Vergangenheit mehr Freude hat als an der Zukunft.",
    "Das sind die Starken der Welt: die unter Tränen lachen, eigene Sorgen verbergen, und andere glücklich machen.",
    "Was Du hast, können viele haben. Doch was Du bist, kann keiner sein.",
    "Was Du hast, können viele haben. Doch was Du bist, kann keiner sein.",
    "Kein Mensch war ohne Grund in deinem Leben. Der eine war ein Geschenk, der andere eine Lektion.",
    "Bei der falschen Person kannst du nichts richtig machen. Bei der richtigen Person kannst du nichts falsch machen.",
    "Am Ende zählen nur die Menschen, denen man auf die Frage 'Alles okay bei dir?' mit der Wahrheit antwortet...",
    "Lieber Fehler machen, als so zu tun, als sei man perfekt!",
    "Heute kennt man von allem den Preis, von nichts den Wert.",
    "Der Schwache kann nicht verzeihen. Verzeihen ist eine Eigenschaft des Starken.",
    "Das Geheimnis des Glücks liegt nicht im Besitz, sondern im Geben. Wer andere glücklich macht, wird glücklich.",
    "Es gibt viele Wege zum Glück. Einer davon ist aufhören zu jammern.",
    "Je weniger Bedürfnisse ihr habt, desto freier seid ihr.",
    "Das Glück gehört denen, die sich selbst genügen. Denn alle äußeren Quellen des Glückes und Genusses sind ihrer Natur nach höchst unsicher, misslich, vergänglich und dem Zufall unterworfen.",
    "Die glücklichsten Menschen der Welt haben keine geteerten Straßen.",
    "Die glücklichsten Menschen der Welt haben keine geteerten Straßen.",
    "Was ist Glück?, Glück ist: Sich kratzen können, wo es einen juckt.",
    "Turne bis zur Urne.",
    "Ein langes Glück verliert schon allein durch seine Dauer.",
    "Man lebt ruhiger, wenn man nicht alles sagt, was man weiß, nicht alles glaubt, was man hört und über den Rest einfach nur lächelt.",
    "Wenn du wissen willst, wer dich beherrscht, mußt du nur herausfinden, wen du nicht kritisieren darfst.",
    "Die fast unlösbare Aufgabe besteht darin, sich weder von der Macht der anderen, noch von der eigenen Ohnmacht dumm machen zu lassen.",
    "Der Versuch den Himmel auf Erden zu verwirklichen, produzierte stets die Hölle.",
    "Bildung ist das, was übrigbleibt, wenn man alles vergessen hat, was man in der Schule lernte.",
    "",

]

var Alexa = require("alexa-sdk");
var util = require('util');

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.appId = APP_ID // APP_ID is your skill id which can be found in the Amazon developer console where you create the skill.
    alexa.registerHandlers(newSessionHandlers, sloganHandle);
    
    alexa.execute();
};

var sloganHandle = Alexa.CreateStateHandler(SKILL_STATES.SLOGAN, {
    "slogan": function () {
      
        var sloganNumber = Math.floor((Math.random() * slogans.length));

        var speechout = util.format(slogans[sloganNumber]); 
    
        this.emit(':tell', speechout);
    }   
});

const newSessionHandlers = {
    'LaunchRequest': function () {
        this.handler.state = SKILL_STATES.SLOGAN;
        this.emitWithState("slogan");
    },
    "AMAZON.HelpIntent": function () {
        this.emit(":tell", "");
    },
    "Unhandled": function () {
        this.handler.state = SKILL_STATES.SLOGAN;
        this.emitWithState("slogan");
    },

};

