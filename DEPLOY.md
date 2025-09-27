# 🚀 Guia de Deploy - ALFATEC

## 📋 Pré-requisitos

- Node.js 18+ instalado
- Conta no GitHub
- Conta no Vercel (gratuita)
- Git instalado na máquina

## 🔧 Preparação Local

### 1. Teste o projeto localmente

```bash
# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run dev

# Testar build de produção
npm run build
npm start
```

### 2. Verificar se tudo está funcionando

- ✅ Site carrega corretamente em http://localhost:3000
- ✅ Todas as seções aparecem
- ✅ Logo está visível
- ✅ Formulário de contato renderiza
- ✅ Não há erros no console

## 📤 Subir para o GitHub

### 1. Inicializar Git (se ainda não foi feito)

```bash
# Na pasta do projeto
git init
```

### 2. Adicionar arquivos ao Git

```bash
# Adicionar todos os arquivos
git add .

# Fazer primeiro commit
git commit -m "Initial commit - ALFATEC website"
```

### 3. Criar repositório no GitHub

1. Acesse [github.com/new](https://github.com/new)
2. Nome do repositório: `alfatec`
3. Descrição: "Site da ALFATEC Engenharia e Automação"
4. Deixe como **Público**
5. **NÃO** inicialize com README (já temos)
6. Clique em **Create repository**

### 4. Conectar ao GitHub

```bash
# Substitua [seu-usuario] pelo seu username do GitHub
git remote add origin https://github.com/[seu-usuario]/alfatec.git

# Enviar código para o GitHub
git branch -M main
git push -u origin main
```

## 🌐 Deploy no Vercel

### Método 1: Via Interface Web (Recomendado)

1. Acesse [vercel.com](https://vercel.com)
2. Faça login com sua conta GitHub
3. Clique em **"New Project"**
4. Importe o repositório `alfatec`
5. Configure:
   - **Framework Preset:** Next.js (deve detectar automaticamente)
   - **Root Directory:** ./
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`
6. Clique em **Deploy**
7. Aguarde o deploy (geralmente 1-3 minutos)
8. Seu site estará disponível em: `https://alfatec.vercel.app`

### Método 2: Via CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Fazer deploy
vercel

# Seguir as instruções:
# - Fazer login se necessário
# - Escolher escopo
# - Linkar ao projeto existente ou criar novo
# - Confirmar configurações
```

## 🔄 Atualizações Futuras

### Deploy Automático

Após configurar o Vercel, toda vez que você fizer push para o GitHub:

```bash
# Fazer alterações no código
git add .
git commit -m "Descrição das mudanças"
git push origin main

# O Vercel detecta automaticamente e faz novo deploy!
```

### Preview de Pull Requests

- Crie branches para novas features
- Ao abrir PR, Vercel cria preview automático
- Teste antes de fazer merge

## 🎯 Domínio Personalizado

### Configurar domínio próprio (opcional)

1. No dashboard do Vercel, acesse seu projeto
2. Vá em **Settings** → **Domains**
3. Adicione seu domínio: `alfatec.com.br`
4. Configure DNS no seu provedor:
   ```
   Tipo: CNAME
   Nome: www
   Valor: cname.vercel-dns.com
   
   Tipo: A
   Nome: @
   Valor: 76.76.21.21
   ```
5. Aguarde propagação DNS (até 48h)

## ✅ Checklist Final

- [ ] Código testado localmente
- [ ] Build de produção funcionando
- [ ] Repositório criado no GitHub
- [ ] Código enviado para GitHub
- [ ] Projeto importado no Vercel
- [ ] Deploy concluído com sucesso
- [ ] Site acessível no link do Vercel
- [ ] Domínio customizado configurado (opcional)

## 🆘 Troubleshooting

### Erro de build no Vercel

```bash
# Limpar cache local
npm run clean
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Erro 404 após deploy

- Verifique se o arquivo `next.config.ts` existe
- Confirme que `package.json` tem os scripts corretos
- Verifique logs de build no Vercel

### Imagens não aparecem

- Certifique-se que `/public/logo.png` existe
- Use caminhos absolutos: `/logo.png` não `logo.png`
- Verifique case-sensitive em produção

## 📞 Suporte

Se precisar de ajuda:
1. Verifique os logs no dashboard do Vercel
2. Consulte a [documentação do Next.js](https://nextjs.org/docs)
3. Verifique a [documentação do Vercel](https://vercel.com/docs)

---

**Sucesso! 🎉** Seu site ALFATEC está pronto para o mundo!