const analysisVitrivius = {
  firmitas: {
    support: [ //solved issues / all issues at Github * 100
      {ant: 98},
      {blueprint: 69},
      {material: 98},
      {semantic: 95}
    ],
    coverage: [
      {ant: 0},
      {blueprint: 0},
      {material: 0},
      {semantic: 0}
    ],
    issues: [
      {ant: 6829},
      {blueprint: 988},
      {material: 5383},
      {semantic: 1212}
    ],
    maintenance: [ // number of total commit}s
      {ant: 10673},
      {blueprint: 888},
      {material: 6722},
      {semantic: 2649}
    ],
    widespreadUsage: [ // installs in last month from npm
      {ant: 179619},
      {blueprint: 41414},
      {material: 469478},
      {semantic: 115953}
    ]
  },
  utilitas: {
    richness: [ // nr of components in the library
      {ant: 56},
      {blueprint: 45},
      {material: 39},
      {semantic: 47}
    ],
    dataSpecificTools: [ // components specific to data entry or display rather than just fancines}s
      {ant: 30},
      {blueprint: 16},
      {material: 11},
      {semantic:  21}
    ],
    comprehensivenessOfDocumentation: [ // scoring based on personal experience out of 10}0
      {ant: 80},
      {blueprint: 30},
      {material: 70},
      {semantic:  75}
    ],
    commitFrequency: [ // if x is the number of days ago in at the 1st page in commit history: 1 / x * 100 is show}n
      {ant: 8},
      {blueprint: 4},
      {material: 10},
      {semantic: 2}
    ],
    modularity: [ // ability to use the components together to create custom, richer component}s
      {ant: 0},
      {blueprint: 0},
      {material: 0},
      {semantic: 0}
    ],
    customisation: [ // how many props table component have
      {ant: 12},
      {blueprint: 10},
      {material: 4},
      {semantic:  28}
    ]
  },
  venustas: { // scoring based on personal experience out of 100}
    coherence: [
      {ant: 0},
      {blueprint: 0},
      {material: 0},
      {semantic: 0}
    ],
    easeOfUse: [
      {ant: 0},
      {blueprint: 0},
      {material: 0},
      {semantic: 0}
    ],
    minimumDistractionForEndUsers: [ // this is configurabl}e
      {ant: 70},
      {blueprint: 80},
      {material: 30},
      {semantic: 90}
    ],
    shortestPathsToActions: [
      {ant: 95},
      {blueprint: 85},
      {material: 60},
      {semantic:  90}
    ]
  }
}

export default analysisVitrivius;
