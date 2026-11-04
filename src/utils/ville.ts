// Préposition devant un nom de ville : « à Angers », « au Havre », « aux Andelys »
export function prepositionVille(ville: string): [string, string] {
  if (ville.startsWith('Le ')) return ['au', ville.slice(3)]
  if (ville.startsWith('Les ')) return ['aux', ville.slice(4)]
  return ['à', ville]
}

export function aVille(ville: string, majuscule = false) {
  const [prep, nom] = prepositionVille(ville)
  return `${majuscule ? prep.charAt(0).toUpperCase() + prep.slice(1) : prep} ${nom}`
}
