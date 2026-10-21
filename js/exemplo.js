// Exame de exemplo (fictício), já analisado.
// Ele fica salvo aqui no projeto para funcionar SEM internet e SEM a IA,
// por exemplo se o Wi-Fi da feira cair.
//
// O formato é o mesmo que a função da IA (api/analisar.js) devolve,
// então o site mostra os dois do mesmo jeito.
//
// "situacao" pode ser: "normal", "pouco-acima", "acima", "pouco-abaixo" ou "abaixo".

const EXAME_EXEMPLO = {
  resumo: [
    'A maior parte dos valores está dentro da faixa de referência. Dois itens estão um pouco fora: os leucócitos, um pouco acima, e as plaquetas, um pouco abaixo.',
    'Isso não quer dizer que algo esteja errado. Vale levar o exame a um médico para ele avaliar junto com a sua saúde.'
  ],
  itens: [
    {
      nome: 'Hemácias',
      valor: '4,8 milhões/mm³',
      referencia: '4,3 a 5,7',
      situacao: 'normal',
      explicacao: 'São as células vermelhas do sangue. Elas levam o oxigênio dos pulmões para o corpo todo.'
    },
    {
      nome: 'Hemoglobina',
      valor: '13,8 g/dL',
      referencia: '13,0 a 17,0',
      situacao: 'normal',
      explicacao: 'É a parte das hemácias que carrega o oxigênio. Também é o que dá a cor vermelha ao sangue.'
    },
    {
      nome: 'Hematócrito',
      valor: '41%',
      referencia: '39 a 50',
      situacao: 'normal',
      explicacao: 'Mostra quanto do volume do sangue é formado pelas hemácias.'
    },
    {
      nome: 'VCM',
      valor: '86 fL',
      referencia: '80 a 100',
      situacao: 'normal',
      explicacao: 'É o tamanho médio das hemácias. Ajuda o médico a entender outros valores do exame.'
    },
    {
      nome: 'Leucócitos',
      valor: '11.900 /mm³',
      referencia: '4.000 a 11.000',
      situacao: 'pouco-acima',
      explicacao: 'São as células de defesa do corpo. Um valor um pouco acima pode aparecer, por exemplo, durante uma gripe ou infecção leve, mas também por outros motivos. Vale mostrar ao médico.'
    },
    {
      nome: 'Plaquetas',
      valor: '138.000 /mm³',
      referencia: '150.000 a 450.000',
      situacao: 'pouco-abaixo',
      explicacao: 'Ajudam o sangue a parar de sair quando você se machuca. Um valor um pouco abaixo pode ter várias causas, e muitas não são graves. Vale mostrar ao médico.'
    }
  ]
};
