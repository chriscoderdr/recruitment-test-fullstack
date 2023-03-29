
npx prisma generate

yarn build
npx prisma migrate deploy
npx prisma db seed
yarn start