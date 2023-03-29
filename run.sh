sleep 15

npx prisma migrate deploy
npx prisma db seed
yarn start