# 🤖 AI Business Bot PRO - Institutional Intelligence

[![Vercel Deployment](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://ai-business-bot-delta.vercel.app)
[![Next.js 14](https://img.shields.io/badge/Framework-Next.js%2014-blue?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Design System](https://img.shields.io/badge/UI-Nexus%20Intelligence-indigo?style=for-the-badge)](https://github.com/Emshtml/ai-business-bot/blob/main/src/styles/design-system.css)

O **AI Business Bot PRO** é uma plataforma SaaS de alta performance projetada para automatizar o ciclo completo de vendas e inteligência de negócios. Utilizando LLMs de última geração, o sistema transforma leads brutos em oportunidades qualificadas através de análise preditiva, estratégias personalizadas e automação de engajamento.

## 🚀 Funcionalidades PRO

### 📊 Dashboard Executivo
Visão panorâmica de métricas críticas: leads totais, taxas de conversão e economia de tempo gerada pela IA. Interface baseada em Bento Grid para máxima densidade de informação.

### 🧠 AI Strategy Lab
Módulo avançado para geração de playbooks de vendas, análise de tendências de mercado e otimização de funis de marketing baseada em dados em tempo real.

### 🤝 Gestão Inteligente de Leads
Sistema de **AI Lead Scoring** que prioriza prospects com maior probabilidade de fechamento, integrado a uma interface de gestão com alta performance.

### 💬 Chat IA Avançado
Interface conversacional de baixa latência com suporte a streaming, memória de contexto longo e integração direta com CRMs.

### 💳 Monetização & Billing
Fluxo completo de assinaturas integrado ao Stripe, com múltiplos tiers (Starter, Enterprise, Custom) e gestão automatizada de faturas.

## 🛠️ Stack Tecnológica

- **Frontend:** Next.js 14 (App Router), Tailwind CSS, Framer Motion.
- **Design System:** Nexus Intelligence (Geist Font, Glassmorphism).
- **Backend:** Node.js, Vercel AI SDK, Prisma ORM.
- **IA:** OpenAI GPT-4o / Claude 3.5 Sonnet.
- **Pagamentos:** Stripe Billing & Checkout.
- **Deploy:** Vercel (CI/CD).

## 📂 Estrutura do Repositório

```bash
/app              # Rotas do Next.js (Dashboard, Leads, Billing, Admin)
/components       # Componentes UI compartilhados (Nexus Design System)
/src/styles       # Tokens de Design e Configurações Tailwind
/lib              # Configurações de API (OpenAI, Stripe, Prisma)
/public           # Assets estáticos e imagens da marca
```

## ⚙️ Instalação e Configuração

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Emshtml/ai-business-bot.git
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente (.env):**
   ```env
   DATABASE_URL="sua_url_postgres"
   NEXTAUTH_SECRET="seu_secret"
   OPENAI_API_KEY="sua_chave_ai"
   STRIPE_SECRET_KEY="sua_chave_stripe"
   ```

4. **Inicie o ambiente de desenvolvimento:**
   ```bash
   npm run dev
   ```

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---
Desenvolvido com foco em escalabilidade e conversão por **Emshtml **.
