# Café com Ciber — Liga Acadêmica de Cibersegurança – CEUB

Site institucional da **Liga Acadêmica de Cibersegurança Café com Ciber**, vinculada ao Centro Universitário de Brasília (CEUB).

Acesse em: **[https://cafe-com-ciber.github.io](https://cafe-com-ciber.github.io)**

---

## Sobre a Liga

A Liga Café com Ciber tem como missão promover Pesquisa e Desenvolvimento aplicado em gestão de riscos, privacidade, segurança da informação, segurança cibernética e gestão de crises cibernéticas, formando profissionais críticos, éticos e tecnicamente preparados.

A liga atua como espaço de formação avançada, produção de conhecimento aplicado, desenvolvimento de capacidades humanas e técnicas, e disseminação de boas práticas para organizações e para a sociedade — em parceria com o CEUB e instituições públicas e privadas.

---

## Linhas de Pesquisa

As linhas de pesquisa são ancoradas no **Cyber Security Body of Knowledge (CyBOK)**:

1. **Governança, Riscos, Privacidade e Regulação Digital** — modelos de governança, LGPD, compliance, gestão de riscos e fatores humanos
2. **Operações de Segurança, Incidentes e Resiliência Cibernética** — SOC, CSIRT, resposta a incidentes, inteligência de ameaças
3. **Inteligência Artificial, Fraudes Digitais e Ameaças Emergentes** — uso de IA em ataques e defesas, deepfakes, engenharia social automatizada
4. **Engenharia de Software Seguro e Plataformas Digitais** — secure by design, ciclo de vida seguro, segurança de aplicações web e móveis
5. **Infraestrutura, Sistemas e Tecnologias de Base** — criptografia, segurança de redes, hardware, IoT e sistemas ciberfísicos

---

## Estrutura do Site

| Seção | Descrição |
|---|---|
| Hero | Nome da liga, tagline e call-to-action |
| Sobre | Missão, origem e vínculo com o CEUB |
| Linhas de Pesquisa | Cards com as 5 linhas (base CyBOK) |
| Equipe | Membros da liga |
| Eventos | Atividades e próximos eventos |
| Contato | GitHub, LinkedIn e email institucional |

---

## Tecnologias

- HTML5, CSS3 e JavaScript puro — sem framework ou etapa de build
- Hospedagem via **GitHub Pages** (deploy automático a cada push em `main`)
- Fontes: **Lora SemiBold** (títulos) e **Inter** (corpo) via Google Fonts

### Paleta de Cores

| Papel | Hex |
|---|---|
| Primária escura | `#4b0082` |
| Primária vibrante | `#7928ca` |
| Azul destaque (CTAs) | `#4361ee` |
| Fundo suave (cards) | `#e6e7ff` |
| Fundo neutro | `#f7f8fc` |

---

## Desenvolvimento Local

Por ser HTML/CSS/JS puro, basta abrir o `index.html` no navegador ou usar qualquer servidor estático simples:

```bash
# Exemplo com Python
python -m http.server 8000

# Exemplo com Node.js (npx)
npx serve .
```

---

## Deploy

O deploy é automático via GitHub Pages. Todo push para a branch `main` publica a versão mais recente em `https://cafe-com-ciber.github.io`. Nenhuma etapa de build é necessária.

---

## Licença

Distribuído sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.
