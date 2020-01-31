export default {
  es: {
    Title: {
      title: 'Un simple hombre lobo',
    },
    Header: {
      roomList: 'Lista de habitaciones',
      about: 'Acerca de',
      rules: 'Reglas',
      profile: 'Perfil',
      settings: 'Ajustes',
      login: 'Iniciar sesión',
      logout: 'Cerrar sesión',
      anonymous: 'Anónimo',
    },
    HeaderGame: {
      start: 'Iniciar',
      startMessage: 'El juego ha iniciado. Revisa tu role, por favor. Es de día. Inicia la discusión',
    },
    DialogRoomCreate: {
      hostGame: 'Crear juego',
      villageName: 'Nombre de la aldea',
      required: 'Obligatorio',
      onlyWhitespace: 'No se permiten espacios en blanco',
      tooLong: 'Demasiado largo',
      description: 'Descripción (Opcional)',
      capacity: 'Capacidad',
      dayLength: 'Horas de día (minutos)',
      nightLength: 'Horas de noche (minutos)',
      language: 'Idioma',
      english: 'English',
      japanese: '日本語',
      spanish: 'Español',
      portuguese: 'Portugues',
      private: 'Privado',
      accessCode: 'Código de acceso',
      whitespaceIsNotAllowed: 'No se permiten espacios en blanco',
      invalidLength: 'Debe tener entre 4 y 20 caracteres',
      ok: 'OK',
      cancel: 'CANCELAR',
      playerJoined: '{0} se ha unido.',
    },
    DialogAccessCode: {
      title: 'Introduce el código de acceso',
      invalidAccessCode: 'Código de acceso inválido',
      close: 'CERRAR',
    },
    DialogErrorMessage: {
      banned: 'Tienes prohibido salir de esta habitación ...',
      alreadyEntered: 'Parece que ya ingresaste a esta sala con otra cuenta.',
      cantFind: "No puedo encontrar esta habitación. Por favor intente con otro.",
      notReady: 'Esta sala no está lista.',
      close: 'CERRAR',
    },
    DialogRoomLeave: {
      leave: 'Salir',
      title: 'Salir de la habitación',
      para1: '¿Estás seguro que quieres salir de la habitación?',
      cancel: 'CANCELAR',
      playerLeft: '{0} ha salido de la habitación.',
    },
    DialogPlayerKickOut: {
      title: 'Expulsar a un jugador',
      para1: '¿Estás seguro que quieres expulsar a este jugador?',
      cancel: 'CANCELAR',
      kickOutPlayer: '{0} ha sido expulsado.',
    },
    DialogRole: {
      villager: 'Eres un aldeano',
      villagerDescription: "Eres un aldeano normal y no posees ninguna habilidad.",
      seer: 'Eres un vidente',
      seerDescription: "Puedes escoger un jugador diario para descrubir cuál es su rol.",
      medium: 'Eres un médium',
      mediumDescription: "Puedes ver a qué equipo pertencía el jugador ejecutado la noche anterior pero, sólo cuando sea de día",
      knight: 'Eres un caballero',
      knightDescription: 'Cada noche puedes elegir un jugador para protegerlo. El jugador elegido no podrá ser asesinado esa noche.',
      werewolf: 'Eres un hombre lobo',
      werewolfDescription: 'Cada noche puedes elegir a un jugador para matar. Puedes hablar con otros hombres lobo en el chat de hombres lobo.',
      minion: 'Eres un secuaz',
      minionDescription: "Perteneces al equipo de los hombres lobo pero, eres visto como un humano. Podras ganar cuando los hombres lobo ganen. El secuaz no tiene ninguna habilidad y no puede ver cuáles jugadores son hombres lobo.",
      close: 'CERRAR',
    },
    DialogRoomDetails: {
      details: 'Detalles',
      daytime: 'Horas de día',
      night: 'Noche',
      minutes: 'minutos',
      capacity: 'Capacidad',
      fivePlayerVillage: '3 aldeanos, 1 vidente and 1 hombre lobo',
      ninePlayerVillage: '4 aldeanos, 1 vidente, 1 caballero, 2 hombres lobo y 1 secuaz',
      elevenPlayerVillage: '5 aldeanos, 1 vidente, 1 médium, 1 caballero, 2 hombres lobo y 1 secuaz',
      fifteenPlayerVillage: '8 aldeanos, 1 vidente, 1 médium, 1 caballero, 3 hombres lobo and 1 secuaz',
      language: 'Idioma',
      english: 'English',
      japanese: '日本語',
      spanish: 'Español',
      portuguese: 'Portugues',
      close: 'CERRAR',
    },
    DialogSettings: {
      title: 'Ajustes',
      gameName: 'Nombre del juego',
      tooLong: 'Demasiado largo',
      avatar: 'Avatar',
      avatarErrorMessage: 'El tamaño del avatar debe ser menor a 2MB',
      uploadAvatar: 'SUBIR AVATAR',
      preview: 'Vista previa',
      close: 'CERRAR',
      save: 'GUARDAR',
      cancel: 'CANCELAR',
    },
    About: {
      about: { 
        title: "Acerca de",
        para1: "Un simple hombre lobo es un servidor de juegos de hombre lobo, simple y fácil de usar.",
      },
      settingUp: {
        title: 'Cómo jugar',
        para1: '1. Presione "Crear juego" para crear una aldea nueva.',
        para2: '2. Presione "Iniciar" para comenzar el juego después de que la aldea se complete.',
        para3: "El anfitrión puede expulsar a los jugadores antes de iniciar el juego. Los jugadores pueden dejar la aldea antes de iniciar el juego. Si el anfitrión abandona la aldea, la aldea será eliminada. Si ha pasado una semana desde que la aldea fue creada y el juego no ha comenzado, esta será eliminada automáticamente.",
      },
      villageAndRoles: {
        title: 'Aldea y roles',
        para1: 'Juego de 5 jugadores',
        para2: '3 aldeanos, 1 vidente y 1 hombre lobo',
        para3: 'Juego de 9 jugadores',
        para4: '4 aldeanos, 1 vidente, 1 caballero, 2 hombres lobo y 1 secuaz',
        para5: 'Juego de 11 jugadores',
        para6: '5 aldeanos, 1 vidente, 1 médium, 1 caballero, 2 hombres lobo y 1 secuaz',
        para7: 'Juego de 15 jugadores',
        para8: '8 aldeanos, 1 vidente, 1 médium, 1 caballero, 3 hombres lobo y 1 secuaz',
      },
      supportThisSite: {
        title: 'Apoya a este sitio',
        para1: '¡Estaría realmente agradecido si compartes este sitio a través de las redes sociales! ¡Sería aún más entretenido si el número de jugadores fueran mas!',
      }, 
      feedback: {
        title: 'Contacto',
        para1: 'Cualquier queja, reclamo o sugerencia se tendra en cuenta, ¡así que sientanse libres de darme sus opiniones vía email!',
        email: 'Email',
      },
      credit: {
        title: 'Créditos',
        logo: 'Logo hecho por',
        icon: 'Ícono hecho por',
      },
    },
    Rules: {
      title: 'Reglas',
      howToWin: {
        title: 'Cómo ganar',
        para1: 'La aldea gana si pueden ejecutar a todos los hombres lobo. Los hombres lobo ganan si pueden matar suficientes aldeanos y el número de hombres lobo puede ser igual o mayor que el número de aldeanos.',
        para2: 'Los aldeanos votan por un jugador y ejecutan a un jugador cada día para que puedan matar a todos los hombres lobo. Los hombres lobo seleccionan y muerden a un jugador todas las noches.',
      },
      gameFlow: {
        title: 'Flujo del juego',
        para1: "Hay dos fases cada día y se repetirán hasta que termine el juego. Durante el día, los jugadores discuten y los aldeanos tienen que averiguar quiénes son probablemente hombres lobo para votar por un jugador. Por la noche, los aldeanos no pueden discutir, pero los hombres lobo pueden hablar en el chat de hombres lobo. Cuando llegue el día, el jugador que tenga la mayor cantidad de votos será ejecutado y el aldeano que sea el más seleccionado por los hombres lobo será asesinado. Los jugadores muertos no pueden comunicarse con los jugadores vivos pero, pueden ver el chat y hablar con otros jugadores muertos. El juego terminará cuando se ejecuten todos los hombres lobo o cuando el número de hombres lobo sea igual o mayor al número de aldeanos.",
      },
      roles: {
        title: 'Roles',
        para1: 'Un rol se decidirá al azar cuando comience el juego.',
        villager: 'Aldeano',
        para2: "Aldeano normal. No tienen ninguna habilidad.",
        seer: 'Vidente',
        para3: 'El vidente puede elegir un jugador cada día para descubrir si el jugador es hombre lobo o no. El resultado se enviará cada vez que llegue el día.',
        medium: 'Médium',
        para4: 'El médium puede ver a qué equipo pertenecía el jugador ejecutado la noche anterior, el médium conocerá esta información sólo cuando sea de día.',
        knight: 'Caballero',
        para5: "El caballero puede elegir un jugador diario para protegerlo. El jugador elegido no será asesinado en la noche por el hombre lobo. Es posible proteger al mismo jugador varias veces.",
        werewolf: 'Hombre lobo',
        para6: "El hombre lobo puede elegir un jugador cada día y el jugador más seleccionado será asesinado por la noche. Los hombres lobo pueden chatear incluso durante la noche en el chat de hombres lobo. Si ningún hombre lobo no seleccionó a un jugador, un aldeano al azar será asesinado.",
        minion: 'Secuaz',
        para7: "El secuaz pertenece al equipo de hombres lobo pero, es visto como un humano. El secuaz gana cuando los hombres lobo ganan. El secuaz no tiene ninguna habilidad y no puede ver qué jugadores son hombres lobo.",
      },
      others: {
        title: 'Otros',
        voting: 'Votación',
        para1: "Todos los jugadores deben votar por un jugador para cuando llegue el día siguiente. Los jugadores que no votaron se suicidarán. Los jugadores pueden cambiar al jugador por el que votaron en cualquier momento del día. Si hay más jugadores seleccionados por votación, el jugador ejecutado se decidirá al azar. Primero se ejecutará a un jugador, luego, si un hombre lobo sigue vivo, se matará a un aldeano. Si los hombres lobo seleccionan al mismo jugador que el que se ejecuta, nadie será asesinado. Si nadie votó y todos los jugadores se suicidan, la aldea será la ganadora.",
        message: 'Mensaje',
        para2: 'El mensaje no puede contener más de 500 caracteres.',
      }
    },
    RoomList: {
      new: 'Nuevo',
      ongoing: 'En curso',
      closed: 'Cerrado',
      name: 'Nombre',
      participants: 'Participantes',
      enter: 'Entrar',
      playerJoined: '{0} se ha unido',
    },
    Game: {
      all: 'Todo',
      werewolfChat: 'Chat de hombres lobo',
      resultsSeer: 'Resultados (Vidente)',
      resultsMedium: 'Resultados (Médium)',
      required: 'Obligatorio',
      onlyWhitespace: 'No se permiten espacios en blanco',
      tooLong: 'Demasiado largo',
    },
    Profile: {
      username: 'Nombre de usuario',
      usernameIsNotEditable: 'Puedes cambiar tu nombre de usuario una vez pasados 30 días',
      bio: 'Bio',
      tooLong: 'Demasiado largo',
      win: 'Ganaste',
      lose: 'Perdiste',
      winRate: 'Promedio de victorias',
      role: 'Rol',
      villager: 'Aldeano',
      werewolf: 'Hombre lobo',
      seer: 'Vidente',
      medium: 'Médium',
      knight: 'Caballero',
      minion: 'Secuaz',
      save: 'GUARDAR',
      cancel: 'CANCELAR',
    },
  }
}