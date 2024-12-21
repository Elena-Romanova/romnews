FROM node:21-alpine

WORKDIR /app

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* .npmrc* ./

RUN npm ci;

COPY app ./app
COPY public ./public
COPY next.config.ts .
COPY eslint.config.mjs .
COPY tsconfig.json .
COPY tailwind.config.ts .
COPY postcss.config.mjs .
COPY prisma ./prisma

RUN npx prisma generate

CMD \
    echo "##"; \
    npx prisma version; \
    echo "##"; \
    npx prisma migrate dev --name initial_migration; \
    npx prisma db seed; \
    if [ -f yarn.lock ]; then yarn dev; \
    elif [ -f package-lock.json ]; then npm run dev; \
    elif [ -f pnpm-lock.yaml ]; then pnpm dev; \
    else npm run dev; \
    fi