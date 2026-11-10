/// <reference types="astro/client" />

interface Window {
  /** Provenance mémorisée du visiteur (Layout.astro, script ritmo-attribution) : à joindre aux leads envoyés à n8n. */
  ritmoAttribution?: () => Record<string, string>
}
