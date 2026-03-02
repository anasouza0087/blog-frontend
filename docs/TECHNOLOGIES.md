**Visão Geral**
- **Propósito:** Frontend de um blog escrito em React + TypeScript, organizado por features e separado em camadas (UI, aplicação, domínio, serviços).
- **Código principal:** [src](src)

**Tecnologias Principais**
- **Linguagem:** `TypeScript`
- **Framework UI:** `React` (componentes funcionais em `.tsx`)
- **Bundler / Dev Server:** `Vite` (config: [vite.config.ts](vite.config.ts))
- **Estilização:** `Tailwind CSS` (import em [src/index.css](src/index.css) e plugin `@tailwindcss/vite`)
- **HTTP / API:** `axios`
- **Roteamento:** `react-router-dom`
- **Ícones:** `react-icons`
- **Notificações:** `react-toastify`

**Ferramentas de Desenvolvimento**
- **TypeScript:** `typescript` (configs em [tsconfig.json](tsconfig.json) e [tsconfig.app.json](tsconfig.app.json))
- **Linting:** `ESLint` com configuração em [eslint.config.js](eslint.config.js) e plugins para React Hooks / Vite
- **PostCSS / Autoprefixer:** `postcss`, `autoprefixer`
- **Plugin React para Vite:** `@vitejs/plugin-react`

**Arquitetura / Organização do Código**
- Estrutura orientada a features e camadas:
  - `src/pages`: páginas da aplicação (ex.: `blog`)
  - `src/pages/blog/components`: componentes específicos da página (cards, footer, pagination, postDetails, postFormModal)
  - `src/features/blog`: espaço para lógica da feature (application, components, domain, hooks, services)
  - `src/services/blog`: integração com backend — contém `application` (casos de uso), `domain` (interfaces) e `services` (implementações)
  - `src/ui`: componentes transversais (modal, toast)
  - `src/context` e `src/hooks`: gerenciamento de estado via Context API e hooks customizados
- Separação clara entre camada de apresentação, aplicação (use-cases), domínio e infraestrutura (HTTP/services).

**Padrões e Convenções**
- Componentes tipados com interfaces `TypeScript`.
- Uso de hooks e Context API para estado e lógica compartilhada (`useBlog`, `BlogContext`).
- Casos de uso (UseCases) organizados em `services/blog/application`.
- Estilos via utilitários Tailwind (ex.: `truncate`, `line-clamp-3`, classes `bg-neutral-*`).

**Principais Dependências**
- Runtime: `react`, `react-dom`, `react-router-dom`, `axios`, `react-icons`, `react-toastify`, `tailwindcss`, `@tailwindcss/vite`
- Dev: `vite`, `@vitejs/plugin-react`, `typescript`, `eslint` e plugins relacionados, `postcss`, `autoprefixer`
- Veja lista completa em [package.json](package.json).

**Scripts úteis**
- `npm run dev` — inicia o servidor de desenvolvimento (Vite)
- `npm run build` — compila (`tsc -b`) e gera build do Vite
- `npm run preview` — pré-visualiza o build
- `npm run lint` — executa ESLint


