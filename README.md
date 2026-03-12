# 🛡️ Guia de Bolso — Segurança & Proteção Pessoal

Aplicativo mobile-first para jornalistas, ativistas e profissionais que atuam em campo. Reúne guia de segurança, check-list de missão, análise de riscos locais por IA e contatos de emergência em uma interface compacta e offline-friendly.

![Preview](https://img.shields.io/badge/React-18-61DAFB?logo=react) ![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite) ![Claude AI](https://img.shields.io/badge/Powered%20by-Claude%20AI-f59e0b)

---

## ✨ Funcionalidades

| Tela | Descrição |
|---|---|
| **Guia de Segurança** | Conteúdo editorial em 3 fases: Antes de Sair, Em Campo e Após o Campo |
| **Análise de Riscos** | Detecção de GPS + análise via Claude AI dos riscos específicos da sua localização |
| **Check-list de Missão** | Lista interativa e customizável de preparação para campo |
| **Contatos de Emergência** | Serviços de emergência atualizados automaticamente pelo GPS + contatos pessoais |
| **Configurações** | Perfil de usuário e preferências do app |

---

## 🚀 Como rodar localmente

### Pré-requisitos
- Node.js 18+
- Uma chave de API da Anthropic ([console.anthropic.com](https://console.anthropic.com/))

### Passos

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/guia-seguranca.git
cd guia-seguranca

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
cp .env.example .env
# Edite o .env e insira sua chave da Anthropic

# 4. Rode o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:3000` no navegador (idealmente no modo mobile do DevTools).

### Build para produção

```bash
npm run build
npm run preview
```

---

## 🔑 Variáveis de Ambiente

| Variável | Obrigatória | Descrição |
|---|---|---|
| `VITE_ANTHROPIC_API_KEY` | Sim | Chave da API Anthropic para análise de riscos |

> ⚠️ **Atenção:** A chave de API é acessada no frontend. Para produção, considere criar um backend proxy para não expor a chave publicamente.

---

## 🗂️ Estrutura do Projeto

```
guia-seguranca/
├── index.html          # Entry point HTML
├── vite.config.js      # Configuração do Vite
├── package.json
├── .env.example        # Modelo de variáveis de ambiente
└── src/
    ├── main.jsx        # Bootstrap do React
    └── App.jsx         # Componente principal (toda a aplicação)
```

---

## 🛠️ Tecnologias

- **React 18** — UI reativa com hooks
- **Vite 5** — bundler e dev server
- **Claude AI (Anthropic)** — análise de riscos baseada em localização
- **Nominatim (OpenStreetMap)** — geocodificação reversa gratuita
- **IBM Plex Sans / Mono + Bebas Neue** — tipografia via Google Fonts

---

## ⚠️ Aviso

Este aplicativo é uma ferramenta de apoio educativo. **Não substitui treinamentos profissionais de segurança** nem deve ser a única fonte de informação em situações de risco. Sempre consulte sua organização e profissionais especializados antes de missões em campo.

---

## 📄 Licença

MIT
