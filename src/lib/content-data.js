const universes = [
  {
    id: "marvel_cinematic_universe",
    title: "Marvel Cinematic Universe",
    banner_url: "https://i.postimg.cc/0r1rGQBY/marvel.webp",
    description:
      "This list includes all the titles produced by Marvel Studios, such as movies, TV shows, one-shots, and specials. It also includes films that are referenced in the Marvel Cinematic Universe (MCU).",
  },
];

const titles = [
  {
    universe_id: "marvel_cinematic_universe",
    id: "blade",
    title: "Blade",
    branch: "Blade",
    banner_url: "https://i.postimg.cc/MHz0PG56/blade.webp",
    release_date: "1998-08-21",
    duration: 120,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "x-men",
    title: "X-Men",
    branch: "X-Men/Wolverine",
    banner_url: "https://i.postimg.cc/7PQbQ6mK/x-men.webp",
    release_date: "2000-07-14",
    duration: 104,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "blade_2",
    title: "Blade II",
    branch: "Blade",
    banner_url: "https://i.postimg.cc/wTy3Kprg/blade-2.webp",
    release_date: "2002-03-22",
    duration: 117,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "spider-man",
    title: "Spider-Man",
    branch: "Spider-Man",
    banner_url: "https://i.postimg.cc/jjDt7wN1/spider-man.webp",
    release_date: "2002-06-07",
    duration: 121,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "daredevil",
    title: "Daredevil",
    branch: "Daredevil",
    banner_url: "https://i.postimg.cc/MGDp0Knb/daredevil.webp",
    release_date: "2003-02-14",
    duration: 133,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "x2",
    title: "X2",
    branch: "X-Men/Wolverine",
    banner_url: "https://i.postimg.cc/jSkZMxjG/x2.webp",
    release_date: "2003-05-02",
    duration: 133,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "hulk",
    title: "Hulk",
    branch: "Hulk",
    banner_url: "https://i.postimg.cc/gkC4mnwk/hulk.webp",
    release_date: "2003-06-17",
    duration: 138,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "the_punisher",
    title: "The Punisher",
    branch: "Punisher",
    banner_url: "https://i.postimg.cc/43PnyxLY/the-punisher.webp",
    release_date: "2004-04-16",
    duration: 140,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "spider-man_2",
    title: "Spider Man 2",
    branch: "Spider-Man",
    banner_url: "https://i.postimg.cc/5tVq7XVK/spider-man-2.webp",
    release_date: "2004-07-16",
    duration: 127,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "blade_trinity",
    title: "Blade: Trinity",
    branch: "Blade",
    banner_url: "https://i.postimg.cc/3WMK5B9Y/blade-trinity.webp",
    release_date: "2004-12-08",
    duration: 123,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "elektra",
    title: "Elektra",
    branch: "Daredevil",
    banner_url: "https://i.postimg.cc/C1q6f9Wg/elektra.webp",
    release_date: "2005-01-14",
    duration: 104,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "fantastic_four",
    title: "Fantastic Four",
    branch: "Fantastic Four",
    banner_url: "https://i.postimg.cc/KzBJYBMc/fantastic-four.webp",
    release_date: "2005-07-08",
    duration: 106,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "x-men_the_last_stand",
    title: "X-Men: The Last Stand",
    branch: "X-Men/Wolverine",
    banner_url: "https://i.postimg.cc/q7hdjb9m/x-men-the-last-stand.webp",
    release_date: "2006-05-25",
    duration: 104,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "ghost_rider",
    title: "Ghost Rider",
    branch: "Ghost Rider",
    banner_url: "https://i.postimg.cc/639CS5YB/ghost-rider.webp",
    release_date: "2007-02-16",
    duration: 114,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "spider-man_3",
    title: "Spider-Man 3",
    branch: "Spider-Man",
    banner_url: "https://i.postimg.cc/6pPk2VyC/spider-man-3.webp",
    release_date: "2007-05-04",
    duration: 139,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "fantastic_four_rise_of_the_silver_surfer",
    title: "Fantastic Four: Rise of the Silver Surfer",
    branch: "Fantastic Four",
    banner_url:
      "https://i.postimg.cc/MHzN2dFJ/fantastic-four-rise-of-the-silver-surfer.webp",
    release_date: "2007-06-15",
    duration: 92,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "iron_man",
    title: "Iron Man",
    branch: "Avengers/Iron Man",
    banner_url: "https://i.postimg.cc/nzFT3XJY/iron-man.webp",
    release_date: "2008-05-02",
    duration: 126,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "the_incredible_hulk",
    title: "The Incredible Hulk",
    branch: "Hulk",
    banner_url: "https://i.postimg.cc/FzmyT6n3/the-incredible-hulk.webp",
    release_date: "2008-06-13",
    duration: 112,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "punisher_war_zone",
    title: "Punisher: War Zone",
    branch: "Punisher",
    banner_url: "https://i.postimg.cc/wTMy9HJ3/punisher-war-zone.webp",
    release_date: "2008-12-05",
    duration: 107,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "x-men_origins_wolverine",
    title: "X-Men Origins: Wolverine",
    branch: "X-Men/Wolverine",
    banner_url: "https://i.postimg.cc/Hs6wtB08/x-men-origins-wolverine.webp",
    release_date: "2009-05-01",
    duration: 107,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "iron_man_2",
    title: "Iron Man 2",
    branch: "Avengers/Iron Man",
    banner_url: "https://i.postimg.cc/wTjJ3DKq/iron-man-2.webp",
    release_date: "2010-04-30",
    duration: 125,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "thor",
    title: "Thor",
    branch: "Avengers/Thor",
    banner_url: "https://i.postimg.cc/WbYZZtjM/thor.webp",
    release_date: "2011-05-06",
    duration: 114,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "x-men_first_class",
    title: "X-Men: First Class",
    branch: "X-Men",
    banner_url: "https://i.postimg.cc/Gms4sQXC/x-men-first-class.webp",
    release_date: "2011-05-25",
    duration: 132,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "captain_america_the_first_avenger",
    title: "Captain America: The First Avenger",
    branch: "Avengers/Captain America",
    banner_url:
      "https://i.postimg.cc/Z5TRprNV/captain-america-the-fisrt-avenger.webp",
    release_date: "2011-07-22",
    duration: 124,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "the_consultant",
    title: "The Consultant",
    branch: "Avengers/One-Shot/Agents of S.H.I.E.L.D.",
    banner_url: "https://i.postimg.cc/fLWW5jfk/the-consultant.webp",
    release_date: "2011-09-11",
    duration: 4,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "a_funny_thing_happened_on_the_way_to_thors_hammer",
    title: "A Funny Thing Happened on the Way to Thor's Hammer",
    branch: "Avengers/One-Shot/Agents of S.H.I.E.L.D.",
    banner_url:
      "https://i.postimg.cc/9MxmkRLb/a-funny-thing-happened-on-the-way-to-thors-hammer.webp",
    release_date: "2011-10-25",
    duration: 4,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "ghost_rider_spirit_of_vengeance",
    title: "Ghost Rider: Spirit of Vengeance",
    branch: "Ghost Rider",
    banner_url:
      "https://i.postimg.cc/1X29mxhN/ghost-rider-spirit-of-vengeance.webp",
    release_date: "2012-02-17",
    duration: 96,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "the_avengers",
    title: "The Avengers",
    branch: "Avengers/Iron Man/Captain America/Hulk/Thor",
    banner_url: "https://i.postimg.cc/0ydq3KQS/the-avengers.webp",
    release_date: "2012-05-04",
    duration: 143,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "the_amazing_spider_man",
    title: "The Amazing Spider-Man",
    branch: "Spider-Man",
    banner_url: "https://i.postimg.cc/T3RRTJB0/the-amazing-spider-man.webp",
    release_date: "2012-07-03",
    duration: 136,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "item_47",
    title: "Item 47",
    branch: "Avengers/One-Shot",
    banner_url: "https://i.postimg.cc/k4tCT1tJ/item-47.webp",
    release_date: "2012-09-25",
    duration: 12,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "iron_man_3",
    title: "Iron Man 3",
    branch: "Avengers/Iron Man",
    banner_url: "https://i.postimg.cc/WzLp3rjm/iron-man-3.webp",
    release_date: "2013-05-03",
    duration: 130,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "the_wolverine",
    title: "The Wolverine",
    branch: "X-Men/Wolverine",
    banner_url: "https://i.postimg.cc/qMcqNmNN/the-wolverine.webp",
    release_date: "2013-07-26",
    duration: 126,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "agent_carter",
    title: "Agent Carter",
    branch: "Agents of S.H.I.E.L.D./One-Shot",
    banner_url: "https://i.postimg.cc/50q1CPY6/agent-carter.webp",
    release_date: "2013-09-23",
    duration: 15,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "agents_of_shield_s1",
    title: "Agents of S.H.I.E.L.D. Season 1",
    branch: "Agents of S.H.I.E.L.D.",
    banner_url: "https://i.postimg.cc/tRnd5pFn/agents-of-shield-s1.webp",
    release_date: "2013-09-24",
    duration: 957,
    text: "white",
  },

  {
    universe_id: "marvel_cinematic_universe",
    id: "thor_the_dark_world",
    title: "Thor: The Dark World",
    branch: "Avengers/Thor",
    banner_url: "https://i.postimg.cc/VLGgDfGX/thor-the-dark-world.webp",
    release_date: "2013-11-08",
    duration: 112,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "all_hail_the_king",
    title: "All Hail The King",
    branch: "Avengers/Iron Man/One-Shot",
    banner_url: "https://i.postimg.cc/fTknzWK3/all-hail-the-king.webp",
    release_date: "2014-02-04",
    duration: 14,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "captain_america_the_winter_soldier",
    title: "Captain America: The Winter Soldier",
    branch: "Avengers/Captain America",
    banner_url:
      "https://i.postimg.cc/Hshb83CY/captain-america-the-winter-soldier.webp",
    release_date: "2014-04-04",
    duration: 136,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "the_amazing_spider_man_2",
    title: "The Amazing Spider-Man 2",
    branch: "Spider-Man",
    banner_url: "https://i.postimg.cc/x1q24d0Q/the-amazing-spider-man-2.webp",
    release_date: "2014-05-02",
    duration: 142,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "x-men-days-of-future-past",
    title: "X-Men: Days of Future Past",
    branch: "X-Men/Wolverine",
    banner_url: "https://i.postimg.cc/YqhDcLmd/x-men-days-of-future-past.webp",
    release_date: "2014-05-23",
    duration: 151,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "guardians_of_the_galaxy",
    title: "Guardians of the Galaxy",
    branch: "Avengers/Guardians of the Galaxy",
    banner_url: "https://i.postimg.cc/DzgP47XW/guardians-of-the-galaxy.webp",
    release_date: "2014-08-01",
    duration: 122,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "agents_of_shield_s2",
    title: "Agents of S.H.I.E.L.D. Season 2",
    branch: "Agents of S.H.I.E.L.D.",
    banner_url: "https://i.postimg.cc/tC03vwzS/agents-of-shield-s2.webp",
    release_date: "2014-09-23",
    duration: 957,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "agent_carter_s1",
    title: "Agent Carter season 1",
    branch: "Agents of S.H.I.E.L.D.",
    banner_url: "https://i.postimg.cc/ht85MWmn/agent-carter-s1.webp",
    release_date: "2015-01-06",
    duration: 340,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "daredevil_s1",
    title: "Daredevil season 1",
    branch: "Defenders/Daredevil",
    banner_url: "https://i.postimg.cc/dQxPTY2S/daredevil-s1.webp",
    release_date: "2015-04-10",
    duration: 721,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "avengers_age_of_ultron",
    title: "Avengers: Age of Ultron",
    branch: "Avengers/Iron Man/Captain America/Hulk/Thor",
    banner_url: "https://i.postimg.cc/mDkpbP5Z/avengers-age-of-altron.webp",
    release_date: "2015-05-01",
    duration: 141,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "ant_man",
    title: "Ant-Man",
    branch: "Avengers/Ant Man",
    banner_url: "https://i.postimg.cc/Jny5Nsgd/ant-man.webp",
    release_date: "2015-06-15",
    duration: 118,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "agents_of_shield_s3",
    title: "Agents of S.H.I.E.L.D. season 3",
    branch: "Agents of S.H.I.E.L.D.",
    banner_url: "https://i.postimg.cc/76fhqPq3/agents-of-shield-s3.webp",
    release_date: "2015-09-29",
    duration: 957,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "jessica_jones_s1",
    title: "Jessica Jones season 1",
    branch: "Defenders/Jessica Jones",
    banner_url: "https://i.postimg.cc/6QPb1zq9/jessica-jones-s1.webp",
    release_date: "2015-11-20",
    duration: 656,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "agent_carter_s2",
    title: "Agent Carter season 2",
    branch: "Agents of S.H.I.E.L.D.",
    banner_url: "https://i.postimg.cc/m24XqPLF/agent-carter-s2.webp",
    release_date: "2016-01-19",
    duration: 425,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "daredevil_s2",
    title: "Daredevil season 2",
    branch: "Defenders/Daredevil/Punisher",
    banner_url: "https://i.postimg.cc/vmpF6GWL/daredevil-s2.webp",
    release_date: "2016-03-18",
    duration: 721,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "captain_america_civil_war",
    title: "Captain America: Civil War",
    branch: "Avengers/Iron Man/Captain America/Spider-Man/Black Panther",
    banner_url: "https://i.postimg.cc/8kx4QjTb/captain-america-civil-war.webp",
    release_date: "2016-05-06",
    duration: 148,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "agents_of_shield_s4",
    title: "Agents of SHIELD season 4",
    branch: "Agents of S.H.I.E.L.D.",
    banner_url: "https://i.postimg.cc/VNHMqV6F/agents-of-shield-s4.webp",
    release_date: "2016-09-20",
    duration: 957,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "luke_cage_s1",
    title: "Luke Cage season 1",
    branch: "Defenders/Luke Cage",
    banner_url: "https://i.postimg.cc/7YDC2k9k/luke-cage-s1.webp",
    release_date: "2016-09-30",
    duration: 650,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "doctor_strange",
    title: "Doctor Strange",
    branch: "Avengers/Doctor Strange",
    banner_url: "https://i.postimg.cc/dVVL5jgN/doctor-strange.webp",
    release_date: "2016-11-04",
    duration: 115,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "iron_fist_s1",
    title: "Iron Fist season 1",
    branch: "Defenders/Iron Fist",
    banner_url: "https://i.postimg.cc/C5Jw8WMh/iron-fist-s1.webp",
    release_date: "2017-03-17",
    duration: 715,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "guardians_of_the_galaxy_vol_2",
    title: "Guardians of the Galaxy Vol 2",
    branch: "Avengers/Guardians of the Galaxy",
    banner_url:
      "https://i.postimg.cc/wvgKk0G7/guardians-of-the-galaxy-vol-2.webp",
    release_date: "2017-05-05",
    duration: 137,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "spider-man_homecoming",
    title: "Spider-Man: Homecoming",
    branch: "Avengers/Iron Man/Spider-Man",
    banner_url: "https://i.postimg.cc/YSBTpdkb/spider-man-homecoming.webp",
    release_date: "2017-07-07",
    duration: 133,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "fantastic_four_2015",
    title: "Fantastic Four",
    branch: "Fantastic Four",
    banner_url: "https://i.postimg.cc/d0WgDRwz/fantastic-four-2015.webp",
    release_date: "2015-08-06",
    duration: 100,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "deadpool",
    title: "Deadpool",
    branch: "X-Men/Deadpool",
    banner_url: "https://i.postimg.cc/XJmhkVZL/deadpool.webp",
    release_date: "2016-02-12",
    duration: 108,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "x-men_apocalypse",
    title: "X-Men: Apocalypse",
    branch: "X-Men/Wolverine",
    banner_url: "https://i.postimg.cc/SNBgTTxS/x-men-apocalypse.webp",
    release_date: "2016-05-27",
    duration: 144,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "team_thor_part_1",
    title: "Team Thor",
    branch: "Thor/One-Shot",
    banner_url: "https://i.postimg.cc/FsFftcD2/team-thor-part-1.webp",
    release_date: "2016-08-28",
    duration: 3,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "team_thor_part_2",
    title: "Team Thor: Part 2",
    branch: "Thor/One-Shot",
    banner_url: "https://i.postimg.cc/cHmsTky6/team-thor-part-2.webp",
    release_date: "2017-02-14",
    duration: 5,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "logan",
    title: "Logan",
    branch: "X-Men/Wolverine",
    banner_url: "https://i.postimg.cc/bv08NVvL/logan.webp",
    release_date: "2017-03-03",
    duration: 137,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "deadpool_no_good_deed",
    title: "Deadpool: No Good Deed",
    branch: "Deadpool/One-Shot",
    banner_url: "https://i.postimg.cc/6QtgzW9L/deadpool-no-good-deed.webp",
    release_date: "2017-03-03",
    duration: 4,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "the_defenders",
    title: "The Defenders",
    branch: "Defenders/Daredevil/Jessica Jones/Luke Cage/Iron Fist",
    banner_url: "https://i.postimg.cc/HWzw7TK1/the-defenders.webp",
    release_date: "2017-08-18",
    duration: 400,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "inhumans",
    title: "Inhumans",
    branch: "Inhumans",
    banner_url: "https://i.postimg.cc/9QwRQ2Z2/inhumans.webp",
    release_date: "2017-09-29",
    duration: 340,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "thor_ragnarok",
    title: "Thor: Ragnarok",
    branch: "Avengers/Thor/Hulk",
    banner_url: "https://i.postimg.cc/pdq3ywDW/thor-ragnarok.webp",
    release_date: "2017-11-03",
    duration: 130,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "the_punisher_s1",
    title: "The Punisher season 1",
    branch: "Punisher",
    banner_url: "https://i.postimg.cc/sxXWsh3f/the-punisher-s1.webp",
    release_date: "2017-11-17",
    duration: 702,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "runaways_s1",
    title: "Runaways season 1",
    branch: "Runaways",
    banner_url: "https://i.postimg.cc/vTsnkZmX/runaways-s1.webp",
    release_date: "2017-11-21",
    duration: 475,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "agents_of_shield_s5",
    title: "Agents of S.H.I.E.L.D. season 5",
    branch: "Agents of S.H.I.E.L.D.",
    banner_url: "https://i.postimg.cc/kXxC7XgK/agents-of-shield-s5.webp",
    release_date: "2017-12-01",
    duration: 957,
    text: "white",
  },
  {
    universe_id: "marvel_cinematic_universe",
    id: "black_panther",
    title: "Black Panther",
    branch: "Avengers/Black Panther",
    banner_url: "https://i.postimg.cc/mZ9kF4r2/black-panther.webp",
    release_date: "2018-02-16",
    duration: 134,
    text: "white",
  },
  //   {
  //     universe_id: "marvel_cinematic_universe",
  //     id: "",
  //     title: "",
  //     branch: "",
  //     banner_url: "",
  //     release_date: "",
  //     duration: 0,
  //     text: "white",
  //   }, //   {
  //     universe_id: "marvel_cinematic_universe",
  //     id: "",
  //     title: "",
  //     branch: "",
  //     banner_url: "",
  //     release_date: "",
  //     duration: 0,
  //     text: "white",
  //   },
  //   {
  //     universe_id: "marvel_cinematic_universe",
  //     id: "",
  //     title: "",
  //     branch: "",
  //     banner_url: "",
  //     release_date: "",
  //     duration: 0,
  //     text: "white",
  //   },
  //   {
  //     universe_id: "marvel_cinematic_universe",
  //     id: "",
  //     title: "",
  //     branch: "",
  //     banner_url: "",
  //     release_date: "",
  //     duration: 0,
  //     text: "white",
  //   },
  //   {
  //     universe_id: "marvel_cinematic_universe",
  //     id: "",
  //     title: "",
  //     branch: "",
  //     banner_url: "",
  //     release_date: "",
  //     duration: 0,
  //     text: "white",
  //   },
  //   {
  //     universe_id: "marvel_cinematic_universe",
  //     id: "",
  //     title: "",
  //     branch: "",
  //     banner_url: "",
  //     release_date: "",
  //     duration: 0,
  //     text: "white",
  //   },
];

module.exports = { universes, titles };
