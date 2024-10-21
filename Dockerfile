FROM node:18

WORKDIR /app

# Instalação do Vite com uma versão específica
RUN npm install vite@0.20.2

# Copia os arquivos de definição de dependências
COPY package.json ./
COPY package-lock.json ./

# Instalação de dependências do projeto
RUN npm install

# Copia o restante dos arquivos do projeto
COPY . .

# Executa o comando de build
RUN npm run build

# Expõe a porta 8080
EXPOSE 8080

# Comando de execução do servidor de desenvolvimento
CMD [ "npm", "run", "dev" ]