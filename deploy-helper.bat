@echo off
echo ========================================
echo    ALFATEC - Assistente de Deploy
echo ========================================
echo.
echo Escolha uma opcao:
echo 1. Primeiro deploy (configurar Git + GitHub)
echo 2. Atualizar codigo (commit + push)
echo 3. Ver status do Git
echo 4. Instalar dependencias
echo 5. Rodar em desenvolvimento
echo 6. Build de producao
echo 7. Sair
echo.
set /p option="Digite o numero da opcao: "

if %option%==1 (
    echo.
    echo Configurando primeiro deploy...
    git init
    git add .
    git commit -m "Initial commit - ALFATEC website"
    echo.
    echo IMPORTANTE: Agora voce precisa:
    echo 1. Criar um repositorio no GitHub: https://github.com/new
    echo 2. Executar os comandos abaixo substituindo [SEU-USUARIO]:
    echo.
    echo git remote add origin https://github.com/[SEU-USUARIO]/alfatec.git
    echo git branch -M main
    echo git push -u origin main
    echo.
    pause
)

if %option%==2 (
    echo.
    set /p message="Digite a mensagem do commit: "
    git add .
    git commit -m "%message%"
    git push origin main
    echo.
    echo Codigo atualizado com sucesso!
    echo.
    pause
)

if %option%==3 (
    echo.
    git status
    echo.
    pause
)

if %option%==4 (
    echo.
    echo Instalando dependencias...
    npm install
    echo.
    echo Dependencias instaladas!
    echo.
    pause
)

if %option%==5 (
    echo.
    echo Iniciando servidor de desenvolvimento...
    echo Acesse: http://localhost:3000
    echo.
    npm run dev
)

if %option%==6 (
    echo.
    echo Criando build de producao...
    npm run build
    echo.
    echo Build concluido! Para testar localmente, execute: npm start
    echo.
    pause
)

if %option%==7 (
    exit
)