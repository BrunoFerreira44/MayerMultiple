const agoraConfig = {
    content: '<p style="font-size: 10px;";>Situação atual do Múltiplo de Mayer<p/>',
    allowHTML: true,
};

const indicadoresConfig = {
    content: '<p style="font-size: 10px;">Dados utilizados para obter o Mútiplo de Mayer<p/>',
    allowHTML: true,
};

const cotacoesConfig = {
    content: '<p style="font-size: 10px;">Cotações da criptomoeda em períodos diferentes<p/>',
    allowHTML: true,
};

const comoFuncionaConfig = {
    content: '<p style="font-size: 10px;">Explicação de como é calculado o Múltiplo e seus fundamentos<p/>',
    allowHTML: true,
};

const classificacaoConfig = {
    content: '<p style="font-size: 10px;">Maneira correta pela qual deve ser interpretado o Múltiplo de Mayer<p/>',
    allowHTML: true,
};

tippy('.fa-circle-info[name="SEÇÃO DE AGORA"]', agoraConfig);
tippy('.fa-circle-info[name="SEÇÃO DE INDICADORES"]', indicadoresConfig);
tippy('.fa-circle-info[name="SEÇÃO DE COTAÇÕES"]', cotacoesConfig);
tippy('.fa-circle-info[name="SEÇÃO DE COMO FUNCIONA"]', comoFuncionaConfig);
tippy('.fa-circle-info[name="SEÇÃO DE CLASSIFICAÇÃO"]', classificacaoConfig);
