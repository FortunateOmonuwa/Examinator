import { database } from "../utilities/Prisma.js";
import { RegisterAdmin } from "../functionalities/User/Admin.Service.js";

async function Seed() {
  try {
    const newAdminQuery = await database.UserProfile.create({
      data: RegisterAdmin("omonuwafortunate@gmail.com", "F0rtun@te0m0nuw@"),
    });
    const response = newAdminQuery
      ? "Admin Creation Successful"
      : "Admin Creation Unsuccessful";

    console.log(response);
  } catch (error) {
    console.error("Failed to create admin:", error.message);
  } finally {
    await database.$disconnect();
  }
}

// Seed();
