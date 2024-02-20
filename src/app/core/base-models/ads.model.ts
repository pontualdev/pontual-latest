export interface AdsModel{
    page?: 'home' | 'see-posts' | 'reading' | 'results',
    imagePath: {
        allSizes: {},
        fullImageSize: string,
        thumbnailImageSize: string
    },
    link?: string
}