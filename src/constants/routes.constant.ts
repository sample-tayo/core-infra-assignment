export const ROUTES = {
  ROOT: "/",
  CARDS: {
    PROFILE: {
      LIST: "card-profile",
      CREATE: "card-profile/create",
      EDIT: "card-profile/edit",
    },
    REQUEST: {
      LIST: "card-request",
      DETAILS: "card-request/view",
    },
  },
} as const;