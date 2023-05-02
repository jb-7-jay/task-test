const persistTasks = (tasks) => {
  document.cookie = JSON.stringify(tasks)
}

const getPersistedTasks = () => {
  const tasks = JSON.parse(document.cookie || [])
  return tasks
}

export {
  persistTasks,
  getPersistedTasks
}