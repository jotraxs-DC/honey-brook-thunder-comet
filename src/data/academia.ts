export const DISCORD_INVITE = "https://discord.com/invite/v4KSBF6QHw";

export const SOCIALS = [
  { label: "X · @Jotraxs", href: "https://x.com/Jotraxs" },
  { label: "X · @jotraxs_ok", href: "https://x.com/jotraxs_ok" },
  { label: "YouTube", href: "https://www.youtube.com/@JotraxsYT" },
  { label: "Instagram", href: "https://www.instagram.com/jotraxs_ok/" },
  { label: "TikTok", href: "https://www.tiktok.com/@jotraxs" },
  { label: "Carrd", href: "https://jotraxs.carrd.co/" },
] as const;

export type Post = {
  id: string;
  date: string;
  tag: string;
  text: string;
  href: string;
  note?: string;
};

/** Citas textuales de publicaciones públicas de @Jotraxs (y una de @jotraxs_ok). */
export const POSTS: Post[] = [
  {
    id: "2026694926021390692",
    date: "25 feb 2026",
    tag: "Escuela",
    text: "#MODS hoy tengo el gusto de decir que oficialmente se habré la escuela de mods, un lugar donde tendrá recursos y orientación para nuevos Moderadores de Twitch y discord, la misma estará dispuesta para público.",
    href: "https://x.com/Jotraxs/status/2026694926021390692",
  },
  {
    id: "2026694935425044659",
    date: "25 feb 2026",
    tag: "Programa",
    text: "Te integraremos herramientas para usar, para que sirve así también los costos que implica, si ser mod también se considera trabajo, informe y más.",
    href: "https://x.com/Jotraxs/status/2026694935425044659",
    note: "En el mismo hilo dejó el enlace al servidor de Discord.",
  },
  {
    id: "2027055126028939444",
    date: "26 feb 2026",
    tag: "Comunidad",
    text: "Holanda!! #twitch Moderadores les invito a esta comunidad donde compartí herramientas para ustedes y comunidad. Quedan invitados y los Moderadores veteranos también están invitados a hacer feedback de sus experiencias!! Arriba la pala!!",
    href: "https://x.com/Jotraxs/status/2027055126028939444",
  },
  {
    id: "2027526015551991843",
    date: "27 feb 2026",
    tag: "Streamers",
    text: "#streamer !!! Si tú necesitas Moderadores o Sientes que tus mods no son buenos... No los eche dale una vuelta y mándalos a la Academia de Mods! Aquí se aprende a trabajar en equipo y desarrollar una buena comunidad",
    href: "https://x.com/Jotraxs/status/2027526015551991843",
  },
  {
    id: "2018399961470140582",
    date: "2 feb 2026",
    tag: "Oficio",
    text: "A fin de cuentas las herramientas es el mecanismo que ayuda a generar más y de manera eficiente",
    href: "https://x.com/Jotraxs/status/2018399961470140582",
  },
  {
    id: "2105808405008880060",
    date: "1 oct 2026",
    tag: "Discord",
    text: "Discord y sus problemas de seguridad. Si estás harto de ataques de bots y de eliminar los mensajes de a uno, en su server hay material de moderación y soporte técnico que explica con ejemplos.",
    href: "https://x.com/Jotraxs/status/2105808405008880060",
    note: "Paráfrasis del post del 1 oct 2026. El original va con su tono; la idea es no moderar un raid a mano.",
  },
  {
    id: "2106427214879457484",
    date: "3 oct 2026",
    tag: "Seguridad",
    text: "Root la alternativa mas rara de los Streamers?, sip y creo que a muchas personas le va a convenir cambiar Discord por Root, Sobre todo que últimamente ya la seguridad de DC cayo de forma alarmante",
    href: "https://x.com/Jotraxs/status/2106427214879457484",
    note: "Opinión de Jotraxs, no una recomendación de esta página para abandonar Discord.",
  },
  {
    id: "2055247127282843836",
    date: "15 may 2026",
    tag: "Respaldo",
    text: "Estoy esperando una respuesta más concreta pero aún hay esperanza, no obstante recomiendo guardar todo y buscar alternativas, en mi servidor de discord tengo muchas herramientas para los creadores de contenido, tras más de 2 años aprendí que todo lo bueno se transforma mal",
    href: "https://x.com/Jotraxs/status/2055247127282843836",
    note: "Publicado al hilo del aviso de StreamElements sobre su futuro.",
  },
  {
    id: "2037018568525590552",
    date: "26 mar 2026",
    tag: "Server",
    text: "tengo un server de mods si te gustaria participar",
    href: "https://x.com/Jotraxs/status/2037018568525590552",
  },
  {
    id: "2036876174211662071",
    date: "25 mar 2026",
    tag: "Agencia",
    text: "me pongo en contacto tengo una agencia de mods si te interesa",
    href: "https://x.com/Jotraxs/status/2036876174211662071",
  },
  {
    id: "2043722780277895514",
    date: "13 abr 2026",
    tag: "Oficio",
    text: "nos van a pagar a los mods!! okno XD",
    href: "https://x.com/jotraxs_ok/status/2043722780277895514",
    note: "De @jotraxs_ok, la cuenta que se presenta como moderador de Twitch y Discord.",
  },
];

export type Lesson = {
  id: string;
  modulo: string;
  title: string;
  from: string;
  body: string;
};

export const LESSONS: Lesson[] = [
  {
    id: "apertura",
    modulo: "01",
    title: "La escuela es pública",
    from: "25 feb 2026",
    body: "Jotraxs abrió la escuela para moderadores nuevos de Twitch y de Discord: recursos y orientación, no un grupo cerrado. Si estás empezando, el primer trabajo no es memorizar comandos. Es entender a quién cuidás y con quién coordinás.",
  },
  {
    id: "equipo",
    modulo: "02",
    title: "No eches al mod. Reciclalo.",
    from: "27 feb 2026",
    body: "El post a streamers es directo: si el equipo modera mal, no se reemplaza de una. Se lo manda a formarse. Trabajar en equipo y desarrollar la comunidad es el objetivo, no ganar la discusión del chat.",
  },
  {
    id: "herramientas",
    modulo: "03",
    title: "Para qué sirve cada herramienta",
    from: "25 feb 2026",
    body: "El programa que anunció integra herramientas, para qué sirven y qué cuestan. Una herramienta no es un adorno del panel: es el mecanismo que, en sus palabras, ayuda a generar más y de manera eficiente. Si no sabés qué problema resuelve, no la actives.",
  },
  {
    id: "trabajo",
    modulo: "04",
    title: "¿Ser mod se considera trabajo?",
    from: "25 feb 2026 · 13 abr 2026",
    body: "Lo dejó como pregunta abierta, y meses después @jotraxs_ok lo cerró en chiste: nos van a pagar… okno. Igual las horas existen. Anotalas. El turno, la carga y el informe son parte del oficio aunque nadie pase factura.",
  },
  {
    id: "informe",
    modulo: "05",
    title: "El informe no es opcional",
    from: "25 feb 2026",
    body: "Prometió informe junto con las herramientas. Un ban sin motivo anotado es un problema para el próximo mod. La bitácora de esta página guarda el turno en este navegador: usuario, acción, motivo. Al cerrar, se copia un informe.",
  },
  {
    id: "veteranos",
    modulo: "06",
    title: "Los veteranos también entran",
    from: "26 feb 2026",
    body: "No armó la comunidad solo para principiantes. Invitó a mods con experiencia a dejar feedback. Si ya tenés criterio, el aporte es contar cómo lo resolviste, no corregir en público a quien está aprendiendo.",
  },
  {
    id: "raid",
    modulo: "07",
    title: "No borres un raid de a un mensaje",
    from: "1 oct 2026",
    body: "Cuando Discord se llena de bots, ir mensaje por mensaje es perder. El post apunta a sistemas: verificación, AutoMod, borrado masivo, audit log y alguien que explique con ejemplos. El checklist anti-raid de abajo sigue esa idea.",
  },
  {
    id: "caja",
    modulo: "08",
    title: "Guardá todo. Lo bueno se transforma mal.",
    from: "15 may 2026",
    body: "Tras más de dos años, su lectura del aviso de StreamElements fue concreta: guardar todo y buscar alternativas. Comandos, timers, términos bloqueados y roles no viven en una sola marca. Exportá antes de que el panel decida por vos.",
  },
];

export type CommandRow = {
  platform: "Twitch" | "Discord";
  name: string;
  use: string;
  sample: string;
};

export const COMMANDS: CommandRow[] = [
  {
    platform: "Twitch",
    name: "Timeout",
    use: "Silencia a alguien un rato. El máximo de Twitch es 1.209.600 segundos (14 días).",
    sample: "/timeout usuario 600 motivo corto",
  },
  {
    platform: "Twitch",
    name: "Advertir",
    use: "Aviso formal antes de escalar. Si el cliente no tiene el comando, está el botón Advertir del Mod View.",
    sample: "/warn usuario motivo",
  },
  {
    platform: "Twitch",
    name: "Ban / unban",
    use: "Expulsión del canal. Siempre con motivo, y anotado en la bitácora.",
    sample: "/ban usuario motivo",
  },
  {
    platform: "Twitch",
    name: "Slow",
    use: "Cada viewer espera N segundos entre mensajes. Útil cuando el chat se acelera, no como castigo eterno.",
    sample: "/slow 15",
  },
  {
    platform: "Twitch",
    name: "Followers",
    use: "Solo habla quien sigue al canal hace cierto tiempo. Cortá hate raids sin apagar la comunidad.",
    sample: "/followers 10m",
  },
  {
    platform: "Twitch",
    name: "Subscribers / emote only",
    use: "Restricciones más duras. Se apagan apenas el chat vuelve a ser habitable.",
    sample: "/subscribers",
  },
  {
    platform: "Twitch",
    name: "Unique chat",
    use: "Bloquea mensajes repetidos. Sirve contra copypasta, no contra una conversación normal.",
    sample: "/uniquechat",
  },
  {
    platform: "Twitch",
    name: "Shield mode",
    use: "Escudo del canal ante un raid. Se activa en Mod View; no se discute con el raid en voz.",
    sample: "Mod View → Shield",
  },
  {
    platform: "Twitch",
    name: "Clear",
    use: "Limpia el chat visible. No reemplaza banear a quien lo ensució.",
    sample: "/clear",
  },
  {
    platform: "Twitch",
    name: "Términos y AutoMod",
    use: "Palabras bloqueadas y la cola de AutoMod viven en el panel del creador. El mod aprueba o niega; no inventa la política del canal.",
    sample: "Creator Dashboard → Moderación",
  },
  {
    platform: "Discord",
    name: "Timeout",
    use: "Silencia a un miembro hasta 28 días. Mejor que borrar 40 mensajes iguales.",
    sample: "Clic derecho → Aislar · 1 h",
  },
  {
    platform: "Discord",
    name: "Ban con borrado",
    use: "Banear y borrar el historial reciente (hasta 7 días). Es la respuesta a un bot, no el mensaje suelto.",
    sample: "Banear → eliminar mensajes · 1 h",
  },
  {
    platform: "Discord",
    name: "Modo lento",
    use: "Por canal. Bajá la cadencia mientras ordenás permisos.",
    sample: "Ajustes del canal → Modo lento",
  },
  {
    platform: "Discord",
    name: "AutoMod",
    use: "Spam, menciones masivas y listas de palabras. Configuralo antes del raid, no durante.",
    sample: "Ajustes del servidor → AutoMod",
  },
  {
    platform: "Discord",
    name: "Verificación",
    use: "Subí el nivel y, si hace falta, pausá invitaciones. Un enlace público abierto es una puerta.",
    sample: "Seguridad → Nivel de verificación",
  },
  {
    platform: "Discord",
    name: "Registro de auditoría",
    use: "Mirá quién invitó, qué bot entró y qué rol se tocó. Sin esto estás adivinando.",
    sample: "Ajustes → Registro de auditoría",
  },
];

export type LadderCase = {
  id: string;
  label: string;
  platform: "Ambas" | "Twitch" | "Discord";
  steps: Record<"primera" | "repite" | "grave", { action: string; detail: string; sample: string }>;
};

export const LADDER: LadderCase[] = [
  {
    id: "spam",
    label: "Spam o copypasta",
    platform: "Ambas",
    steps: {
      primera: {
        action: "Borrar y avisar",
        detail: "Un mensaje repetido no es un ban. Se borra, se dice la regla en una línea y se sigue.",
        sample: "Ese mensaje no va. Si lo repetís, hay timeout.",
      },
      repite: {
        action: "Timeout corto",
        detail: "Segunda vez en el mismo stream: silencio breve. Anotá usuario y duración.",
        sample: "/timeout usuario 600 spam repetido",
      },
      grave: {
        action: "Timeout largo o ban",
        detail: "Si sigue al volver, o son varias cuentas, ya no es un despiste. Ban y reporte si parece bot.",
        sample: "/ban usuario spam / multicuenta",
      },
    },
  },
  {
    id: "links",
    label: "Links no permitidos",
    platform: "Ambas",
    steps: {
      primera: {
        action: "Borrar + regla",
        detail: "Mucha gente pega un enlace sin leer las reglas. Explicá dónde sí se puede, si es que se puede.",
        sample: "Los links van solo donde lo dice el canal. Este lo saco.",
      },
      repite: {
        action: "Timeout",
        detail: "La segunda es elección. Timeout y, en Discord, revisá si AutoMod ya debería filtrarlos.",
        sample: "/timeout usuario 600 links",
      },
      grave: {
        action: "Ban",
        detail: "Phishing, acortadores raros o el mismo link en diez canales: ban y aviso al resto del staff.",
        sample: "/ban usuario phishing",
      },
    },
  },
  {
    id: "insulto",
    label: "Insulto al chat, sin odio",
    platform: "Ambas",
    steps: {
      primera: {
        action: "Aviso",
        detail: "Se corta el tono sin convertir el chat en un tribunal. Una advertencia clara alcanza.",
        sample: "/warn usuario insulto al chat",
      },
      repite: {
        action: "Timeout",
        detail: "Si vuelve al mismo tono, se lo saca un rato para que el chat respire.",
        sample: "/timeout usuario 1800 insultos",
      },
      grave: {
        action: "Ban del stream o del día",
        detail: "Cuando ya no hay conversación posible. El motivo queda escrito para el próximo mod.",
        sample: "/ban usuario hostigamiento reiterado",
      },
    },
  },
  {
    id: "odio",
    label: "Odio, acoso o amenazas",
    platform: "Ambas",
    steps: {
      primera: {
        action: "Ban directo",
        detail: "No se negocia. No se pide que «lo explique». Se saca, se denuncia en la plataforma y se avisa al streamer.",
        sample: "/ban usuario odio / amenaza",
      },
      repite: {
        action: "Ban + reporte",
        detail: "Cuenta nueva con el mismo discurso: ban, términos bloqueados y reporte. No respondas el contenido.",
        sample: "Ban · reportar · término bloqueado",
      },
      grave: {
        action: "Escudo y reporte",
        detail: "Si entra en ráfaga, es un raid. Shield o followers-only en Twitch; verificación y bans con borrado en Discord.",
        sample: "Shield + /followers 10m",
      },
    },
  },
  {
    id: "promo",
    label: "Autopromo",
    platform: "Ambas",
    steps: {
      primera: {
        action: "Aviso",
        detail: "Decí dónde se promociona, si el canal lo permite. Muchos canales tienen un día o un canal de #promo.",
        sample: "La promo va en el espacio del canal, no en medio del directo.",
      },
      repite: {
        action: "Borrar y timeout corto",
        detail: "La segunda ya conocía la regla.",
        sample: "/timeout usuario 300 autopromo",
      },
      grave: {
        action: "Ban si es spam de canales",
        detail: "Cuentas que solo entran a pegar su link: ban. No es un viewer.",
        sample: "/ban usuario spam de promo",
      },
    },
  },
  {
    id: "spoiler",
    label: "Spoilers",
    platform: "Twitch",
    steps: {
      primera: {
        action: "Borrar + aviso",
        detail: "Se saca el mensaje y se recuerda la etiqueta. No hace falta humillar a quien se adelantó.",
        sample: "Spoiler fuera. Ese mensaje no queda.",
      },
      repite: {
        action: "Timeout",
        detail: "Si insiste después del aviso, timeout. El chat no es el lugar para «pero es verdad».",
        sample: "/timeout usuario 600 spoilers",
      },
      grave: {
        action: "Timeout largo",
        detail: "Rellenar el chat de spoilers a propósito es sabotaje del directo, no un error.",
        sample: "/timeout usuario 86400 spoilers a propósito",
      },
    },
  },
  {
    id: "bots",
    label: "Bots o raid",
    platform: "Ambas",
    steps: {
      primera: {
        action: "Contener, no dialogar",
        detail: "No contestes. Activá el modo de contención y recién ahí limpiá. Borrar de a uno es la trampa.",
        sample: "Twitch: Shield. Discord: verificación + modo lento.",
      },
      repite: {
        action: "Borrado masivo y bans",
        detail: "Ban con historial en Discord. En Twitch, followers-only, unique chat y términos del raid.",
        sample: "Ban + borrar última hora",
      },
      grave: {
        action: "Cerrar la puerta y avisar al staff",
        detail: "Pausá invitaciones, revisá el audit log y dejá un informe. Después se habla, no durante el fuego.",
        sample: "Ver checklist anti-raid",
      },
    },
  },
  {
    id: "cuidado",
    label: "Alguien pide ayuda (crisis)",
    platform: "Ambas",
    steps: {
      primera: {
        action: "No lo castigues",
        detail: "Un mensaje de crisis no se borra por vergüenza ni se premia con atención del directo. Se frena con cuidado, se avisa al streamer y se denuncia por los canales de la plataforma si hace falta.",
        sample: "Si estás en Argentina, la línea 135 atiende prevención del suicidio. En otros países, el recurso local equivalente.",
      },
      repite: {
        action: "Sacar el foco del chat",
        detail: "No dejes que el chat diagnostique. Un mod toma el tema en privado si la plataforma lo permite, o deriva. No publiques métodos ni detalles.",
        sample: "Staff avisado · chat redirigido",
      },
      grave: {
        action: "Escalar a la plataforma",
        detail: "Amenaza concreta: herramientas de reporte de Twitch o Discord, y el streamer decide si corta. El mod no improvisa de psicólogo.",
        sample: "Reporte de la plataforma",
      },
    },
  },
];

export const RAID_STEPS = [
  {
    id: "tw-shield",
    group: "Twitch",
    label: "Activar Shield y no responder el raid en voz ni en el chat.",
  },
  {
    id: "tw-follow",
    group: "Twitch",
    label: "Followers-only (10m o más) o subs-only si el raid no afloja.",
  },
  {
    id: "tw-unique",
    group: "Twitch",
    label: "Unique chat y términos bloqueados con las frases del raid.",
  },
  {
    id: "tw-report",
    group: "Twitch",
    label: "Reportar cuentas. Después del stream, mirar las analíticas de moderación.",
  },
  {
    id: "dc-verify",
    group: "Discord",
    label: "Subir verificación y pausar invitaciones.",
  },
  {
    id: "dc-slow",
    group: "Discord",
    label: "Modo lento en canales públicos. AutoMod de spam y menciones, si no estaba.",
  },
  {
    id: "dc-mass",
    group: "Discord",
    label: "Ban con borrado de historial. No ir mensaje por mensaje.",
  },
  {
    id: "dc-audit",
    group: "Discord",
    label: "Audit log: qué bot entró, quién cambió un rol, qué invitación se usó.",
  },
  {
    id: "dc-roles",
    group: "Discord",
    label: "Sacar permisos peligrosos a roles que no deberían tenerlos.",
  },
  {
    id: "both-note",
    group: "Las dos",
    label: "Aviso al staff en canal privado y una línea en la bitácora.",
  },
] as const;

export const BACKUP_STEPS = [
  { id: "se", label: "Exportar comandos, timers y contadores del bot (StreamElements u otro)." },
  { id: "terms", label: "Copiar la lista de términos bloqueados de Twitch." },
  { id: "automod", label: "Anotar nivel de AutoMod, excepciones y mods permitidos." },
  { id: "mods", label: "Lista de mods, VIP y roles de Discord, con para qué existe cada uno." },
  { id: "rules", label: "Reglas del canal y del server en un documento que no viva solo en un mensaje pineado." },
  { id: "invites", label: "Invitaciones activas de Discord: cuáles son públicas y cuáles se pueden revocar." },
  { id: "alt", label: "Una alternativa probada por si la herramienta principal cambia de dueño o de precio." },
] as const;

export const RULE_OPTIONS = [
  { id: "links", label: "Sin links, salvo los que habilite el staff" },
  { id: "promo", label: "Sin autopromo en el chat del directo" },
  { id: "spoilers", label: "Sin spoilers de la partida, la serie o el arco" },
  { id: "backseat", label: "Sin backseat: no se dicta cómo jugar" },
  { id: "respect", label: "Sin insultos, odio ni acoso. Se banea, no se debate" },
  { id: "spam", label: "Sin spam, copypasta ni mayúsculas sostenidas" },
  { id: "lang", label: "Idioma del chat: español. Otro idioma solo si el canal lo pide" },
  { id: "nsfw", label: "Sin NSFW ni temas sexuales en un canal que no es para eso" },
  { id: "mods", label: "La palabra del mod cierra el tema. Después se habla con el streamer, no en el chat" },
] as const;
