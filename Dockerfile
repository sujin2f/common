# syntax=docker.io/docker/dockerfile:1

FROM node:20-alpine AS base

FROM base AS deps

RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* .npmrc* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN \
  if [ -f yarn.lock ]; then yarn prod; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 sujin

COPY --from=builder /app/public ./public
COPY --from=builder /app/.build ./.build
COPY --from=builder /app/.env ./.env
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

USER sujin

EXPOSE 80

ENV PORT=80
ENV HOSTNAME="0.0.0.0"
CMD ["yarn", "prod:server"]