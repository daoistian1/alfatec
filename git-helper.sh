#!/bin/bash
# Script auxiliar para comandos Git - ALFATEC

echo "🚀 ALFATEC - Git Helper"
echo "========================"
echo ""
echo "Escolha uma opção:"
echo "1) Primeiro deploy (configurar Git + GitHub)"
echo "2) Atualizar código (commit + push)"
echo "3) Ver status do Git"
echo "4) Criar nova branch"
echo "5) Sair"
echo ""
read -p "Opção: " option

case $option in
  1)
    echo "📦 Configurando primeiro deploy..."
    git init
    git add .
    git commit -m "Initial commit - ALFATEC website"
    echo ""
    echo "⚠️  Agora você precisa:"
    echo "1. Criar um repositório no GitHub: https://github.com/new"
    echo "2. Executar os comandos abaixo com seu username:"
    echo ""
    echo "git remote add origin https://github.com/[SEU-USUARIO]/alfatec.git"
    echo "git branch -M main"
    echo "git push -u origin main"
    ;;
    
  2)
    echo "📝 Digite a mensagem do commit:"
    read -p "> " message
    git add .
    git commit -m "$message"
    git push origin main
    echo "✅ Código atualizado com sucesso!"
    ;;
    
  3)
    git status
    ;;
    
  4)
    echo "📝 Nome da nova branch:"
    read -p "> " branch
    git checkout -b $branch
    echo "✅ Branch '$branch' criada e ativada!"
    ;;
    
  5)
    echo "👋 Até logo!"
    exit 0
    ;;
    
  *)
    echo "❌ Opção inválida!"
    ;;
esac