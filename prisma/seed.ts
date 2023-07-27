import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const note1 = await prisma.note.create({
    data: {
      text: "Patient presented with abdominal pain and nausea. Performed physical examination and ordered blood tests and ultrasound to assess for possible appendicitis."
    }
  })
  const note2 = await prisma.note.create({
    data: { 
      text: "Follow-up for diabetes management. Reviewed blood glucose logs, adjusted medication dosage, and provided dietary recommendations."
    }
  })
  const note3 = await prisma.note.create({
    data: {
      text: "Annual check-up. Vital signs within normal range. Conducted comprehensive physical exam, discussed age-appropriate screenings, and addressed patient's questions.",
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (error) => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })