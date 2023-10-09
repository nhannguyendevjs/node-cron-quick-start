import cron from 'node-cron';

const createCronTask = (expression, callback, options = {}) => {
  if (cron.validate(expression)) {
    return cron.schedule(expression, callback, options);
  }
};

const getAllCronTasks = () => cron.getTasks();

const destroyAllCronTasks = () => {
  cron.getTasks().forEach(task => task.stop());
}

export {
  createCronTask,
  getAllCronTasks,
  destroyAllCronTasks,
}
