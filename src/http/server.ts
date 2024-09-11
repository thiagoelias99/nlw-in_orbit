import fastify from "fastify"
import { createGoal } from '../features/create-goal'
import { serializerCompiler, validatorCompiler, type ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.post('/goals', {
  schema: {
    body: z.object({
      title: z.string(),
      desiredWeeklyFrequency: z.number().min(1).max(7)
    })
  }
}
  , async (req) => {

    const { title, desiredWeeklyFrequency } = req.body

    await createGoal({
      title,
      desiredWeeklyFrequency
    })
  })

app.listen({
  port: 3333
}).then(() => {
  console.log('Server is running on port 3333');
})