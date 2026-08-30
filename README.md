# Heróis Overwatch

Site simples que consome a [OverFast API](https://overfast-api.tekrop.fr) (API pública não-oficial do Overwatch) para listar os heróis do jogo com imagem, nome e função.

## Tecnologias

- HTML5
- CSS3
- JavaScript (ES Modules, `fetch`)

## Estrutura do projeto

```
projeto/
├── index.html   # estrutura da página
├── style.css    # estilos
├── api.js       # comunicação com a OverFast API
├── main.js      # lógica de uso: busca dados e monta a tela
└── img/
    ├── overwatch.jpg          # imagem de fundo do header
    ├── overwatch-logo.png     # favicon
    └── apple-touch-icon.png
```

## Como rodar

Como o projeto usa `import`/`export` (ES Modules), **não funciona abrindo o `index.html` direto no navegador** (`file://`). É preciso rodar por um servidor local:

**Opção 1 — VS Code**
Instale a extensão **Live Server** e clique em "Go Live".

**Opção 2 — Node.js**
LINK DESPONIBILISADO NO REPOSITORIO 
## Funcionalidades

- Busca a lista de heróis na OverFast API e exibe em cards (imagem, nome e função).
- Header com imagem de fundo escurecida (overlay) e botão que rola suavemente até a lista.
- A lista de heróis aparece com uma animação de fade + deslocamento, disparada ao rolar a página ou clicar no botão "Começar".
