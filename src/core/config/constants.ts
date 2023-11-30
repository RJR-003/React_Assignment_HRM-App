export const constants = {
  delMsg: "Are you sure you want to proceed with the action?",
  baseUrl: import.meta.env.VITE_baseUrl,
  getPostEmpUrl: "/employee",
  getRoleUrl: "/roles",
  getDeptUrl: "/departments",
  getSkillsUrl: "/skills",
  pageLimit: "7",
  location: [
    {
      id: "L1",
      location: "Trivandrum",
    },
    {
      id: "L2",
      location: "Vazhuthacaud",
    },
    {
      id: "L3",
      location: "Cochin",
    },
    {
      id: "L4",
      location: "Calicut",
    },
    {
      id: "L5",
      location: "Noida",
    },
    {
      id: "L6",
      location: "Bangalore",
    },
    {
      id: "L7",
      location: "Koratty",
    },
    {
      id: "L8",
      location: "Chennai",
    },
  ],
} as const;
