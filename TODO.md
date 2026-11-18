# TODO — Entre Páginas · Chá da Ludy

## 1. Experiência de capa e abertura do livro — concluído

- A tela inicial apresenta uma composição elegante e mobile-first com a frase “Há histórias que merecem ser celebradas...”, o título “O CAPÍTULO XV”, o texto complementar, o botão “ABRIR CONVITE” e um livro clicável.
- O livro tem capa roxo-ameixa, moldura fina em dourado envelhecido, nome Ludy, inscrição “MEUS 15 ANOS”, lombada visível e páginas em tom creme.
- Ao clicar na capa ou no botão, o livro abre com CSS 3D, `perspective`, transformações e JavaScript; a capa gira suavemente, as páginas aparecem progressivamente e a transição responde a toques em celulares, sem usar vídeo pronto.

## 2. Narrativa e informações da celebração — concluído

- A página literária revela “Era uma vez, Ludy...” e a mensagem completa do convite com boa distribuição, molduras finas, textura sutil e entrada discreta.
- A página de detalhes destaca “LUDY”, “MEUS 15 ANOS”, 22 de novembro de 2026, 11 horas da manhã, Rua Henry Palmer, 7B, Parelheiros, São Paulo — SP, CEP 04884-150, “Será ainda mais especial com você.” e “Com carinho, Ludy.”
- A navegação permite avançar, voltar, consultar os detalhes e reiniciar a experiência, sem excesso de botões.

## 3. Música ambiente e ações práticas — concluído

- A música só começa depois de uma interação do visitante; existe controle discreto para tocar, pausar e continuar, com volume suave e compatibilidade com Android/iPhone.
- A implementação entregue usa a faixa instrumental original `assets/audio/cha-da-lud.mp3`, com violão, piano e percussão brasileira leve, sem voz e sem música comercial protegida.
- O botão “COMO CHEGAR” abre a busca do Google Maps usando exatamente a URL fornecida, sem inventar coordenadas.
- O botão “CONFIRMAR PRESENÇA” usa uma variável configurável de telefone, não inventa número e exibe uma mensagem amigável enquanto o telefone não for informado.

## 4. Qualidade técnica, documentação e publicação — concluído

- O projeto usa HTML5, CSS3 e JavaScript moderno, não usa Python, banco de dados ou login e está organizado em `index.html`, `css/style.css`, `js/script.js`, `assets/images`, `assets/audio` e `README.md`.
- O convite é responsivo, sem rolagem horizontal, com textos legíveis, botões fáceis de tocar, carregamento leve, foco visível, semântica acessível e suporte a redução de movimento.
- O README documenta configuração de WhatsApp, áudio, execução local, criação do repositório, envio dos arquivos, ativação do GitHub Pages, obtenção do link e compartilhamento pelo WhatsApp.
- Manter como verificação final: testar botões, abertura do livro, navegação, música, Google Maps, confirmação, responsividade, JavaScript, fontes e links antes de qualquer publicação pública.
