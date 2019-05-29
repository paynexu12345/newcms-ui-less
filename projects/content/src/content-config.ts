import { Menu } from 'projects/ng-poppins/src/public-api';

export const MENUS_CONTENT:Menu[] = [
  {
    name: "Content home",
    nameForUrl: "home",
    url: "/content/home",
    isActive: false,
    icon: "icon-home"
  },
  {
    name: "Program",
    nameForUrl: "program",
    icon: "icon-play",
    isActive: false,
    permissionRels:["*"],
    children: [
      {
        name: "Library",
        nameForUrl: "library",
        url: "/content/program/library",
        isActive: false,
        permissionRels:["/content/v1/programs*"]
      },
      {
        name: "Upload",
        nameForUrl: "upload",
        url: "/content/program/upload",
        isActive: false,
        permissionRels:["/content/v1/programs*"]
      },
      {
        name: "Category",
        nameForUrl: "category",
        url: "/content/program/category",
        isActive: false,
        permissionRels:["/content/v1/categories*"]
      },
      {
        name: "Tags",
        nameForUrl: "tags",
        url: "/content/program/tags",
        isActive: false,
        permissionRels:["/content/v1/tags*"]
      },
      {
        name: "Most Popular",
        nameForUrl: "most-popular",
        url: "/content/program/most-popular",
        isActive: false,
        permissionRels:["*"]
      }
    ]
  },
  {
    name: "Linear Channel",
    nameForUrl: "linear-channel",
    icon: "icon-tv",
    isActive: false,
    permissionRels:["/content/v1/linearChannels*","/content/v1/epgs*"],
    children: [
      {
        name: "Channel",
        nameForUrl: "channel",
        url: "/content/linear-channel/channel",
        isActive: false,
        permissionRels:["/content/v1/linearChannels*"]
      },
      {
        name: "EPG",
        nameForUrl: "EPG",
        url: "/content/linear-channel/epg",
        isActive: false,
        permissionRels:["/content/v1/epgs*"]
      }
    ]
  },
  {
    name: "Schedule",
    nameForUrl: "schedule",
    icon: "icon-cal",
    isActive: false,
    permissionRels:["*"],
    children: [
      {
        name: "Live Event",
        nameForUrl: "event",
        url: "/content/schedule/event",
        isActive: false,
        permissionRels:["*"]
      },
      {
        name: "Game Schedule",
        nameForUrl: "game",
        url: "/content/schedule/game",
        isActive: false,
        permissionRels:["/content/v1/games*"]
      },
      {
        name: "Team",
        nameForUrl: "team",
        url: "/content/schedule/team",
        isActive: false,
        permissionRels:["/content/v1/teams*"]
      },
      {
        name: "League",
        nameForUrl: "league",
        url: "/content/schedule/league",
        isActive: false,
        permissionRels:["/content/v1/leagues*","/content/v1/divisions*","/content/v1/groups*"]
      },
      {
        name: "Sport",
        nameForUrl: "sport",
        url: "/content/schedule/sport",
        isActive: false,
        permissionRels:["/content/v1/sports*"]
      },
      {
        name: "Game Type",
        nameForUrl: "game-type",
        url: "/content/schedule/game-type",
        isActive: false,
        permissionRels:["/content/v1/gameTypes*"]
      },
      {
        name: "Game Pack",
        nameForUrl: "game-pack",
        url: "/content/schedule/game-pack",
        isActive: false,
        permissionRels:["/content/v1/gamePacks*"]
      }
    ]
  },
  {
    name: "Application",
    nameForUrl: "application",
    icon: "icon-app",
    isActive: false,
    permissionRels:["*"],
    children: [
      {
        name: "Site Navigation",
        nameForUrl: "site-navigation",
        url: "/content/application/site-navigation",
        isActive: false,
        permissionRels:["/content/v1/navigations*"]
      },
      {
        name: "Dynamic Lead",
        nameForUrl: "dynamic-lead",
        url: "/content/application/dynamic-lead",
        isActive: false,
        permissionRels:["/content/v1/dynamicLeads*"]
      },
      {
        name: "Ad Banners",
        nameForUrl: "ad-banners",
        url: "/content/application/ad-banners",
        isActive: false,
        permissionRels:["/content/v1/adbanners*"]
      },
      {
        name: "Ticker",
        nameForUrl: "ticker",
        url: "/content/application/ticker",
        isActive: false,
        permissionRels:["/content/v1/tickers*"]
      },
      {
        name: "Poll",
        nameForUrl: "poll",
        url: "/content/application/poll",
        isActive: false,
        permissionRels:["*"]
      }
    ]
  },
  {
    name: "Syndication",
    nameForUrl: "syndication",
    icon: "icon-earth",
    isActive: false,
    children: [
      {
        name: "Syndication Partners",
        nameForUrl: "partners",
        url: "/content/syndication/partners",
        isActive: false,
        permissionRels:["/admin/v1/partners*"]
      },
      {
        name: "Syndication Task",
        nameForUrl: "task",
        url: "/content/syndication/task",
        isActive: false,
        permissionRels:["*"]
      }
    ]
  }
]