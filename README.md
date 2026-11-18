# Entre Páginas — Chá da Ludy

Convite digital interativo para o chá de 15 anos de Ludy, em um encontro íntimo com amigos. A experiência é um site estático, mobile-first e preparado para ser compartilhado por link no WhatsApp.

## Estrutura

```text
convite-ludy/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   └── audio/
└── README.md
```

## Recursos implementados

- Capa editorial com livro de capa dura em CSS 3D.
- Abertura física do livro com `perspective`, `transform-style`, rotação da capa e surgimento das páginas.
- Página narrativa e página com os dados da comemoração.
- Navegação anterior/próxima, indicadores de página e reinício.
- Faixa instrumental original `assets/audio/cha-da-lud.mp3`, com violão de nylon, piano suave e percussão brasileira leve; o som só começa após uma interação do visitante e pode ser pausado/retomado pelo controle discreto.
- Botão **COMO CHEGAR** com a URL de busca do Google Maps definida no briefing.
- Botão **CONFIRMAR PRESENÇA** preparado para WhatsApp, sem inventar telefone.
- Layout responsivo para telas pequenas e grandes, com foco visível, áreas de toque confortáveis e suporte a `prefers-reduced-motion`.

## Configurar o WhatsApp

Abra `js/script.js` e preencha a constante `WHATSAPP_PHONE` com o telefone completo, usando DDI + DDD + número e somente dígitos:

```js
const WHATSAPP_PHONE = "5511999999999";
```

Enquanto estiver vazia, o botão exibirá uma mensagem amigável e não abrirá um número inexistente.

## Substituir ou adicionar uma faixa de áudio

A versão entregue utiliza uma composição instrumental original em MP3, criada para o Chá da Ludy, sem voz e sem música comercial protegida. O arquivo fica em `assets/audio/cha-da-lud.mp3`; para trocar a faixa, substitua esse arquivo mantendo o mesmo nome. O início continua condicionado a um clique/toque do visitante.

## Rodar localmente

O projeto não depende de framework ou instalação de pacotes. Com Node.js instalado, execute:

```bash
node server.mjs
```

Depois acesse `http://localhost:3000`.

## Publicar no GitHub Pages

1. Crie um repositório público no GitHub, por exemplo `convite-ludy`.
2. Envie todos os arquivos mantendo a estrutura de pastas:

   ```bash
   git init
   git add .
   git commit -m "Cria convite interativo de 15 anos da Ludy"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/convite-ludy.git
   git push -u origin main
   ```

3. No repositório, abra **Settings → Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**, escolha `main` e a pasta `/ (root)`; clique em **Save**.
5. Aguarde a publicação. O GitHub exibirá o endereço em **Settings → Pages**, normalmente no formato `https://SEU-USUARIO.github.io/convite-ludy/`.
6. Abra o link em uma janela anônima e teste no Android e no iPhone.
7. Compartilhe o link público no WhatsApp. Para uma prévia mais bonita, mantenha título e descrição no `<head>` de `index.html`.

## Checklist rápido antes do envio

- [ ] Preencher o telefone em `js/script.js`.
- [ ] Abrir o livro tocando na capa e no botão.
- [ ] Avançar e voltar entre as páginas.
- [ ] Pausar e retomar a música após uma interação.
- [ ] Conferir o resultado do endereço no Google Maps.
- [ ] Testar a confirmação no WhatsApp depois de configurar o telefone.
- [ ] Testar Chrome Android e Safari iPhone em retrato e paisagem.
- [ ] Conferir o link publicado sem rolagem horizontal.
