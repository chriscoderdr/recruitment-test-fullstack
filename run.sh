sleep 15

npx prisma migrate deploy
npx prisma db seed
yarn build
yarn start