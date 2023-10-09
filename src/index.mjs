import { createCronTask } from './utils/cron/cron.mjs';
import { CronTime } from 'cron-time-generator';
import cronstrue from 'cronstrue';

console.log('----------');

const cronExpression = CronTime.everyMinute();
console.log('Expression: ', cronExpression);

console.log('----------');

const cronDescription = cronstrue.toString(cronExpression);
console.log('Description: ', cronDescription);

console.log('----------');

createCronTask(cronExpression, () => {
  console.log(`${new Date().toString()} running a task ${cronDescription}`);
});
