# PetMania — Centro Médico Veterinário

Landing institucional da PetMania (Aracaju-SE). Vue 3 + Vite + Tailwind CSS 4 + Flowbite.

## Scripts

```bash
npm install
npm run dev
npm run build
```

## Deploy (Railway)

Docker + Caddy servindo o `dist` estático. Deploy automático via GitHub Actions em push para `main` (ver `.github/workflows/deploy-railway.yml`).

### Setup no Railway

1. Criar um projeto/serviço no Railway apontando para este repositório (ou deploy via CLI/`railway up`).
2. Build: Dockerfile na raiz (Railway detecta automaticamente).
3. Gerar domínio público no serviço (ou configurar DNS customizado).

### Secrets / variáveis no GitHub

| Tipo | Nome | Descrição |
|---|---|---|
| Secret | `RAILWAY_TOKEN` | Token do Railway (Account/Project token) |
| Variable | `RAILWAY_SERVICE_NAME` | Nome do serviço no Railway (opcional) |
| Variable | `RAILWAY_ENVIRONMENT_NAME` | Ambiente (ex.: `production`, opcional) |

### Checklist pós-deploy

- [ ] `/health` responde 200
- [ ] Home carrega título, imagens e CTAs de WhatsApp
- [ ] Domínio customizado (se houver) aponta para o serviço Railway

## Conteúdo

Textos, especialidades, WhatsApp e endereço ficam em `src/data/site.js`.
Imagens de galeria em `src/data/media.js`. Logo em `public/images/logo.png`.
