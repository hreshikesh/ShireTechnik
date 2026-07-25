const navigation = [
  {
    label: "Home",
    path: "/",
  },

  {
    label: "About",
    children: [
      {
        label: "About Us",
        path: "/about",
      },
      {
        label: "Careers",
        path: "/careers",
      },
    ],
  },

  {
    label: "Solutions",
    children: [
      {
        label: "CAE Software Solutions",
        path: "/services/software",
      },
      {
        label: "CAE Service Solutions",
        path: "/services/service",
      },
    ],
  },

  {
    label: "Resources",
    children: [
      {
        label: "Webinar",
        path: "/resources/webinar",
      },
      {
        label: "Training",
        path: "/resources/training",
      },
      {
        label: "Blog",
        path: "/resources/blog",
      },
      {
        label: "News & Events",
        path: "/resources/news-events",
      },
      {
        label: "White Papers & Case Studies",
        path: "/resources/whitepapers",
      },
    ],
  },

  {
    label: "Appointment",
    path: "/appointment",
  },

  {
    label: "Contact",
    path: "/contact",
  },
];

export default navigation;