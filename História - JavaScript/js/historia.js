var nome;
nome = prompt("Defina um nome para seu personagem.");

var conteudoA = " <div > <p> &nbsp;O sol começa a se pôr na cidade de Romperion, neblina entre os céus e o frio atinge os destroços entre as ruas. Em um prédio caído um gato atravessa entre os escombros, buscando por comida o felino pisa em uma peça metálica, de repente uma luz fraca acende, o gato se assusta e corre para fora do cômodo, um som mecânico atinge o ambiente.</p> </div> <div class='null' align='center'><button class='comecar' onclick='carregarConteudo(comeco)'>COMEÇAR!</button></div>";

var comeco = " <div> <p> &nbsp;Uma figura de repente se levanta com dificuldade, se parece com uma espécie de aparato humanoide. A criatura se direciona para fora do cômodo lutando com sua falta de bateria e acaba por pisar no dispositivo, ao olhar para baixo identifica-se que é compatível com a parte de sua sucata, ao implantá-lo é emitido uma lembrança de um local desconhecido. Ao tentar se dirigir para este lugar, a máquina reencontra o gato.</p> </div><button onclick='carregarConteudo(seguirOgato)'>Seguir o gato</button> <button onclick='carregarConteudo(seguirSozinho)'>Seguir sozinho</button>";

var seguirOgato = " <div> <p> &nbsp;A sucata segue o felino até certo ponto, de repente percebe-se uma falta de energia levando a queda repentina. O gato se assusta com o som estrondoso e corre novamente.</p> </div> <button onclick='carregarConteudo(conteudoB)'>Continuar</button>";

var seguirSozinho = "<div> <p> &nbsp;A sucata segue sozinha pelas ruas desertas, porém sem conhecer o local se perde, tentando apenas se guiar por meio de sua única lembrança. Percebe-se uma falta de energia levando a queda repentina.</p></div> <button onclick='carregarConteudo(conteudoB)'>Continuar</button> ";

var conteudoB = "<div> <p> &nbsp;Ao acordar, se depara com uma figura humana em sua frente, com uma ferramenta tecnológica em suas mãos, ao recuperar seu foco de visão, consegue enxergar que aquela figura era uma menina, com seu gato do lado, o mesmo que o encontrou mais cedo. A menina olhava com curiosidade para aquele humanoide, o mesmo estava extremamente danificado após a queda, com partes enferrujadas e quebradas. A garota conseguiu recuperar bateria e faze-lo acordar. Menina: Você se lembra de algo? A criatura não responde apenas a observa atentamente.  Menina: Okay, você quer vir comigo? Consigo consertar você, juro!</p> </div> <button onclick='carregarConteudo(seguirAmenina)'>Seguir a menina</button> <button onclick='carregarConteudo(seguirSozinho1)'>Ir em busca da memória</button>";

var seguirSozinho1 = ` <div> <p> &nbsp;A máquina se afasta da menina e se levanta ainda com dificuldade e começa andar em direção oposta, ainda é possível escutar  voz estridente da garota tentando chamar sua atenção, mas o humanoide segue sem olhar para trás. A garota olha a figura desaparecer durante o caminho, sem nem ao menos saber sua origem ou mesmo o seu nome.</p></div> <button onclick='carregarConteudo(seguirSozinho2)'>Continuar</button>`;

var seguirSozinho2 = `<div><p>&nbsp;Se passam dias, a criatura continua sua busca pelo local de sua única lembrança.</p></div><button onclick='carregarConteudo(seguirSozinho3)'>Continuar</button>`

var seguirSozinho3 = `<div><p>  Avistou um enorme portão vermelho-sangue cercado por muros altos, porém, sem ao menos conseguir processar aquilo em que estava a diante, aquele pobre e fraco aparato começa a perder sua visão, e desaba em frente ao portão, com suas energias chegando ao fim, sem mais nem menos o nome ${nome} nunca mais foi mencionado.</p> </div><button onclick='carregarConteudo(final1)'>Finalizar</button>`

var final1 = "<div> <p>Você descobriu a verdade cedo demais, favor recomeçar. </div>  <button onclick='carregarConteudo(conteudoB)'>Recomeçar</button>";

var seguirAmenina = "<div><p>&nbsp;Com o caminhar lento, na rua deserta em meio a uma densa neblina, a máquina, a menina e o gato chegam a uma garagem, o que se parecia ser uma oficina cheia de peças e ferramentas simples e aparentemente bem desgastadas. A menina pede para que o robô se sente em uma cadeira de manutenção, para que seja feitas alguns ajustes críticos.<p> Qual cor de peça você quer?</p> </div> <div class='null' align='center'> <button class='azul' onclick='carregarConteudo(pecaAzul)'>AZUL</button> <button class='vermelho' onclick='carregarConteudo(pecaVermelha)'>VERMELHA</button> <button class='cinza' onclick='carregarConteudo(pecaCinza)'>CINZA</button></div>";

var pecaAzul = '<div><p>&nbsp;O robô aponta para o azul lentamente, ele sente um familiaridade com a cor e a olha por um tempo</p> <p>Menina: "É uma ótima escolha! Amo essa cor"</p></div> <button onclick="carregarConteudo(conteudoGaragem)">Continuar</button>';

var pecaVermelha = '<div><p>Robô escolhe o vermelho rapidamente, porém se torna inquieto com a escolha</p> <p>Menina: "Hmm, não gosto muito desta cor, me lembra do passado."</p> </div>  <button onclick="carregarConteudo(conteudoGaragem)">Continuar</button>';

var pecaCinza = '<div> <p>Robô escolhe o cinza sem hesitar, e permanece sentado em uma cadeira enquanto observa o local.</p> <p>Menina: "Tá, é uma boa cor..." </p> </div> <button onclick="carregarConteudo(conteudoGaragem)">Continuar</button>';

var conteudoGaragem = '<div><p>-Mas enfim, deixa eu analisar umas coisinhas aqui...Essa logo no seu peito, “Caine”, conheço - diz a menina com um olhar de medo e ao mesmo tempo com raiva - você, se lembra de mais alguma coisa do seu passado? </p></div><button onclick="carregarConteudo(cG1)">Continuar</button>';

var cG1 = '<div><p>Ela arruma a voz do Robô:</p> <p>Robô: Iniciando sistema de voz…</p> <p>Robô: Fazendo avaliação de status geral…</p> <p>Robô: Fazendo avaliação de status geral…</p> <p>Robô: Espaços remanescentes para chips de memória:</p><p> Status: Desabilitado </p><p>Quantidade: 2 disponíveis</p><p>Nível de Verificação do sistema: 70%</p><p>Espaços remanescentes para partes extras: habilitado</p></div> <button onclick="carregarConteudo(cG2)">Continuar</button>';

var cG2 = '<div><p>&nbsp;Menina: Ok, calma, é...deixa eu ver aqui, vou procurar uma peça ali...Achei! Vou trocar algumas partes aqui. Deixa eu ver...Ótimo! Verifica novamente</p></div> <button onclick="carregarConteudo(cG3)">Verificar</button>';

var cG3 = '<div><p>Robô: Sistema Reiniciado:</p><p>Espaços remanescentes para chips de memória: %$#@;</p><p>Status: Habilitado</p><p>Nível de verificação do Sistema: 100%</p><p>Robô: Status atual: Sistemas em balanceamento, bateria estável, sistemas funcionando, movimentação Ok, armas com poucas munições, memória fragmentada. Positivo e operante, por favor se identifique.</p> </div>  <button onclick="carregarConteudo(cG4)">Concluir</button>';

var cG4 = '<div> <p>&nbsp;A menina se assusta um pouco mas fica muito contente com seu trabalho</p> <p> - Eu me chamo Karen Hopper Grenville, mas me chama de Karen ou Lovelace, sei lá, acho que gostaria de ser chamada assim igual a minha mãe.</p></div>  <button onclick="carregarConteudo(cG5)">Continuar</button>';

var cG5 = '<div><p>&nbsp;O Robô se demonstra pensativo por um tempo, mas não consegue lembrar de algo que se encaixe com essa fala dela.</p> </div> <button onclick="carregarConteudo(cG6)">Continuar</button>';

var cG6 = '<div><p>Karen: Então tá tudo certinho, né?</p><p>Robô: Sim, asas batendo, marcha de decolagem, turbina e já!</p><p>Karen: Você voa???</p><p>Robô: Pela verificação do meu sistema, eu não voou, só achei essa fala na minha memória.</p><p>Karen: Que pena, mas tá tudo bem, você tá funfando e tem até armas, sensacional!.</p><p>Eii, você tem um nome? Ah... você perdeu as memórias né, pode então escolher um nome mais legal de todos!</p> </div>  <button onclick="carregarConteudo(conteudoNome)">Continuar</button>';

var conteudoNome = '<div><p>Eaí? Que nome vai ser?</p></div> <button onclick="carregarConteudo(cG7)">Responder</button>';

var cG7 = `<div><p>Uau! ${nome} é um ótimo nome.</p> <p> Eu estou procurando meu pai, quero esclarecer umas coisas, ele sumiu do nada, enfim, quer vir comigo? - Pergunta Karen com um tom triste e abalado (tururu).</p> </div> <button onclick="carregarConteudo(conteudoC)">Decidir</button>`;

var conteudoC = '<div><p>&nbsp;Poderia me ajudar? </p> </div> <button onclick="carregarConteudo(caminhoB)">Não, seguir para a Fábrica Vermelha.</button> <button onclick="carregarConteudo(caminhoA)">Sim, prosseguir com a menina.</button>';

var caminhoA ='<div><p>&nbsp;Com sua voz restaurada, o robô responde que quer decididamente ajudar a menina em sua jornada para encontrar o Pai e conseguir esclarecer o mistério de sua indignação.</p></div>  <button onclick="carregarConteudo(caminhoA1)">Continuar</button>';

var caminhoA1 = '<div><p>&nbsp;Eles vão passando por uma extensa estrada deserta, toda cheia de destroços e naves antigas disfuncionais. Logo a frente começaram a sentir uma presença estranha, ouve-se barulhos estridentes também, como se fossem turbinas, ao olhar para cima veem uma máquina, com asas, capaz de voar! Com certeza outro robô, mas o que fizera ali? Apenas pousou em cima de um prédio e ficou os observando de longe enquanto caminhava até a cidade.</p> </div> <button onclick="carregarConteudo(cidade)">Continuar</button>';

var caminhoB = '<div><p>&nbsp;Com sua voz restaurada, o robô decide ouvir mais a sua curiosidade do que aquela humana estranha, logo, levanta da cadeira, e sem olhares nem falas, passa ao portão e começa a seguir pela estrada a fora em busca de sua origem.</p> </div> <button onclick="carregarConteudo(caminhoB1)">Continuar</button>';

var caminhoB1 = '<div><p>&nbsp;No caminho em cima de uma ponte, encontrou uma mala semiaberta de um lado da estrada, e do outro alguns destroços de um robô que parecia ser militar, em cada um havia um dispositivo de memória intacto e compatível com sua lataria. A mala era um kit avançado de um protocolo para robôs médicos, já nos destroços em meio as peças do robô militar, avistava-se um dispositivo de protocolo de auto defesa. Opção de escolhas:</p> </div>  <button onclick="carregarConteudo(c2)">Auto defesa</button> <button onclick="carregarConteudo(c3)">Protocolo médico.</button>';

var c2 = '<div><p>Adquire uma memória de luta</p></div>  <button onclick="carregarConteudo(caminhoB2)">Continuar.</button>';

var c3 = '<div><p>Adquire memórias de primeiros socorros</p> </div> <button onclick="carregarConteudo(caminhoB2)">Continuar.</button>';

var caminhoB2 = '<div><p>&nbsp;"Hmm, parece que algo está se remexendo em sua lataria, seria possível que essas peças já estavam em sua programação, prontas para serem ativadas? Que tipo de lataria é essa? Bom, seria de maior vantagem então pegar o outro dispositivo."</p> <p>&nbsp;Ao tentar pegar aquela outra memória ao lado, a ponte  que já estava desgastada e rachada pelo tempo, se desfaz e aquele pedaço em que segurava o dispositivo, e tudo cai ao mar. "Bom talvez não precisasse tanto daquela memória, enfim."</p></div> <button onclick="carregarConteudo(caminhoB3)">Continuar.</button>';

var caminhoB3 = `<div><p>&nbsp; ${nome}  continua a caminhar em direção a Grande Fábrica Vermelha, este começou a virar um nome característico de sua memória. Dessa vez chegando a um cruzamento em uma grande floresta escura, parando em meio aos dois caminhos, foi estranho finalmente encontrar alguém depois de tanto tempo, e no meio da floresta! Por que ele está chamando?  ${nome}  começa a se aproximar desta pessoa, até que enfim ele olha para cima, sentado em uma pedra, e fala:</p> <p>-O que um robô de seu tamanho e desgastado desta maneira está fazendo aqui sozinho, achei que não existiam mais de vocês, pelo menos do seu tipo? Esta floresta está bloqueada de receber sinais, e um robô como você deve ter um dispositivo indicando uma localização, pretendia seguir a direita? Não recomendo, lá há uma antiga construção que antes era usada por uma afiliação maléfica e cruel da antiguidade - O cara parecia conhecer e muito do que estava falando - há muito tempo ninguém pisa os pés por lá...</p></div> <button onclick="carregarConteudo(caminhoB4)">Continuar.</button>`;

var caminhoB4 = '<div><p>&nbsp;O robô tenta ignorá-lo e começa a seguir adiante sem querer ouvir o que o velho dissera. De repente sente-se uma trava em seu sistema, e ouve-se o seguinte:</p> <p>&nbsp;-Os bons modos não lhe foram programados sua lataria imunda? Parece que esqueci de alguns códigos haha. Gostaria de dizer que sou um andarilho mercador, mas já trabalhei com robôs também, até que bem parecidos com você, e percebi que há muito tempo uma peça que tenho aqui não dá nem um pingo de sinal há muito tempo, e parece que ela reage com sua presença, o que é estranho, isso nunca deveria acontecer, a menos que... Bom, pegue-a, eu não posso usá-la e nem vendê-la a ninguém, não serve mais para nenhum aparato e sem utilidades para nenhum tipo de serviço.,</p> </div> <button onclick="carregarConteudo(caminhoB5)">Continuar.</button>';

var caminhoB5 = '<div><p>&nbsp;"Estranho o sistema simplesmente parar mas continuar de consciência intacta, que tipo de P.E.M este homem havia lançado? Enfim."</p> <p>&nbsp;Ao pegar o dispositivo, sim era isso mesmo, uma memória, ao inseri-la obtém as seguintes informações:</p></div> <button onclick="carregarConteudo(caminhoB6)">Continuar.</button>';

var caminhoB6 = '<div><p>&nbsp;Memória: O robô consegue se lembrar de alguém mandado ele fazer alguns movimentos, como se fosse um teste de tiro ao alvo com misseis, armas pesadas, e outros armamentos. Consegue se lembrar de uma voz peculiar, mas não muito bem, pois ainda está com algumas falhas e não consegue enxergar quem está falando nessa memória, mas consegue "sentir" aqueles momentos de testes e provas. Parecia que ele estava se preparando para um grande confronto.</p> </div> <button onclick="carregarConteudo(caminhoB7)">Continuar para a Fábrica Vermelha.</button><button onclick="carregarConteudo(cidadeDestino)">Ir ajudar a Karen.</button>' ;

var caminhoB7 = `<div><p>&nbsp;O robô segue ao seu caminho. Aquele andarilho começa a ir atrás dele, com uma feição de curioso e parecendo que estava tentando perceber algum detalhe no robô. O robô não se preocupa com ele, pois não parecer ser uma ameaça.</p> <p>&nbsp;Em algumas horas, com um caminhar lento, ${nome}  avista de longe uma construção, com torres altas, guaritas de ponta vermelha, e um grande portão vermelho. O robô continua a se aproximar finalmente de seu destino, o portão parece aumentar a cada passo. Chega-se ao pé do portão, ouve-se um grito:</p></div> <button onclick="carregarConteudo(caminhoB8)">Prosseguir</button>`;

var caminhoB8 = '<div><p> - Eeeeiiii!!! - Parece que aquele homem ainda estava seguindo por aquele caminho todo - Você não pode entrar aí!</p></div> <button onclick="carregarConteudo(caminhoB9)">Prosseguir</button>'

var caminhoB9 = '<div><p>&nbsp;Ouve-se disparos, ao olhar para cima, vê-se dois sentinelas vermelhas, um em cada guarita, eram disparos de avisos para que o homem se afastasse.</p> <p>&nbsp;"Mas porque que não deixariam ele passar, e eu sim?"</p><p>O grande portão começa a se abrir, um barulho estrondoso atinge todo o ambiente a volta, aparece uma figura misteriosa, escura, mas de formato aparentemente humano, e se ouve uma pergunta:</p></div> <button onclick="carregarConteudo(caminhoB10)">Prosseguir</button>';

var caminhoB10 = '<div><p> -Quem é você? Se identifique.</p></div> <button onclick="carregarConteudo(caminhoB11)">Mostrar memória.</button>';

var caminhoB11 = `<div><p>&nbsp;O ${nome}  abre uma lente que permite a transmissão de um holograma, mostrando a localização e imagem da Fábrica Vermelha, e informando que ele havia sido construído ali há 49 anos atrás.</p></div> <button onclick="carregarConteudo(caminhoB12)">Entrar na fabrica.</button>`;

var caminhoB12 = '<div><p> -Por favor, entre - sem nem mais perguntas, a entrada é permitida. </p> <p>&nbsp;O robô passa por um corredor extenso, várias luzes e paredes feitas de metal, ao final do corredor chega-se em um incrível salão. Neste salão foram-se reunindo várias pessoas afiliadas ao redor de uma mesa. Se começa um interrogatório para saber de tudo o que aquele robô sabia sobre a grande Guerra Rubra.</p></div> <button onclick="carregarConteudo(caminhoB13)">Fazer uma decisão importante.</button>';

var caminhoB13 = '<div align="center"><p>"Você é Rubro ou Indigo?"</p> </div> <div class="null" align="center"><button class="indigo" onclick="carregarConteudo(caminhoB14)">Indigo</button> <button class="rubro" onclick="carregarConteudo(caminhoB15)">Rubro</button></div>'

var caminhoB14 = '<div><p>&nbsp; A princípio, o careca fica irritado com a resposta do robô, e pede a guardas que estão presentes que agarrem o robô e o levem até ele a força para realizar a pintura. A princípio o robô resiste, porém, não consegue impedir que seja desmontado. Eles alteram o robô e o pitam de rubro. Além disso, injetam memórias falsas sobre a guerra fazendo com que ele troque de lado.</p></div> <button onclick="carregarConteudo(caminhoB16)">Continuar</button>';

var caminhoB15 = '<div><p>&nbsp;O robô é pintado de rubro (vermelho) enquanto o careca explica e injeta memórias sobre a grande Guerra Rubra que foi um conflito entre os índigos (a maioria dos robôs de Caine lutavam para defender seu país junto com HG, Lovelace e Caine) e os rubros (Outros robôs e um grande exército maligno, com esse careca, lutando contra o País dos índigos).</p></div> </p><button onclick="carregarConteudo(caminhoB16)">Continuar</button>';

var caminhoB16 = '<div><p>&nbsp;Ao terminar esse serviço, o robô, que agora possui o nome JORJÃO DA RUBRO 25 se junta com o JVE-1434, outro robô de guerra da rubro que estava vigiando há um tempo.</p></div> <button onclick="carregarConteudo(caminhoB17)">Prosseguir</button>';

var caminhoB17 = '<div><p>&nbsp;Ambos recebem missões como: caçar alguns antigos inimigos, especificamente o Caine e o HG.</p></div>  <button onclick="carregarConteudo(final2)">Finalizar</button>'

var final2 = '<div><p>Você chegou a um final trágico, recomece.</p></div> <button onclick="carregarConteudo(conteudoB)">Recomeçar</button>'

var cidadeDestino = `<div>&nbsp;${nome} decide ir ajudar Karen, percebeu que sua ambição e curiosidade por querer encontrar sua origem, não valia de nada para uma antiga e esquecida lata-velha.</p> </div> <button onclick="carregarConteudo(cidade2a)">Prosseguir para a cidade.</button>`

var cidade2a = '<div><p>&nbsp;Passam-se algumas horas, o robô chega a entrada da cidade, e por coincidência a menina havia também acabado de chegar, mas...</p></div> <button onclick="carregarConteudo(cidade2b)">...</button>'

var cidade2b = `<div><p> -O, oo, oi! ${nome}! Você decidiu voltar? Que bom!!! Pretende me ajudar agora é? Bom, fui meio que atacada por um grande robô estranho no caminho para cá, mas ta tudo bem, só um simples curativo já resolve, será que por acaso você teria algum tipo?</p></div>  <button onclick="carregarConteudo(kit)">Fazer um curativo improvisado. (Condição incompleta)</button><button onclick="carregarConteudo(defesa)">Não posso te curar... (Condição incompleta)</button>`

var defesa = '<div><p>"Parece que eu precisava daquele outro protocolo afinal..." </p></div> <button onclick="carregarConteudo(defesa1)">Continuar.</button>'

var kit = '<div><p>-Vou tentar fazer algo.</p> <p>Analisando.</p><p>Área danificada encontrada.</p><p>Tentando recuperar protocolo médico. </p><p>Encontrado.</p><p>Curando. </p><p>Pronto, a região não está mais prejudicada.</p></div> <button onclick="carregarConteudo(kit1)">Continuar.</button>'

var defesa1 = '<div><p>Karen - Ah, tá tudo bem, não tem problema não, acho que consigo ir assim mesmo, vamos!</p></div> <button onclick="carregarConteudo(cidade)">Entrar na cidade.</button> '

var kit1 = '<div><p>Karen - Obrigada, grandão! Bora que bora.</p></div> <button onclick="carregarConteudo(cidade)">Entrar na cidade.</button>'

var cidade = '<div><p>&nbsp;O robô, a menina e o gato, adentram na cidade, ouve-se diversos barulhos, pois se trata de uma região de comércio, com muitas pessoas comprando e vendendo coisas (peças mecânicas, fontes de energia, etc.). Enquanto estavam andando pelas vielas apertadas e movimentadas, cheias de aparatos mecânicos, mal sabiam eles que um par de olhos observava os seus movimentos de longe, e que aos poucos começou a acompanhar eles em sua jornada, a distância...</p> </div>  <button onclick="carregarConteudo(cidade1)">Continuar</button>'

var cidade1 = '<div><p>&nbsp;Ao longo do caminho, o trio chega a uma grande estação de transporte onde existem diversos carros que transportam muitas pessoas e levam a duas cidades diferentes.</p></div> <button onclick="carregarConteudo(cidade2)">Cidade com Kit Médico.</button><button onclick="carregarConteudo(cidade3)">Cidade com Dispositivo de Memória.</button> '

var cidade2 = '<div><p>Caminho temporariamente bloqueado nesta versão do jogo.</p> </div> <button onclick="carregarConteudo(cidade1)">Voltar</button>'

var cidade3 = `<div><p>${nome} decide ir pegar o dispositivo para si.</p></div>  <button onclick="carregarConteudo(cidade4)">Viajar</button>`

var cidade4 = '<div><p>&nbsp;O trio chega a uma cidade cheia de estabelecimentos, cuja população se encontra neste momento de forma mal encarada, é uma cidade em que a menina gosta de ir apesar do caráter das pessoas de lá. Há alguns cidadãos fora de suas casas e de suas lojas passeando por aquele local. Mesmo com um movimento aparentemente normal, há algo estranho ao redor, sem contar o fato de que a cidade aparenta ter passado por alguma destruição anterior e acabou se reerguendo depois de alguns anos.</p></div> <button onclick="carregarConteudo(cidade5)">Continuar</button>'

var cidade5 = '<div><p>&nbsp;Robô: Preciso saber mais sobre mim, vou atrás de umas peças, estou analisando o perímetro e vi que há alguns rastros de memórias minhas por aqui. Vou procurar.</p></div> <button onclick="carregarConteudo(cidade6)">Ir procurar.</button>'

var cidade6 = '<div><p>&nbsp;Karen: Hey, calma ai grandão, você realmente está com poucos parafusos na cabeça… - Enquanto ela falava isso, viu pessoas observando por muito tempo o gigante de ferro, e tentou o avisar, mas ele não estava dando bola para ela. Essas pessoas são conhecidas como: “Ladrões de sucata”, eles costumam despedaçar qualquer coisa que envolva tecnologia só para vender suas peças ou criar armas.</p></div> <button onclick="carregarConteudo(cidade7)">Continuar</button> </p>'

var cidade7 = `<div><p>&nbsp;${nome} detecta movimentos estranhos se aproximando e percebe armas em suas mãos.</p> <p>&nbsp;Uma batalha começa: Let the battle begin! São por volta de uns 10 ladrões cercando o robô com armas diferenciadas que parecem ser bem perigosas e poderosas.</p></div> <button onclick="carregarConteudo(cidade8)">Lutar.</button>`

var cidade8 = '<div><p>Continua...</p> </div> <button onclick="carregarConteudo(conteudoB)">Recomeçar</button>'





var elemento = document.getElementById("conteudo");

function carregarConteudo(conteudo){
    elemento.innerHTML = conteudo;
}

carregarConteudo(conteudoA)