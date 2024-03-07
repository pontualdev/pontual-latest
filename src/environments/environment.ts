const domain$: string = 'https://pontualao-bo.pontual-ao.com';
// const domain$: string = 'http://pontual.host';

export const environment = {
    production: false,
    backoffice: `${domain$}/wp-json/wp/v2`,
    domain: domain$,
    newsletter: {
        endpoint: `${domain$}/wp-json/newsletter/v2`,
        clientKey: 'e32b6d4a05fbb0fad1ea4212de9808b10f77ef16',
        clientSecret: 'fcbd1e9c008438db15e463adfd362b62510bdd44',
    },
    googleAnalyticsMeasurementId: 'G-7V2W464BKM'
};