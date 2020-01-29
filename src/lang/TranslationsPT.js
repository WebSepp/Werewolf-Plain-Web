export default {
  pt: {
    Title: {
      title: 'Planície do Lobisomen',
    },
    Header: {
      roomList: 'Lista de Salas',
      about: 'Sobre',
      rules: 'Regras',
      profile: 'Perfil',
      settings: 'Configurações',
      login: 'Entrar',
      logout: 'Sair',
      anonymous: 'Anônimo',
    },
    HeaderGame: {
      start: 'Iniciar',
      startMessage: 'O jogo começou. Cheque seu papel. Agora é dia. Iniciar discussões',
    },
    DialogRoomCreate: {
      hostGame: 'Hospedar jogo',
      villageName: 'Nome da Vila',
      required: 'Necessário',
      onlyWhitespace: 'Entrada em branco não é permitida',
      tooLong: 'Limite excedido',
      description: 'Descrição (opcional)',
      capacity: 'Capacidade',
      dayLength: 'Dia (minutos)',
      nightLength: 'Noite (minutos)',
      language: 'Idioma',
      english: 'English',
      japanese: '日本語',
      spanish: 'Español',
      portuguese: 'Portugues',
      private: 'Privativo',
      accessCode: 'Código de acesso',
      whitespaceIsNotAllowed: 'Espaços não são permitidos',
      invalidLength: 'Mínimo de 4 caracteres, máximo de 20',
      ok: 'OK',
      cancel: 'Cancelar',
      playerJoined: '{0} Entrou',
    },
    DialogAccessCode: {
      title: 'Entrar código de acesso',
      invalidAccessCode: 'Código de acesso inválido',
      close: 'FECHAR',
    },
    DialogRoomLeave: {
      leave: 'Sair',
      title: 'Sair da sala',
      para1: 'Confirma saída da sala?',
      cancel: 'CANCELAR',
      playerLeft: '{0} saiu.',
    },
    DialogPlayerKickOut: {
      title: 'Remover jogador',
      para1: 'Confirma remoção deste jogador?',
      cancel: 'CANCELAR',
      kickOutPlayer: '{0} foi removido.',
    },
    DialogRole: {
      villager: 'Você é um camponês',
      villagerDescription: "Vocé é um camponês normal e não possui habilidades.",
      seer: 'Você é um vidente',
      seerDescription: "Você pode escolher um jogador por dia e ver papel deste jogador",
      medium: 'Você é um médium',
      mediumDescription: "Quando o dia se inicia, você pode ver a qual equipe pertencia o jogador executado na noite anterior",
      knight: 'Você é um cavaleiro',
      knightDescription: 'Você pode escolher um jogador para proteger cada noite. O jogador escolhido não pode ser assassinado nesta noite',
      werewolf: 'Você é um lobisomem',
      werewolfDescription: 'Você escolhe um jogador para matar a cada noite. Você pode conversar com outros lobisomens no canal de lobisomens',
      minion: 'Você é um servo',
      minionDescription: "Você pertence à equipe dos lobisomens, mas tem aparência humana. Servos vencem quando lobisomens vencem. Servos nâo tem nenhuma habilidade e nâo podem ver quais jogadores sâo lobisomens",
      close: 'FECHAR',
    },
    DialogRoomDetails: {
      details: 'Detalhes',
      daytime: 'Dia',
      night: 'Noite',
      minutes: 'minutos',
      capacity: 'Capacidade',
      fivePlayerVillage: '3 camponeses, 1 vidente e 1 lobisomen',
      ninePlayerVillage: '4 camponeses, 1 vidente, 1 cavaleiro, 2 lobisomens e 1 minion',
      elevenPlayerVillage: '5 camponeses, 1 vidente, 1 médium, 1 cavaleiro, 2 lobisomens e 1 minion',
      fifteenPlayerVillage: '8 camponeses, 1 vidente, 1 médium, 1 cavaleiro, 3 lobisomens e 1 minion',
      language: 'Linguagem',
      english: 'English',
      japanese: '日本語',
      spanish: 'Español',
      portuguese: 'Portugues',
      close: 'FECHAR',
    },
    DialogSettings: {
      title: 'Configurações',
      gameName: 'Nome da partida',
      tooLong: 'Longo demais',
      avatar: 'Avatar',
      avatarErrorMessage: 'Tamanho do avatar precisa ser menor que 2MB',
      uploadAvatar: 'CARREGAR AVATAR',
      preview: 'Pré-visualizar',
      close: 'FECHAR',
      save: 'Salvar',
      cancel: 'CANCELAR',
    },
    About: {
      about: { 
        title: "Sobre",
        para1: "Planície dos Lobisomens é um servidor de jogo Lobisomen simples e fácil de usar",
      },
      settingUp: {
        title: 'Como jogar',
        para1: '1. Pressione "Hospedar Partida" para criar uma nova vila',
        para2: '2. Pressione "Iniciar" para começar uma partida assim que a vila estiver populada',
        para3: "O hospedeiro pode excluir jogadores antes da partida começar. Jogadores podem sair da vila antes da partida começar. Se o hospedeiro sair da vila, a vila será deletada. Se uma vila for criada e ficar uma semana sem que se iniciem jogos nela, a vila também será automaticamente deletada",
      },
      villageAndRoles: {
        title: 'Vilas e Papéis',
        para1: 'Partida de 5 jogadores',
        para2: '3 camponeses, 1 vidente e 1 lobisomem',
        para3: 'Partida de 9 jogadores',
        para4: '4 camponeses, 1 vidente, 1 cavaleiro, 2 lobisomens e 1 minion',
        para5: 'Partida de 11 jogadores',
        para6: '5 camponeses, 1 vidente, 1 médium, 1 cavaleiro, 2 lobisomens e 1 minion',
        para7: 'Partida de 15 jogadores',
        para8: '8 camponeses, 1 vidente, 1 médium, 1 cavaleiro, 3 lobisomens e 1 minion',
      },
      supportThisSite: {
        title: 'Suporte este Site',
        para1: 'Muito obrigado por compartilhar este site via redes sociais! O jogo vai ser mais legal com mais jogadores!',
      }, 
      feedback: {
        title: 'Contato',
        para1: 'Me contate pelo Discord ou me mande email! Agradecido por comentários e críticas construtivas.',
        email: 'Email',
      },
      credit: {
        title: 'Créditos',
        logo: 'Logo by ',
        icon: 'Icon by ',
      },
    },
    Rules: {
      title: 'Regras',
      howToWin: {
        title: 'Como vencer',
        para1: 'A vila vence se conseguir exterminar todos os lobisomens. Os lobisomens vencem se matarem jogadores até o ponto onde o número de lobisomens é maior ou igual ao número dos camponeses',
        para2: 'Camponeses votam um jogador por dia para exterminar, com o objetivo de matar todos os lobisomens. Os lobisomens selecionam um jogador para morder a cada noite, assim matando este jogador.',
      },
      gameFlow: {
        title: 'Fluxo do jogo',
        para1: "Existem duas fases por dia que se repetem até que o jogo termina. Durante o dia, jogadores discutem com o objetivo de adivinhar quem são os lobisomens, para escolher quem exterminar. Durante a noite, jogadores não podem conversar, mas os lobisomens conseguem conversar no chat de lobisomens. Quando o dia se inicia, o jogador mais votado por suspeita de ser lobisomem morre, e o camponês votado para ser mordido tambem morre. Jogadores que morreram não podem falar com jogadores vivos, mas podem ver o chat e conversar com outros jogadores mortos. O jogo termina quando todos os lobisomens forem executados, ou quando o número de lobisomens for maior ou igual ao número dos camponeses.",
      },
      roles: {
        title: 'Papéis',
        para1: 'O papel de cada jogador é escolhido aleatóriamente quando se inicia a partida',
        villager: 'Camponês',
        para2: "Pessoa normal, sem habilidades especiais",
        seer: 'Vidente',
        para3: 'Vidente pode escolher um jogador a cada dia e saber se este jogador é ou não um lobisomem. O resultado da visão aparece para o vidente ao início de cada dia',
        medium: 'Médium',
        para4: 'Médium pode saber que tipo de jogador foi executado na noite anterior (se ele era ou não um lobisomem)',
        knight: 'Cavaleiro',
        para5: "Cavaleiros podem escolher um jogador para proteger a cada dia. O cavaleiro não pode ser morto pelos lobisomens durante a noite. É permitido proteger o mesmo jogador por vários dias consecutivos",
        werewolf: 'Lobisomem',
        para6: "Lobisomens podem escolher um jogador por dia, e o jogador mais escolhido vai ser morto durante a noite. Lobisomens podem conversar durante a noite no chat de lobisomens. Se nenhum lobisomem escolher jogadores, um jogador aleatório será morto durante a noite.",
        minion: 'Servo',
        para7: "Servos pertencem à equipe dos lobisomens, mas têm aparência humana. Servos vencem quando os lobisomens vencem. Servos não tem habilidades, e não sabem quem são os lobisomens.",
      },
      others: {
        title: 'Outros',
        voting: 'Votação',
        para1: "Todos os jogadores precisam votar para um jogador ao inicio de cada dia. Jogadores que não votarem cometem suicídio. Jogadores podem mudar sua seleção durante o correr do dia. Se houver empate para o jogador mais votado, um jogador será escolhido aleatoriamente entre os jogadores com o número máximo de votos. Um jogador será executado primeiro, e a seguir, se houverem lobisomens vivos ainda, um dos camponeses será executado. Se os lobisomens tiverem escolhido o mesmo jogador que foi executado, este será o único jogador morto neste dia. Se ninguém votar, todos terão cometido suicídio e a vitória será da vila.",
        message: 'Mensagem',
        para2: 'Mensagem não pode esceder 500 caracteres',
      }
    },
    RoomList: {
      new: 'Novo',
      ongoing: 'Em progress',
      closed: 'Fechado',
      name: 'Nome',
      participants: 'Participantes',
      enter: 'Entrar',
      playerJoined: '{0} entrou.',
    },
    Game: {
      all: 'Todos',
      werewolfChat: 'Chat de lobisomens',
      resultsSeer: 'Resultados (vidente)',
      resultsMedium: 'Resultados (médium)',
      required: 'Mandatório',
      onlyWhitespace: 'Entrada em branco não é permitida',
      tooLong: 'tamanho excedido',
    },
    Profile: {
      username: 'Username',
      usernameIsNotEditable: 'Username só pode mudado uma vez a cada 30 dias',
      bio: 'Biografia',
      tooLong: 'Tamanho excedido',
      win: 'Vitória',
      lose: 'Derrota',
      winRate: 'Número de Vitórias',
      role: 'Papel',
      villager: 'Camponês',
      werewolf: 'Lobisomem',
      seer: 'Vidente',
      medium: 'Médium',
      knight: 'Cavaleiro',
      minion: 'Servo',
      save: 'SALVAR',
      cancel: 'CANCELAR',
    },
  }
}