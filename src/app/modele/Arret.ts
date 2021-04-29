export interface Arret {
  Arret : string
  Codearret : string
  streetmap :string

}

export type GeoPoint = number[];
export interface Geometry {
  type: 'Point';
  coordinates: GeoPoint;
}
export interface FeatureArret {
  type: 'Feature';
  geometry: Geometry;
  properties: {
    CODE: string;
    LIBELLE: string; // "GRENOBLE Cité Jean Macé / MEYLAN Maupertuis"
    COMMUNE: string; // "C1"
    Arr_visible: number; // 1
    type: string;
    id: string; // "SEM_C1"
  };
}
export interface FeatureArretCollection {
  type: 'FeatureCollection';
  features: FeatureArret[];
}
