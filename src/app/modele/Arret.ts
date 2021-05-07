export interface Arret {
  arret : string
  codearret : string
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
    LIBELLE: string;
    COMMUNE: string;
    Arr_visible: number;
    type: string;
    id: string;
  };
}
export interface FeatureArretCollection {
  type: 'FeatureCollection';
  features: FeatureArret[];
}
