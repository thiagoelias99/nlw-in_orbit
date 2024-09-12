import fastify from "fastify"
import { serializerCompiler, validatorCompiler, type ZodTypeProvider } from "fastify-type-provider-zod";
import { createGoalRoute } from './routes/create-goal';
import { getPendingGoalsRoute } from './routes/get-pending-goals';
import { createCompletionRoute } from './routes/create-completion';
import { getWeekSummaryRoute } from './routes/get-week-summary';

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createGoalRoute)
app.register(getPendingGoalsRoute)
app.register(createCompletionRoute)
app.register(getWeekSummaryRoute)

app.listen({
  port: 3333
}).then(() => {
  console.log('Server is running on port 3333');
})