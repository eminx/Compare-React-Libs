import analysis from './analysis-data';

const firmitas = {
  support: [],
  issues: [],
  maintenance: [],
  widespreadUsage: []
}

const utilitas = {
  richness: [],
  dataSpecificTools: [],
  comprehensivenessOfDocumentation: [],
  commitFrequency: [],
  customisation: []
}

const venustas = {
  minimumDistractionForEndUsers: [],
  shortestPathsToActions: []
}

analysis.firmitas.support.forEach((item, i) => {
  let name = Object.getOwnPropertyNames(item)[0];
  firmitas.support.push({
    x: name,
    y: item[name]
  })
});

analysis.firmitas.issues.forEach((item, i) => {
  let name = Object.getOwnPropertyNames(item)[0];
  firmitas.issues.push({
    x: name,
    y: item[name]
  })
});

analysis.firmitas.maintenance.forEach((item, i) => {
  let name = Object.getOwnPropertyNames(item)[0];
  firmitas.maintenance.push({
    x: name,
    y: item[name]
  })
});

analysis.firmitas.widespreadUsage.forEach((item, i) => {
  let name = Object.getOwnPropertyNames(item)[0];
  firmitas.widespreadUsage.push({
    x: name,
    y: item[name]
  })
});

analysis.utilitas.richness.forEach((item, i) => {
  let name = Object.getOwnPropertyNames(item)[0];
  utilitas.richness.push({
    x: name,
    y: item[name]
  })
});

analysis.utilitas.dataSpecificTools.forEach((item, i) => {
  let name = Object.getOwnPropertyNames(item)[0];
  utilitas.dataSpecificTools.push({
    x: name,
    y: item[name]
  })
});

analysis.utilitas.comprehensivenessOfDocumentation.forEach((item, i) => {
  let name = Object.getOwnPropertyNames(item)[0];
  utilitas.comprehensivenessOfDocumentation.push({
    x: name,
    y: item[name]
  })
});

analysis.utilitas.commitFrequency.forEach((item, i) => {
  let name = Object.getOwnPropertyNames(item)[0];
  utilitas.commitFrequency.push({
    x: name,
    y: item[name]
  })
});
analysis.utilitas.customisation.forEach((item, i) => {
  let name = Object.getOwnPropertyNames(item)[0];
  utilitas.customisation.push({
    x: name,
    y: item[name]
  })
});

analysis.venustas.minimumDistractionForEndUsers.forEach((item, i) => {
  let name = Object.getOwnPropertyNames(item)[0];
  venustas.minimumDistractionForEndUsers.push({
    x: name,
    y: item[name]
  })
});

analysis.venustas.shortestPathsToActions.forEach((item, i) => {
  let name = Object.getOwnPropertyNames(item)[0];
  venustas.shortestPathsToActions.push({
    x: name,
    y: item[name]
  })
});

export { firmitas, utilitas, venustas };
