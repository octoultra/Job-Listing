export const filterDataBySkills = (skillsList, data) => data.reduce((list, job) => {
  const jobSkills = [...job.languages, ...job.tools];
  if (jobSkills.some(skill => skillsList.includes(skill))) {
    return list.concat(job)
  }
  return list;
}, []);