# TripFinder - Site de Turismo

Este é um projeto completo de site de turismo chamado "TripFinder" desenvolvido para um trabalho de faculdade.

## Tecnologias Utilizadas

- React 19 com Vite
- JavaScript (não TypeScript)
- Tailwind CSS para styling
- Lucide React para ícones
- react-leaflet + Leaflet para mapas (OpenStreetMap)
- Dados dos destinos em arquivos JSON locais

## Funcionalidades

### Páginas
- **Home (Página inicial)**: Banner principal, frase de efeito, botão "Explorar destinos", seção de destinos em destaque e seção de categorias
- **Destinos**: Lista de destinos com filtros por categoria (Praias, Natureza, História, Aventura, Gastronomia) e barra de pesquisa
- **Detalhes do destino**: Informações completas sobre cada destino incluindo mapa, história, curiosidades, melhor época para visitar, custo estimado e pontos turísticos próximos
- **404 Personalizada**: Página de erro amigável

### Componentes
- Navbar com logo TripFinder
- Footer com informações do projeto
- DestinationCard para exibição de cards de destinos
- SearchBar para busca por nome
- CategoryFilter para filtragem por categoria
- MapComponent usando Leaflet + OpenStreetMap
- DestinationDetails para visualização completa

### Extras
- Favoritos usando LocalStorage
- Design totalmente responsivo (mobile e desktop)
- Animações suaves
- Loading implícito durante navegação
- Código organizado e comentado

## Como Executar Localmente

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Construir para produção
npm run build
```

## Deploy na Vercel

O projeto está configurado para deploy direto na Vercel:
1. Faça push para um repositório Git
2. Importe o projeto na Vercel
3. A Vercel detectará automaticamente que é um projeto Vite
4. Deploy concluído!

## Estrutura de Pastas

```
src/
 ├── components/
 │   ├── Navbar.jsx
 │   ├── Footer.jsx
 │   ├── DestinationCard.jsx
 │   ├── SearchBar.jsx
 │   ├── CategoryFilter.jsx
 │   └── MapComponent.jsx
 ├── pages/
 │   ├── Home.jsx
 │   ├── Destinations.jsx
 │   ├── DestinationDetails.jsx
 │   └── NotFound.jsx
 ├── data/
 │   └── destinations.json
 ├── assets/
 ├── App.jsx
 └── main.jsx
```

## Observações

- Todas as imagens utilizadas são de fontes gratuitas (Unsplash) e livres de direitos autorais
- Não há uso de Google Maps API (que requer chave paga) - utilizamos Leaflet + OpenStreetMap gratuito
- O mapa recebe latitude e longitude diretamente do JSON dos destinos
- O projeto não requer backend obrigatório - todos os dados são estáticos
- Totalmente compatível com Vercel para deploy

Desenvolvido com ❤️ para o trabalho de faculdade de turismo.