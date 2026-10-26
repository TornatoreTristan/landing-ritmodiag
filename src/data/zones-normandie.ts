// Routage des demandes de devis Normandie : code postal -> agence (slug de src/data/villes/*.json).
// Le préfixe le plus long l'emporte (ex. "14800" > "14"). Ajuster ici si un secteur change d'agence.
export const zonesNormandie: Record<string, string> = {
  // Calvados : Caen par défaut
  '14': 'caen',
  // Côte Fleurie / Pays d'Auge -> Deauville
  '14800': 'deauville', '14600': 'deauville', '14640': 'deauville', '14510': 'deauville',
  '14910': 'deauville', '14390': 'deauville', '14100': 'deauville', '14130': 'deauville',
  '14950': 'deauville', '14113': 'deauville', '14360': 'deauville', '14340': 'deauville',
  '14290': 'deauville', '14590': 'deauville', '14140': 'deauville', '14430': 'deauville',
  // Bocage virois -> Vire
  '14500': 'vire', '14350': 'vire', '14380': 'vire', '14410': 'vire', '14770': 'vire', '14260': 'vire',

  // Manche : Saint-Lô par défaut
  '50': 'saint-lo',
  // Cotentin -> Cherbourg
  '501': 'cherbourg', '50700': 'cherbourg', '50760': 'cherbourg', '50340': 'cherbourg',
  '50460': 'cherbourg', '50440': 'cherbourg', '50330': 'cherbourg', '50270': 'cherbourg',
  '50580': 'cherbourg', '50550': 'cherbourg', '50630': 'cherbourg', '50260': 'cherbourg',
  '50310': 'cherbourg', '50390': 'cherbourg', '50360': 'cherbourg', '50250': 'cherbourg',
  '50480': 'cherbourg',
  // Sud-Manche -> Vire
  '50300': 'vire', '50800': 'vire', '50140': 'vire', '50600': 'vire', '50220': 'vire',
  '50240': 'vire', '50170': 'vire', '50530': 'vire', '50400': 'vire', '50380': 'vire',
  '50150': 'vire', '50870': 'vire', '50370': 'vire', '50610': 'vire', '50320': 'vire',
  '50510': 'vire',

  // Orne : Alençon par défaut, Bocage ornais -> Vire
  '61': 'alencon',
  '61100': 'vire', '61700': 'vire', '61800': 'vire', '61450': 'vire', '61350': 'vire',
  // Sarthe (couverte par Alençon)
  '72': 'alencon',

  // Seine-Maritime -> Le Havre
  '76': 'le-havre',
  // Eure : Le Havre par défaut, ouest de l'Eure -> Deauville
  '27': 'le-havre',
  '27500': 'deauville', '27300': 'deauville', '27260': 'deauville', '27210': 'deauville',
}

// Code postal absent de cette table : aucune agence attribuée, la demande est envoyée avec hors_zone = true.
// Caen n'intervient que dans le Calvados (14), elle ne sert donc pas d'agence de repli.
