# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

## [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0//)
feat: - indica que seu trecho de código está incluindo um novo recurso (se relaciona com o MINOR do versionamento semântico).
fix: - trecho de código commitado está solucionando um problema (bug fix), (se relaciona com o PATCH do versionamento semântico).
docs: -  mudanças na documentação (Não inclui alterações em código).
test: - alterações em testes, seja criando, alterando ou excluindo testes unitários. (Não inclui alterações em código)
build: - modificações em arquivos de build e dependências.
perf: -identificar quaisquer alterações de código que estejam relacionadas a performance.
style: - alterações referentes a formatações de código, semicolons, trailing spaces, lint... **(Não inclui alterações em código).**
refactor: - mudanças devido a refatorações que não alterem sua funcionalidade
chore: - atualizações de tarefas de build, configurações de administrador, pacotes... (Não inclui alterações em código)
ci: - mudanças relacionadas a integração contínua (continuous integration).
raw: - mudanças relacionadas a arquivos de configurações, dados, features, parâmetros.
cleanup: - remover código comentado, trechos desnecessários ou qualquer outra forma de limpeza do código-fonte, visando aprimorar sua legibilidade e manutenibilidade.
remove: - exclusão de arquivos, diretórios ou funcionalidades obsoletas ou não utilizadas, reduzindo o tamanho e a complexidade do projeto e mantendo-o mais organizado.

---

## [Unreleased] - 2026-05-17

### ✨ Adicionado

- Implementa componentes interativos (matrix hero, menu, tema, scroll) (`5663bbe`)
- Implementa arquitetura de estilos com temas claro e escuro (`d043a59`)
- Inicia estrutura da landing page (`6084bc7`)

### 📦 Alterado

- Corrige build (`562aba0`)
- Corrige pipeline de build e adiciona dependência fs-extra (`d537ad3`)

### 🧱 Alterado

- Adiciona workflow de build e deploy no GitHub Pages (`621230d`)

### 🗃️ Alterado

- Adiciona logo, ícone e configuração de fontes da liga (`c6bb90c`)

### 📚 Documentação

- Atualiza README com descrição completa da liga e do projeto (`41a7f36`)

### ♻️ Refatoração

- Extrai seções em partials e corrige caminhos de assets (`1e8d1e3`)

### 🔧 Manutenção

- Adiciona configuração do projeto, dependências e scripts de build (`f6b714c`)

### 🗑️ Exclusão

- Remove index.html monolítico da raiz substituído por sistema de templates (`96c2b19`)

---

## 2026-05-13

### Outros

- Initial commit (`008d22d`)

---

## Estatísticas do Projeto

- **Total de commits:** 12
- **Período:** 2026-05-13 - 2026-05-17
- **Contribuidores:** 2

### Contribuidores

- mariisena
- Mariana Sena

---

## Categorias de Mudanças

- **Adicionado** - para novas funcionalidades
- **Alterado** - para mudanças em funcionalidades existentes
- **Corrigido** - para correções de bugs
- **Refatoração** - mudanças devido a refatorações que não alterem sua funcionalidade
- **Documentação** - mudanças na documentação
- **Manutenção** - tarefas de manutenção e chores
- **Testes** - adição ou modificação de testes
- **Exclusão** - exclusão de arquivos, diretórios ou funcionalidades obsoletas ou não utilizadas
- **Outros** - outras mudanças

---

_Este arquivo é gerado automaticamente pelo script `update-changelog.js`_
