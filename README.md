# Blog Frontend

Este repositório contém o frontend de um blog construído com React e TypeScript usando Vite como bundler.

## Tecnologias

- **React** para a camada de interface.
- **TypeScript** com tipagem forte em componentes, hooks e serviços.
- **Vite** como servidor de desenvolvimento e build.
- **Tailwind CSS** para estilização utilitária.
- **axios** para chamadas HTTP ao backend.
- **react-router-dom** para roteamento de páginas.
- **react-icons** e **react-toastify** para ícones e notificações.

## Estrutura de Pastas

```
src/
├─ pages/            # páginas da aplicação (ex: blog)
├─ features/blog/    # lógica da feature (use-cases, domínio, serviços)
├─ services/blog/    # integração com API (casos de uso, interfaces, implementação)
├─ ui/               # componentes reutilizáveis (Modal, Toast, etc.)
├─ context/          # Context API para estado global
├─ hooks/            # hooks personalizados
└─ assets/           # imagens e recursos estáticos
```

A arquitetura separa apresentação, aplicação (use-cases), domínio e infraestrutura.

## Scripts úteis

```bash
npm install     # instala dependências
npm run dev     # inicia Vite em modo dev
npm run build   # compila TypeScript e gera build estático
npm run preview # serve o build para checagem
npm run lint    # executa ESLint
```

## Configuração

- Tailwind é habilitado via plugin `@tailwindcss/vite` e importado em `src/index.css`.
- ESLint configurado em `eslint.config.js` com regras para TypeScript e React Hooks.
- TypeScript possui configs separadas (`tsconfig.app.json` e `tsconfig.node.json`) referenciadas em `tsconfig.json`.

---

Essa documentação é um ponto de partida rápido para novos desenvolvedores explorarem o projeto.
