// Collection multi-fichiers : une ville = un fichier dans src/data/villes/
// Géré dans Pages CMS comme une collection (libellés = nom de la ville).
const modules = import.meta.glob<{ default: any }>('./villes/*.json', { eager: true })

export const villes = Object.values(modules).map((m) => m.default)
