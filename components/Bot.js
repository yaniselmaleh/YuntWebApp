import React, { Component } from 'react'
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components';
import '../sass/components/_bot.scss'

import LogoIco from '../static/ourson.png';
import Logo from '../static/logo-yunt.png';
import Hello from '../static/hello-bear.gif';

class Bot extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
          name: 'COUCOU',
        };
    }

  render(){
    const theme = {
      background: '#f5f8fb',
      fontFamily: 'Helvetica Neue',

      headerBgColor: 'linear-gradient(90deg, #dc6795 25%, #e76b61 100%)',
      headerFontColor: '#fff',
      headerFontSize: '15px',
      
      botBubbleColor: 'white',
      botFontColor: 'black',
      
      userBubbleColor: '#fff',
      userFontColor: '#4a4a4a',

      padding:'0px',
    };

      return(
        <div id="bot">
          <ThemeProvider theme={theme}>
            <ChatBot
              headerTitle="Yunt, l’escape game en magasin !"
              botAvatar={Logo}
              // userAvatar={Logo_noir}
              floatingIcon={LogoIco}
              placeholder="Veuillez saisir votre réponse ..."
              botDelay="1000"
              enableMobileAutoFocus={(true)}
              floating={(true)}
              hideSubmitButton={(true)}
              speechSynthesis={{ enable: false, lang: 'fr' }}
              width="350px"
              
              steps={[

                {
                  // Bonjour
                  id: '1',
                  component: <HelloComponent/>,
                  trigger: 'bear',
                },

                {
                  // Gif Ours
                  id: 'bear',
                  component: <CustomComponent/>,
                  trigger: '2',
                },

                {
                  // Question après le Gif
                  id: '2',
                  message: 'Je suis là pour répondre à tes questions, tu as besoin d\'informations ?',
                  trigger: '3',
                },

                {
                  // Proposition de réponses 3/3
                  id: '3',
                  options: [
                    { value: "Comment télécharger l'application", label: 'Comment télécharger l\'application', trigger: '4' },
                    { value: "Le jeu est adaptée pour quelle tranche d\'âge ?", label: 'Le jeu est adaptée pour quelle tranche d\'âge ?', trigger: '5' },  
                    { value: "Qu\'est-ce qu\'un escape game ?", label: 'Qu\'est-ce qu\'un escape game ?', trigger: '6' },  
                  ],
                },

                {
                  id: '4',
                  message: 'L\'application est en cours de construction, nous sommes encore en train de faire des test utilisateurs.',
                  trigger: '4b',
                },

                {
                  id: '4b',
                  message: '(Notre Designer est en plus très pointilleux...), nous vous tiendrons informé lors de sa sortie !',
                  trigger: '7',
                },

                {
                  id: '5',
                  message: 'Le jeu est adapté pour toutes les tranches d\'âges, nous prenons soin de créer des énigmes compréhensibles par tous ! Après s\'il y a un soucis, vous pourrez m\'appeler lors du jeu pour vous donner des indices.',
                  trigger: '7',
                },

                {
                  id: '6',
                  message: 'L\'escape game, c\'est un jeu d`\'évasion ou vous devez répondre à des énigmes pour sortir d\'une pièce fermée, évidemment vous ne serez pas enfermé dans un magasin mais une fois le jeu lancé, vous devrez répondre aux énigmes proposées dans un temps imparti, votre score et le temps que vous aurez fait définiras votre position dans le classement et votre pourcentage de récompense.',
                  trigger: '7',
                },

                {
                  id: '7',
                  message: 'Vous avez d\'autres question ?',
                  trigger: '3',
                },

              ]}
            />
          </ThemeProvider>
        </div>
      )
    }
} 

class CustomComponent extends Component {
  render() {
      return <div><img src={Hello} alt="hello"/></div>;
  }
}

class HelloComponent extends Component {
  render() {
    let messages = ['Ici Oursoupidou ! Enchanté', 'Bonjour je suis Oursoupidou, Ravis de faire ta connaissance !', 'Hey ! je suis Oursoupidou, à ton service !'];
    
      return <div class="rsc-ts rsc-ts-bot sc-dnqmqq efROPc">
        
        <div class="rsc-ts-image-container sc-htoDjs vmYlS">
          <img class="rsc-ts-image sc-gzVnrw cwuCQv" src={Logo} alt="avatar"/>
        </div>
        
        <div class="rsc-ts-bubble sc-bZQynM irBnpW">
          {messages[Math.floor(Math.random()*messages.length)]}
        </div>
      </div>
  }
}
  

export default Bot