import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function main() {
  [...Array.from(Array(500).keys())].forEach(async (item) => {
    await client.stream.create({
      data: {
        title: String(item),
        description: String(item),
        price: item,
        cloudflareId: "s",
        cloudflareKey: "s",
        cloudflareUrl: "s",
        user: {
          connect: {
            id: 1,
          },
        },
      },
    });
    console.log(`${item}/500`);
  });
}

main()
  .catch((e) => console.log(e))
  .finally(() => {
    client.$disconnect();
  });
