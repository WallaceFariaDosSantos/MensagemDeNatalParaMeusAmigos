//var
var state = -1;
var messages = [
  `Olá amiga, deixo esse recado para lhe desejar um ótimo dia e uma boa vida repleta de bons momentos e cheio de paz e amor, do jeito que merece, também quero te desejar um feliz Natal. Além disso, queria te agradecer por tudo e relembrar de todos os momentos que me fez rir e feliz. Também digo que agradeço por toda a ajuda que me forneceu e fornece ainda, sempre que peço ou preciso de ajuda em algo você sempre está lá, e admiro muito isso em você! Te acho especial e muito divertida. Muito obrigada por tudo, de coração, se cuida <3`,
  `Oi Julinha, deixo esse recado para lhe desejar um feliz Natal! Também quero desejar que tenha uma ótima vida cheia de bons momentos e de tudo que merece, também queria agradecer e relembrar todos os momentos que me fez feliz e me fez rir! Você é muito divertida e quero que continue assim! Muito obrigado por tudo, de verdade, até outro dia <3`,
  `Iai amiguinho, venho para te desejar um feliz Natal, além de um bom dia e uma vida repleta de coisas boas. Também queria agradecer por todos os momentos que me fez feliz e me fez rir, também te acho muito divertido e legal, espero que sempre continue assim e, enfim, muito obrigado por tudo, no geral. Até outro dia <3`,
  `Iai jão, venho para te desejar um bom dia, uma ótima vida repleta de alegria, paz, saúde e esperança, além de um feliz Natal. Também queria agradecer por todos os momentos que passamos, por sempre confiar e mim e ser uma amigo de verdade, além de me fazer rir e me alegrar quando pode. Te acho muito engraçado e legal, muito obrigado por tudo e flwsss <3`,
  `OPA EMILYYY, deixo esse recado para lhe desejar um feliz Natal e também que Deus abençoe você e todos que ama, além disso, também queria te desejar uma ótima vida repleto de bons momentos e um ótimo dia. Também venho para agradecer a tudo que já fez e vem fazendo por mim, como os momentos em que me fez rir e me deixou feliz, além de sempre ser legal comigo! Agradeço muito tudo isso é obrigado de verdade! Tchau <3`,
  `Iai Fernandinho, venho desejar um feliz Natal e bom dia. Também quero que tenha uma ótima vida repleta de bons momentos e felicidades, além disso, venho lhe agradecer por todos os momentos que me fez rir e me divertiu, também por me ajudar a melhorar no basquete kkkk. Enfim, muito obrigado por tudo, flwss <3`,
  `Iai Nicolau, venho para te desejar um feliz Natal e um bom dia, além de uma vida repleta de momentos legais e especiais. Também venho agradecer por todos os momentos em que me fez rir e me deixou feliz. Muito obrigado por tudo! <3`,
  `Oi amiga, feliz Natal e espero que tenha um ótimo dia e uma ótima vida, cheia de alegria, paz, saúde, sucesso e tudo que é de bom e você mereça. Também venho para agradecer por tudo que já fez por mim ou para mim, por todos os dias que me fez rir e me ajudou quando precisei, muito obrigada mesmo!!! <3`,
  `Opa Matheus, venho aqui para te desejar um feliz Natal e um ótimo dia, além de uma vida cheia de felicidade e saúde. Também venho para agradecer por todos os momentos em que passamos, sendo engraçados ou mais sérios, te acho muito legal e bem divertido. Muito obrigado por tudo, tmj <3`,
  `Oi Pedro, sei que você é meio fechado e tals só que eu te considero um amigo e venho te desejar um feliz Natal! Que você tenha um ótimo dia e uma vida cheia de energias positivas. Também venho agradecer por todos os momentos que me fez rir e me introduziu a coisas novas! Muito obrigado por tudo! Flwsss <3`,
  `Opa mano, eu sei que a gente não se conhece tanto mas te considero um amigo e queria te desejar um feliz Natal junto de um bom dia e que Deus te abençoe. Muito obrigado por todos os momentos engraçados e acho que é isso, vlws, tmj <3`,
  `Iai fran fran, eu queria te desejar um feliz Natal, mesmo que não te conheço a tanto tempo ainda te considero um amigo, já que você é muito legal! Espero que tenha uma boa vida e acredito que conquistará muitas coisas, muito obrigado por tudo, flws <3`,
  `Oi Clara, eu sei que não te conheço muito mas mesmo assim queria te desejar um feliz Natal e um bom dia, também que Deus te abençoe e que ilumine seu caminho para conquistar as coisas que deseja! Muito obrigado por tudo, flws <3`,
  `Oi Bia, eu sei que você é meio na sua e não me conhece muito mas quero te desejar um feliz Natal e que tenha um ótimo dia, além de uma boa vida e que Deus ilumine seu caminho para que conquiste tudo o que merece, muito obrigado, flws <3`,
];
var playerIdArray2 = ['M1', 'J2', 'J3', 'J4', 'E5', 'F6', 'N7', 'A8', 'M9', 'P10', 'C11', 'F12', 'C13', 'B14'];
var cases = [];
var customFont;
var bgImg, bgImg2;
//let
let buttonClass;
//função preload
function preload(){
  bgImg = loadImage('./assets/bgImg.png ');
  bgImg2 = loadImage('./assets/bgImg2.png');
  customFont = loadFont('DancingScript-Regular.ttf');
}

//função setup
function setup(){
  createCanvas(windowWidth, windowHeight);
  buttonClass = new Botoes();
}

//função draw
function draw(){
  if(state === -1 || state === 0 || state === 1 || state === 2){
    background(bgImg);
  }
  else{
    background(bgImg2);
  }
  
  buttonClass.display();

  if(state === 0){
    var playerName = prompt('Escreva seu nome abaixo (sem sobrenome e primeira letra maiúscula).');
    
    if(playerName){
      state = 1;
      cases.pop();
      cases.pop();
      cases.pop();
      cases.push(playerName);
    }
    else{
      state = 0;
    }
  }
  
  if(state === 1){
    var playerId = prompt('Insira seu ID (ta no zap zap).');
    
    if(playerId){
      state = 2;
      cases.push(playerId);
    }
    else{
      state = 1;
    }
  }

  if(state === 2){
    var playerId2 = prompt('Insira seu ID pessoal (ta no zap zap).');

    if(playerId2){
      state = 3;
      cases.push(playerId2);
    }
    else{
      state = 2;
    }
  }

  //verificar se o NOME+ID+IDPESSOAL === correto, se sim, aparece a mensagem, se não, o processo se repete.
  if(state === 3){
    if(cases[0] != 'Maria' && cases[0] != 'Julia' && cases[0] != 'Juan' && cases[0] != 'João' && cases[0] != 'Emilly' && cases[0] != 'Fernando' && cases[0] != 'Nicollas' && cases[0] != 'Alice' && cases[0] != 'Matheus' && cases[0] != 'Pedro' && cases[0] != 'Castro' && cases[0] != 'Franchesco' && cases[0] != 'Clara' && cases[0] != 'Beatriz'){
      alert('COMBINAÇÃO INCORRETA, REPITA!');
      state = 0;
    }
    else{
      if(cases[0] === 'Maria'){
        if(cases[1] != 0 || cases[2] != 'bff1098451'){
          alert('COMBINAÇÃO INCORRETA, REPITA!');
          state = 0;
        }
        else{
          textFont(customFont);
          textSize(35);
          fill("white");
          text(messages[0], 10, 500, windowWidth - 20, windowHeight - 100);
        }
      }
    }

    if(cases[0] != 'Maria' && cases[0] != 'Julia' && cases[0] != 'Juan' && cases[0] != 'João' && cases[0] != 'Emilly' && cases[0] != 'Fernando' && cases[0] != 'Nicollas' && cases[0] != 'Alice' && cases[0] != 'Matheus' && cases[0] != 'Pedro' && cases[0] != 'Castro' && cases[0] != 'Franchesco' && cases[0] != 'Clara' && cases[0] != 'Beatriz'){
      alert('COMBINAÇÃO INCORRETA, REPITA!');
      state = 0;
    }
    else{
      if(cases[0] === 'Julia'){
        if(cases[1] != 1 || cases[2] != 'jmno129745'){
          alert('COMBINAÇÃO INCORRETA, REPITA!');
          state = 0;
        }
        else{
          textFont(customFont);
          textSize(35);
          fill("white");
          text(messages[1], 10, 500, windowWidth - 20, windowHeight - 100);
        }
      }
    }

    if(cases[0] != 'Maria' && cases[0] != 'Julia' && cases[0] != 'Juan' && cases[0] != 'João' && cases[0] != 'Emilly' && cases[0] != 'Fernando' && cases[0] != 'Nicollas' && cases[0] != 'Alice' && cases[0] != 'Matheus' && cases[0] != 'Pedro' && cases[0] != 'Castro' && cases[0] != 'Franchesco' && cases[0] != 'Clara' && cases[0] != 'Beatriz'){
      alert('COMBINAÇÃO INCORRETA, REPITA!');
      state = 0;
    }
    else{
      if(cases[0] === 'Juan'){
        if(cases[1] != 2 || cases[2] != 'asjdkl1239'){
          alert('COMBINAÇÃO INCORRETA, REPITA!');
          state = 0;
        }
        else{
          textFont(customFont);
          textSize(35);
          fill("white");
          text(messages[2], 10, 500, windowWidth - 20, windowHeight - 100);
        }
      }
    }
      
    if(cases[0] != 'Maria' && cases[0] != 'Julia' && cases[0] != 'Juan' && cases[0] != 'João' && cases[0] != 'Emilly' && cases[0] != 'Fernando' && cases[0] != 'Nicollas' && cases[0] != 'Alice' && cases[0] != 'Matheus' && cases[0] != 'Pedro' && cases[0] != 'Castro' && cases[0] != 'Franchesco' && cases[0] != 'Clara' && cases[0] != 'Beatriz'){
      alert('COMBINAÇÃO INCORRETA, REPITA!');
      state = 0;
    }
    else{
      if(cases[0] === 'João'){
        if(cases[1] != 3 || cases[2] != 'jfklads089'){
          alert('COMBINAÇÃO INCORRETA, REPITA!');
          state = 0;
        }
        else{
          textFont(customFont);
          textSize(35);
          fill("white");
          text(messages[3], 10, 500, windowWidth - 20, windowHeight - 100);
        }
      }
    }

    if(cases[0] != 'Maria' && cases[0] != 'Julia' && cases[0] != 'Juan' && cases[0] != 'João' && cases[0] != 'Emilly' && cases[0] != 'Fernando' && cases[0] != 'Nicollas' && cases[0] != 'Alice' && cases[0] != 'Matheus' && cases[0] != 'Pedro' && cases[0] != 'Castro' && cases[0] != 'Franchesco' && cases[0] != 'Clara' && cases[0] != 'Beatriz'){
      alert('COMBINAÇÃO INCORRETA, REPITA!');
      state = 0;
    }
    else{
      if(cases[0] === 'Emilly'){
        if(cases[1] != 4 || cases[2] != 'djsklf2341'){
          alert('COMBINAÇÃO INCORRETA, REPITA!');
          state = 0;
        }
        else{
          textFont(customFont);
          textSize(35);
          fill("white");
          text(messages[4], 10, 500, windowWidth - 20, windowHeight - 100);
        }
      }
    }

    if(cases[0] != 'Maria' && cases[0] != 'Julia' && cases[0] != 'Juan' && cases[0] != 'João' && cases[0] != 'Emilly' && cases[0] != 'Fernando' && cases[0] != 'Nicollas' && cases[0] != 'Alice' && cases[0] != 'Matheus' && cases[0] != 'Pedro' && cases[0] != 'Castro' && cases[0] != 'Franchesco' && cases[0] != 'Clara' && cases[0] != 'Beatriz'){
      alert('COMBINAÇÃO INCORRETA, REPITA!');
      state = 0;
    }
    else{
      if(cases[0] === 'Fernando'){
        if(cases[1] != 5 || cases[2] != 'sjkl349587'){
          alert('COMBINAÇÃO INCORRETA, REPITA!');
          state = 0;
        }
        else{
          textFont(customFont);
          textSize(35);
          fill("white");
          text(messages[5], 10, 500, windowWidth - 20, windowHeight - 100);
        }
      }
    }

    if(cases[0] != 'Maria' && cases[0] != 'Julia' && cases[0] != 'Juan' && cases[0] != 'João' && cases[0] != 'Emilly' && cases[0] != 'Fernando' && cases[0] != 'Nicollas' && cases[0] != 'Alice' && cases[0] != 'Matheus' && cases[0] != 'Pedro' && cases[0] != 'Castro' && cases[0] != 'Franchesco' && cases[0] != 'Clara' && cases[0] != 'Beatriz'){
      alert('COMBINAÇÃO INCORRETA, REPITA!');
      state = 0;
    }
    else{
      if(cases[0] === 'Nicollas'){
        if(cases[1] != 6 || cases[2] != 'sdklfj9013'){
          alert('COMBINAÇÃO INCORRETA, REPITA!');
          state = 0;
        }
        else{
          textFont(customFont);
          textSize(35);
          fill("white");
          text(messages[6], 10, 500, windowWidth - 20, windowHeight - 100);
        }
      }
    }

    if(cases[0] != 'Maria' && cases[0] != 'Julia' && cases[0] != 'Juan' && cases[0] != 'João' && cases[0] != 'Emilly' && cases[0] != 'Fernando' && cases[0] != 'Nicollas' && cases[0] != 'Alice' && cases[0] != 'Matheus' && cases[0] != 'Pedro' && cases[0] != 'Castro' && cases[0] != 'Franchesco' && cases[0] != 'Clara' && cases[0] != 'Beatriz'){
      alert('COMBINAÇÃO INCORRETA, REPITA!');
      state = 0;
    }
    else{
      if(cases[0] === 'Alice'){
        if(cases[1] != 7 || cases[2] != 'adfhg80219'){
          alert('COMBINAÇÃO INCORRETA, REPITA!');
          state = 0;
        }
        else{
          textFont(customFont);
          textSize(35);
          fill("white");
          text(messages[7], 10, 500, windowWidth - 20, windowHeight - 100);
        }
      }
    }

    if(cases[0] != 'Maria' && cases[0] != 'Julia' && cases[0] != 'Juan' && cases[0] != 'João' && cases[0] != 'Emilly' && cases[0] != 'Fernando' && cases[0] != 'Nicollas' && cases[0] != 'Alice' && cases[0] != 'Matheus' && cases[0] != 'Pedro' && cases[0] != 'Castro' && cases[0] != 'Franchesco' && cases[0] != 'Clara' && cases[0] != 'Beatriz'){
      alert('COMBINAÇÃO INCORRETA, REPITA!');
      state = 0;
    }
    else{
      if(cases[0] === 'Matheus'){
        if(cases[1] != 8 || cases[2] != 'ihlças0156'){
          alert('COMBINAÇÃO INCORRETA, REPITA!');
          state = 0;
        }
        else{
          textFont(customFont);
          textSize(35);
          fill("white");
          text(messages[8], 10, 500, windowWidth - 20, windowHeight - 100);
        }
      }
    }

    if(cases[0] != 'Maria' && cases[0] != 'Julia' && cases[0] != 'Juan' && cases[0] != 'João' && cases[0] != 'Emilly' && cases[0] != 'Fernando' && cases[0] != 'Nicollas' && cases[0] != 'Alice' && cases[0] != 'Matheus' && cases[0] != 'Pedro' && cases[0] != 'Castro' && cases[0] != 'Franchesco' && cases[0] != 'Clara' && cases[0] != 'Beatriz'){
      alert('COMBINAÇÃO INCORRETA, REPITA!');
      state = 0;
    }
    else{
      if(cases[0] === 'Pedro'){
        if(cases[1] != 9 || cases[2] != 'ordem15067'){
          alert('COMBINAÇÃO INCORRETA, REPITA!');
          state = 0;
        }
        else{
          textFont(customFont);
          textSize(35);
          fill("white");
          text(messages[9], 10, 500, windowWidth - 20, windowHeight - 100);
        }
      }
    }

    if(cases[0] != 'Maria' && cases[0] != 'Julia' && cases[0] != 'Juan' && cases[0] != 'João' && cases[0] != 'Emilly' && cases[0] != 'Fernando' && cases[0] != 'Nicollas' && cases[0] != 'Alice' && cases[0] != 'Matheus' && cases[0] != 'Pedro' && cases[0] != 'Castro' && cases[0] != 'Franchesco' && cases[0] != 'Clara' && cases[0] != 'Beatriz'){
      alert('COMBINAÇÃO INCORRETA, REPITA!');
      state = 0;
    }
    else{
      if(cases[0] === 'Castro'){
        if(cases[1] != 10 || cases[2] != 'fdapa01942'){
          alert('COMBINAÇÃO INCORRETA, REPITA!');
          state = 0;
        }
        else{
          textFont(customFont);
          textSize(35);
          fill("white");
          text(messages[10], 10, 500, windowWidth - 20, windowHeight - 100);
        }
      }
    }

    if(cases[0] != 'Maria' && cases[0] != 'Julia' && cases[0] != 'Juan' && cases[0] != 'João' && cases[0] != 'Emilly' && cases[0] != 'Fernando' && cases[0] != 'Nicollas' && cases[0] != 'Alice' && cases[0] != 'Matheus' && cases[0] != 'Pedro' && cases[0] != 'Castro' && cases[0] != 'Franchesco' && cases[0] != 'Clara' && cases[0] != 'Beatriz'){
      alert('COMBINAÇÃO INCORRETA, REPITA!');
      state = 0;
    }
    else{
      if(cases[0] === 'Franchesco'){
        if(cases[1] != 11 || cases[2] != 'cikop78996'){
          alert('COMBINAÇÃO INCORRETA, REPITA!');
          state = 0;
        }
        else{
          textFont(customFont);
          textSize(35);
          fill("white");
          text(messages[11], 10, 500, windowWidth - 20, windowHeight - 100);
        }
      }
    }

    if(cases[0] != 'Maria' && cases[0] != 'Julia' && cases[0] != 'Juan' && cases[0] != 'João' && cases[0] != 'Emilly' && cases[0] != 'Fernando' && cases[0] != 'Nicollas' && cases[0] != 'Alice' && cases[0] != 'Matheus' && cases[0] != 'Pedro' && cases[0] != 'Castro' && cases[0] != 'Franchesco' && cases[0] != 'Clara' && cases[0] != 'Beatriz'){
      alert('COMBINAÇÃO INCORRETA, REPITA!');
      state = 0;
      cases.length = 0;
    }
    else{
      if(cases[0] === 'Clara'){
        if(cases[1] != 12 || cases[2] != 'klçdo94345'){
          alert('COMBINAÇÃO INCORRETA, REPITA!');
          state = 0;
          cases.length = 0;
        }
        else{
          textFont(customFont);
          textSize(35);
          fill("white");
          text(messages[12], 10, 500, windowWidth - 20, windowHeight - 100);
        }
      }
    }

    if(cases[0] != 'Maria' && cases[0] != 'Julia' && cases[0] != 'Juan' && cases[0] != 'João' && cases[0] != 'Emilly' && cases[0] != 'Fernando' && cases[0] != 'Nicollas' && cases[0] != 'Alice' && cases[0] != 'Matheus' && cases[0] != 'Pedro' && cases[0] != 'Castro' && cases[0] != 'Franchesco' && cases[0] != 'Clara' && cases[0] != 'Beatriz'){
      alert('COMBINAÇÃO INCORRETA, REPITA!');
      state = 0;
    }
    else{
      if(cases[0] === 'Beatriz'){
        if(cases[1] != 13 || cases[2] != 'beaak45021'){
          alert('COMBINAÇÃO INCORRETA, REPITA!');
          state = 0;
        }
        else{
          textFont(customFont);
          textSize(35);
          fill("white");
          text(messages[13], 10, 500, windowWidth - 20, windowHeight - 100);
        }
      }
    }
  }
}
