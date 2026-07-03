# Portfolio — Juliane Oliveira

Portfólio pessoal hospedado via GitHub Pages.

## Como publicar no GitHub Pages

### 1. Crie um repositório no GitHub
- Acesse github.com e faça login
- Crie um novo repositório com o nome: `juliane-portfolio` (ou qualquer nome)
- Pode ser público ou privado (GitHub Pages requer conta Pro para privado)

### 2. Suba os arquivos
```bash
cd portfolio/
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/juliane-portfolio.git
git push -u origin main
```

### 3. Ative o GitHub Pages
- No repositório, vá em **Settings → Pages**
- Em "Source", selecione **Deploy from a branch**
- Branch: `main` / Folder: `/ (root)`
- Clique em **Save**

### 4. Acesse o site
Após alguns minutos, o site estará disponível em:
`https://SEU_USUARIO.github.io/juliane-portfolio/`

### Domínio personalizado (opcional)
Para usar um domínio próprio (ex: `julianeoliveira.com`):
1. Compre o domínio (Registro.br, GoDaddy, etc.)
2. Em Settings → Pages → Custom domain, insira o domínio
3. Configure o DNS do domínio apontando para o GitHub Pages
