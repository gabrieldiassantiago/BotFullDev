
export const menuPrincipal  = (botInfo)=> { 
    let {prefixo} = botInfo
    return `|
|>----〖🤖 *FullDev*〗
|
|- Digite um dos comandos abaixo:
|
|- *${prefixo}menu* 1  ⚒️ Utilidades
|- *${prefixo}menu* 2  👨‍👩‍👧‍👦 Grupo`
}

export const menuUtilidades = (botInfo)=>{
    let {prefixo} = botInfo
    return `|
|>----〖🤖 *FullDev*〗
|
|>---〖⚒️ *UTILITÁRIOS*〗
|
|- *${prefixo}ia* frase - Recebe uma resposta da IA.
|- *${prefixo}traduz* idioma texto - Traduz um texto para o idioma escolhido.
|- *${prefixo}pesquisa* texto - Faz uma rápida pesquisa na internet.
|- *${prefixo}calc* expressao - Calcula alguma conta que queira fazer.
`
}

export const menuGrupo = (admin, botInfo)=>{
    let {prefixo} = botInfo
    if(admin){
        return `|
|>----〖🤖 *FullDev*〗
|
|>---〖👨‍👩‍👧‍👦 *GRUPO*〗
|
|- *${prefixo}adms* - Lista todos administradores.
|- *${prefixo}status* - Vê os recursos ligados/desligados.
|- *${prefixo}regras* - Exibe a descrição do grupo com as regras.
|- *${prefixo}mt* mensagem - Marca todos MEMBROS/ADMINS com uma mensagem.
|- *${prefixo}rt* - Responda uma mensagem para retransmitir e marcar todos os membros.
|- *${prefixo}mm* mensagem - Marca os MEMBROS com uma mensagem.
|- *${prefixo}fotogrupo* - Altera foto do grupo
|- *${prefixo}dono* - Mostra dono do grupo.
|
|--〖🚫 *BLOQUEIO DE COMANDOS*〗
|
|- *${prefixo}bcmd* [comando1 comando2 etc] - Bloqueia os comandos escolhidos no grupo.
|- *${prefixo}dcmd* [comando1 comando2 etc] - Desbloqueia os comandos escolhidos no grupo.
|
|--〖🧰 *RECURSOS*〗 
|
|- *${prefixo}mutar* - Ativa/desativa o uso de comandos.
|- *${prefixo}autosticker* - Ativa/desativa a criação automática de stickers.
|- *${prefixo}alink* - Ativa/desativa o anti-link.
|- *${prefixo}bv* - Ativa/desativa o bem-vindo.
|- *${prefixo}afake* - Ativa/desativa o anti-fake.
|- *${prefixo}aflood* - Ativa/desativa o anti-flood.
|
|--〖⌨️ *ADMINISTRATIVO*〗
|
|- *${prefixo}add* +55 (21) 9xxxx-xxxx - Adiciona ao grupo.
|- *${prefixo}ban* @marcarmembro - Bane do grupo.
|- *${prefixo}restrito* - Abre/Restringe o grupo só para ADMS.
|- *${prefixo}promover* @marcarmembro - Promove a ADM.
|- *${prefixo}rebaixar* @marcaradmin - Rebaixa a MEMBRO.
|- *${prefixo}link* - Exibe o link do grupo.
|- *${prefixo}rlink* - Redefine o link do grupo.
|- *${prefixo}apg* - Apaga uma mensagem do grupo.
|
|--〖👁️ *REVELAR MENSAGENS*〗
|
|- *${prefixo}revelar* - Revela o contéudo de uma mensagem de visualização única.
|
|--〖📊 *ENQUETE*〗
|
|- *${prefixo}enquete* pergunta,opcao1,opcao2,etc.. - Abre uma enquete com uma pergunta e as opçôes.
`
    } else {
        return `|
|>----〖🤖 *FullDev*〗
|
|>---〖👨‍👩‍👧‍👦 *GRUPO*〗
|
|--〖🛠️ *GERAL*〗
|- *${prefixo}regras* - Exibe a descrição do grupo com as regras.
|- *${prefixo}adms* - Lista todos administradores.
|- *${prefixo}dono* - Mostra dono do grupo.
|
`
    }
}