export type TUser = {
        id: string;
        "name": {
                "first": string,
                "middle": string,
                "last": string,
        },
        "phone": string,
        "email": string,
        "password": string,
        "image": {
                "url": string,
                "alt": string,
        },
        "address": {
                "state": string,
                "country": string,
                "city": string,
                "street": string,
                "houseNumber": number,
                "zip": number
        },
        "isAdmin": boolean,
        "isBusiness": boolean,
};