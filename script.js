/* ============================================================
   EDITE AQUI: textos, links e produtos da loja.
   Você só precisa mexer neste arquivo para trocar preços e textos.
   ============================================================ */
const SITE = {
  nome: 'SANTA ESPERANÇA SP',          // aparece no topo e no título
  slogan: 'Loja oficial',              // frase pequena acima do nome
  discord: 'https://discord.gg/SEU-CONVITE', // link de convite do Discord
  loja: '',                            // link da sua loja (Tebex). Vazio = botão leva ao Discord
  rodape: '© Santa Esperança SP. Todos os direitos reservados.',
};

// descricao: texto de apresentação. itens: benefícios. duracao: validade. condicoes: regras e observações.
// destaque: true = card com brilho. emBreve: true = botão desativado.
const VIPS = [
  { nome: 'VIP Inauguração', tag: 'Plano de entrada',
    descricao: 'Destinado ao jogador que deseja iniciar na cidade com as vantagens essenciais.',
    preco: '34,90', duracao: '30 dias',
    itens: [
      'Salário de R$ 5.000 a cada 45 minutos',
      '1 veículo Sultan',
      '1 skin de arma',
      '1 placa personalizada',
      'Fila prioritária',
    ],
    condicoes: [
      'O salário e a fila prioritária permanecem ativos durante a vigência do VIP.',
      'O veículo, a skin e a placa permanecem com o jogador após o término do VIP.',
    ] },
  { nome: 'VIP Ostentação', tag: 'Plano completo', destaque: true, selo: 'Mais completo',
    descricao: 'Reúne os benefícios mais exclusivos da cidade em um único plano.',
    preco: '129,90', duracao: '30 dias',
    itens: [
      'Salário de R$ 15.000 a cada 1h10min',
      '1 veículo à escolha: Ferrari ou Kawasaki Ninja H2',
      '1 helicóptero exclusivo',
      '3 placas personalizadas',
      '5 skins de arma',
      'Fila prioritária',
    ],
    condicoes: [
      'O salário e a fila prioritária permanecem ativos durante a vigência do VIP.',
      'Os veículos, o helicóptero, as skins e as placas permanecem com o jogador após o término do VIP.',
    ] },
  { nome: 'VIP Fac', tag: 'Para responsáveis por facção',
    descricao: 'Destinado ao jogador que assume uma facção na cidade.',
    preco: '89,90', duracao: 'Compra única',
    itens: [
      'Garagem de facção',
      '1 veículo padrão à escolha',
      'R$ 70.000 no painel da facção',
      '5 pistolas',
      '100 munições para cada pistola (500 munições ao todo)',
    ],
    condicoes: [
      'Exige que o comprador assuma uma facção.',
      'O veículo não pode ser esportivo, roubado ou blindado e passa por análise da equipe.',
      'A entrega é realizada pela equipe no momento em que a facção é apresentada aos jogadores que a receberão.',
    ] },
  { nome: 'VIP Org', tag: 'Para organizações legais',
    descricao: 'Destinado ao jogador que assume uma organização legal na cidade.',
    preco: '49,90', duracao: 'Compra única',
    itens: [
      'R$ 70.000 no painel da organização',
    ],
    condicoes: [
      'Exige que o comprador assuma uma organização legal.',
      'A entrega é realizada pela equipe no momento em que a organização é apresentada aos jogadores que a receberão.',
    ] },
];

const AVULSOS = [
  { nome: 'Carros avulsos', tag: 'Catálogo em breve', de: '9,90', itens: ['Comuns, esportivos e exclusivos', 'Escolha só o carro que quiser'], emBreve: true },
  { nome: 'Skins de arma', tag: 'Catálogo em breve', de: '4,90', itens: ['Skins comuns e exclusivas', 'Pacote de 5 skins com desconto'], emBreve: true },
  { nome: 'Placa personalizada', tag: 'Deixe o seu carro com a sua cara', preco: '5,90', itens: ['Escolha o texto da placa'] },
];

const EXTRAS = [
  { nome: 'App de Música', tag: 'No seu celular do jogo', preco: '9,90', itens: ['Ouça música no celular', 'Compra única'] },
  { nome: 'Passe de Batalha Premium', tag: 'Recompensas por temporada', preco: '24,90', itens: ['Acesso ao passe premium', 'Recompensas fixas, sem sorteio'] },
];

/* ============================================================
   Daqui para baixo não precisa mexer.
   ============================================================ */
const $ = (id) => document.getElementById(id);
document.title = `${SITE.nome} | Loja`;
$('brand').textContent = SITE.nome;
$('titulo').textContent = SITE.nome;
$('slogan').textContent = SITE.slogan;
$('rodape').textContent = SITE.rodape;
$('btn-discord').href = SITE.discord;
$('btn-discord2').href = SITE.discord;

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function card(p) {
  const href = p.link || SITE.loja || SITE.discord;
  let price = '';
  if (p.preco) price = `<div class="price"><small>R$</small>${esc(p.preco)}</div>`;
  else if (p.de) price = `<div class="price"><small>a partir de R$</small>${esc(p.de)}</div>`;
  else price = `<div class="price"><small>Em breve</small></div>`;
  const btn = p.emBreve
    ? '<span class="btn off">Em breve</span>'
    : `<a class="btn primary" href="${esc(href)}" target="_blank" rel="noopener">Comprar</a>`;
  const lista = (t, arr) => (arr && arr.length)
    ? `<h4>${t}</h4><ul>${arr.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>` : '';
  return `<article class="card${p.destaque ? ' hl' : ''}">
    ${p.selo ? `<span class="badge">${esc(p.selo)}</span>` : ''}
    <h3>${esc(p.nome)}</h3>
    <p class="tag">${esc(p.tag || '')}</p>
    ${p.descricao ? `<p class="desc">${esc(p.descricao)}</p>` : ''}
    ${price}
    ${lista('Benefícios', p.itens)}
    ${p.duracao ? `<p class="meta"><b>Duração</b><span>${esc(p.duracao)}</span></p>` : ''}
    ${lista('Condições', p.condicoes)}
    ${btn}
  </article>`;
}

$('vips').innerHTML = VIPS.map(card).join('');
$('avulsos').innerHTML = AVULSOS.map(card).join('');
$('extras').innerHTML = EXTRAS.map(card).join('');
