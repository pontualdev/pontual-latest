interface AllSizesInterface{
    '1536x1536': string
    '1536x1536-height': number,
    '1536x1536-width': number,
    '2048x2048': string,
    '2048x2048-height': number,
    '2048x2048-width': number,
    large: string
    'large-height': number,
    'large-width': number,
    medium: string,
    'medium-height': number,
    'medium-width': number,
    medium_large: string,
    'medium_large-height': number,
    'medium_large-width': number,
    thumbnail: string,
    'thumbnail-height': number,
    'thumbnail-width': number
}

export interface AdsModel{
    page?: 'home' | 'see-posts' | 'reading' | 'results',
    imagePath: {
        allSizes: AllSizesInterface,
        fullImageSize: string,
        thumbnailImageSize: string
    },
    link?: string
}