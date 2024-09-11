import fastify from "fastify"
import { createGoal } from '../features/create-goal'
import { serializerCompiler, validatorCompiler, type ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { getWeekPendingGoals } from '../features/get-week-pending-goals';
import { createGoalCompletion } from '../features/create-goal-completion';

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

app.get('/pending-goals', async () => {
  const { pendingGoals } = await getWeekPendingGoals()

  return { pendingGoals }
})

app.post('/completions', {
  schema: {
    body: z.object({
      goalId: z.string()
    })
  }
}
  , async (req) => {

    const { goalId } = req.body

    await createGoalCompletion({
      goalId
    })
  })

app.listen({
  port: 3333
}).then(() => {
  console.log('Server is running on port 3333');
})