import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();

async function main() {
    // Create users
    const user1 = await prisma.user.create({
        data: { name: "Alice", email: "alice@example.com" },
    });
    const user2 = await prisma.user.create({
        data: { name: "Bob", email: "bob@example.com" },
    });

    // Create posts
    await prisma.post.create({
        data: { title: "Primer post", content: "Contenido del primer post", authorId: user1.id },
    });
    await prisma.post.create({
        data: { title: "Segundo post", content: "Contenido del segundo post", authorId: user2.id },
    });

    console.log("Datos de prueba insertados");
}

main()
    .catch(e => console.error(e))
    .finally(() => prisma.$disconnect());
