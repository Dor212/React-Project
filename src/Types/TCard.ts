export type TCard = {
  map(arg0: (item: TCard) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
  "_id": "65422172e443ec28a252c27d",
  "title": string,
  "subtitle": string,
  "description": string,
  "phone": string,
  "email": string,
  "web": string,
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
    "zip": number,
  },
  "bizNumber": number,
  "likes": string[],
  "user_id": string,
}
