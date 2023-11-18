import React from 'react';

export function TestDiv() {

    const getTwiceSignal = (op1, op2) => {
        const random = () => Math.floor(Math.random() * 2);

        const twiceOptions = [op1, op2]


        return twiceOptions[random()]

    }

    const getRouletteSignal = () => {
        const signals = [
          "Entrem no vermelho",
          "Entrem no preto",
          "Joguem nos pares",
          "Joguem nos ímpares",
          "Entrem no 1 a 18",
          "Entrem no 19 a 36",
          "Entrem na 1ª e 2ª coluna",
          "Entrem na 1ª e 3ª coluna",
          "Entrem na 2ª e 3ª coluna",
          "Entrem na 1ª e 2ª dúzia",
          "Entrem na 1ª e 3ª dúzia",
          "Entrem na 2ª e 3ª dúzia",
          "Joguem na 1ª coluna",
          "Joguem na 2ª coluna",
          "Joguem na 3ª coluna",
          "Apostem na 1ª dúzia",
          "Joguem na 2ª dúzia",
          "Joguem na 3ª dúzia"
        ];
      
        const complements = ["1 tentativa", "2 tentativas", "3 tentativas"];
      
        const randomSignal = signals[Math.floor(Math.random() * signals.length)];
        const randomComplement = complements[Math.floor(Math.random() * complements.length)];
      
        return `${randomSignal}, vcs tem ${randomComplement}, não esqueçam de sempre cobrir o zero!`;
      };

    const getFortuneTigerSignal = () => {
        const random = () => Math.floor(Math.random() * (10 - 3) + 3);
    
        const normal = random();
        const turbo = random();
    
        console.log(`Tigrinho tá pagando até xx:xx entrem ${normal}x normal e ${turbo}x turbo alternado`);
        return `Tigrinho tá pagando até xx:xx entrem ${normal}x normal e ${turbo}x turbo alternado`;
    }
    

    const getAviatorSignal = () => {
        let results = [];

        const maxValues = {
            0: 1.5,
        };
        const propValue = 0;
        const max = maxValues[propValue];

        const generateNumber = () => {
            let num;
            do {
                num = Math.random() * max;
            } while (num <= 1.17);
            return num.toFixed(2);
        };

        for (let i = 0; i < 3; i++) {
            results.push(`Retirar em <strong class="greenGradientText"> ${generateNumber()}x </strong>`);
        }

        // 35% chance to skip a round
        if (Math.random() < 0.35) {
            results[1] = 'Pular Rodada';
        }

        return results.join('<br/>');
    };

    const signal = getTwiceSignal("Entre no Azul", "Entre no Vermelho");

    return (
        <>
            <div id="testDiv" dangerouslySetInnerHTML={{ __html: signal }}></div>
        </>
    );
};
