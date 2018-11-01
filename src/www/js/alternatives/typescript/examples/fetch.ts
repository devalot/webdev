interface ArtistFields {
  id?: number;
  name: string;
  website: string;
  formation_year: number;
}

class Artist implements ArtistFields {
  id?: number;
  name: string;
  website: string;
  formation_year: number;

  static async fetchAll(): Promise<Artist[]> {
    const records = await fetch("/api/artists").then(r => r.json());
    return records.map((r: ArtistFields) => new Artist(r));
  }

  constructor(fields: ArtistFields) {
    this.id = fields.id;
    this.name = fields.name;
    this.website = fields.website;
    this.formation_year = fields.formation_year;
  }

  // There are two problems with this function
  // that TypeScript does not report!
  save(): Promise<Artist> {
    return fetch(`/api/artists/${this.id}`,
                 { method: "PATCH",
                   body: JSON.stringify(this),
                 }).then(r => r.json());
  }
}
