export interface CardProps {
  drink: CoffeeDrink;
}

export interface FinderBarProps {
  handleInputChange: (term: string) => void;
}

export interface CoffeeDrink {
    id: number;
    name: string;
    category: string;
    formCode: FormCode;
    displayOrder: number;
    availability: Availability;
    assets: Assets;
    sizes: SizeCode[];
  }
  
  export interface Assets {
    thumbnail: Thumbnail;
    fullSize: FullSize;
    masterImage: FullSize;
  }
  
  export interface Thumbnail {
    large: FullSize;
  }
  
  export interface FullSize {
    uri: string;
  }
  
  export type FormCode =
    | 'Single'
    | 'Hot'
    | 'Iced'
    | 'Packaged'
    | 'Whole-Bean'
    | 'VIA';
  
  export type SizeCode =
    | 'Small'
    | 'Medium'
    | 'Large'
    | 'Single'
    | 'Double'
    | 'Triple'
    | 'Quad'
    | 'Kids'
    | 'Trenta'
    | '14.5-Packaged'
    | '12-Packaged'
    | '11-Packaged'
    | '8-Packaged'
    | '16.9-Packaged'
    | '20-Packaged'
    | '23.7-Packaged'
    | '600-Packaged'
    | '1 Piece'
    | '8.8-oz'
    | '1-lb'
    | '5-count'
    | '12-count';
  
  export type Availability = 'Available';
  
  export interface Error {
    code: number;
    message: string;
  }