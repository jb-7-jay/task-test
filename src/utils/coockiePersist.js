const persistTasks = (tasks) => {
  document.cookie = JSON.stringify(tasks)
}

const getPersistedTasks = () => {
  if (document?.cookie) {
    return JSON.parse(document.cookie || [])
  }
  return []
}

export {
  persistTasks,
  getPersistedTasks
}