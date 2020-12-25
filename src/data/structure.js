import avatar from "./img/av-2.png";

const numbers = [
  {
    score: 421,
    color: "#826cfc",
    bgColor: "#f2f0fe",
  },
  {
    score: 431,
    color: "#0085ff",
    bgColor: "#c0e8ff",
  },
  {
    score: 432,
    color: "#54b806",
    bgColor: "#d7ffe2",
  },
  {
    score: 111,
    color: "#d4a707",
    bgColor: "#fff9c7",
  },
];

export const structureData = {
  title: "Chef",
  name: "Memmed Memmedov",
  email: "memmed@mail.com",
  structure: "Co-Founder",
  position: "CEO",
  collapsed: false,
  numbers,
  avatar,
  departments: [
    {
      id: 0,
      title: "Marketing",
      collapsed: false,
      employees: [
        {
          title: "Director",
          name: "Toghrul Rajab",
          email: "toghrul@mail.com",
          position: "Director",
          structure: "Marketing",
          avatar,
          numbers,
        },
      ],
      sections: [
        {
          id: 0,
          title: "SMM",
          collapsed: false,
          employees: [
            {
              title: "Manager",
              name: "Oruc Oruclu",
              position: "Manager",
              structure: "Marketing",
              email: "oruc@oruc.com",
              numbers,
              avatar,
            },
          ],
          positions: [
            {
              id: 0,
              title: "SEO Specialist",
              collapsed: false,
              employees: [
                {
                  title: "Specialist",
                  name: "Oktay Muradov",
                  position: "Employee",
                  structure: "Marketing",
                  email: "oktay@mail.com",
                  numbers,
                  avatar,
                },
                {
                  title: "Specialist",
                  name: "Veli Niyamov",
                  position: "Employee",
                  structure: "Marketing",
                  email: "veli@mail.com",
                  numbers,
                  avatar,
                },
              ],
            },
            {
              id: 0,
              title: "Copywriter",
              collapsed: false,
              employees: [
                {
                  title: "Copywriter",
                  name: "Tomas Balayev",
                  position: "Employee",
                  structure: "Marketing",
                  email: "tom@mail.com",
                  numbers,
                  avatar,
                },
                {
                  title: "Middle",
                  name: "Eli Niyamov",
                  position: "Employee",
                  structure: "Marketing",
                  email: "eli@mail.com",
                  numbers,
                  avatar,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 1,
      title: "IT Department",
      collapsed: false,
      employees: [
        {
          title: "Director",
          name: "Toghrul Rajab",
          email: "toghrul@mail.com",
          position: "Director",
          structure: "IT",
          avatar,
          numbers,
        },
      ],
      sections: [
        {
          id: 1,
          title: "WEB Development",
          collapsed: false,
          employees: [
            {
              title: "Manager",
              name: "Oruc Oruclu",
              position: "Manager",
              structure: "IT",
              email: "oruc@oruc.com",
              numbers,
              avatar,
            },
          ],
          positions: [
            {
              id: 1,
              title: "UI/UX Designer",
              collapsed: false,
              employees: [
                {
                  title: "Specialist",
                  name: "Oktay Muradov",
                  position: "Employee",
                  structure: "IT",
                  email: "oktay@mail.com",
                  numbers,
                  avatar,
                },
                {
                  title: "Specialist",
                  name: "Veli Niyamov",
                  position: "Employee",
                  structure: "IT",
                  email: "veli@mail.com",
                  numbers,
                  avatar,
                },
              ],
            },
            {
              id: 1,
              title: "Sys admin",
              collapsed: false,
              employees: [
                {
                  title: "System admin",
                  name: "Tomas Balayev",
                  position: "Employee",
                  structure: "IT",
                  email: "tom@mail.com",
                  numbers,
                  avatar,
                },
                {
                  title: "Specialist",
                  name: "Eli Niyamov",
                  position: "Employee",
                  structure: "IT",
                  email: "eli@mail.com",
                  numbers,
                  avatar,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
