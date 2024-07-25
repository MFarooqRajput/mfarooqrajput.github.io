/* ===============
   Responsive NavBar 
   =============== */

function responsiveFunction() {
  var x = document.getElementById('responsive-topnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

/* ===============
   ProjactsData 
   =============== */

var data = [
  {
    name: 'WASL FREEHOLD',
    platform: 'iOS',
    link: {
      apple: 'https://apps.apple.com/ae/app/wasl-freehold/id1503019643',
      google: '',
      website: '',
    },
    role: 'iOS Developer',
    techstack: '',
    images: [
      'assets/portfolio/screenshot/WASL FREEHOLD/230x0w.png',
      'assets/portfolio/screenshot/WASL FREEHOLD/230x0w (1).png',
      'assets/portfolio/screenshot/WASL FREEHOLD/230x0w (2).png',
      'assets/portfolio/screenshot/WASL FREEHOLD/230x0w (3).png',
      'assets/portfolio/screenshot/WASL FREEHOLD/230x0w (4).png',
      'assets/portfolio/screenshot/WASL FREEHOLD/230x0w (5).png',
      'assets/portfolio/screenshot/WASL FREEHOLD/230x0w (6).png',
    ],
  },
  {
    name: 'WASL Properties Leasing',
    platform: 'iOS',
    link: {
      apple:
        'https://apps.apple.com/ae/app/wasl-properties-leasing/id1503130723',
      google: '',
      website: '',
    },
    role: 'iOS Developer',
    techstack: '',
    images: [
      'assets/portfolio/screenshot/WASL Properties Leasing/230x0w.png',
      'assets/portfolio/screenshot/WASL Properties Leasing/230x0w (1).png',
      'assets/portfolio/screenshot/WASL Properties Leasing/230x0w (2).png',
      'assets/portfolio/screenshot/WASL Properties Leasing/230x0w (3).png',
      'assets/portfolio/screenshot/WASL Properties Leasing/230x0w (4).png',
      'assets/portfolio/screenshot/WASL Properties Leasing/230x0w (5).png',
      'assets/portfolio/screenshot/WASL Properties Leasing/230x0w (6).png',
      'assets/portfolio/screenshot/WASL Properties Leasing/230x0w (7).png',
    ],
  },
  {
    name: 'WASL Gate',
    platform: 'iOS',
    link: {
      apple: 'https://apps.apple.com/ae/app/wasl-gate/id1487906129',
      google: '',
      website: '',
    },
    role: 'iOS Developer',
    techstack: '',
    images: [],
  },
  {
    name: 'DREC Land',
    platform: 'iOS',
    link: {
      apple: 'https://apps.apple.com/ae/app/drec-lands/id834298820',
      google: '',
      website: '',
    },
    role: '',
    techstack: '',
    images: [
      'assets/portfolio/screenshot/DREC Land/230x0w.png',
      'assets/portfolio/screenshot/DREC Land/230x0w (1).png',
      'assets/portfolio/screenshot/DREC Land/230x0w (2).png',
      'assets/portfolio/screenshot/DREC Land/230x0w (3).png',
      'assets/portfolio/screenshot/DREC Land/230x0w (4).png',
    ],
  },
  {
    name: 'WASL Properties',
    platform: 'iOS',
    link: {
      apple:
        'https://apps.apple.com/ae/app/wasl-properties-%D9%88%D8%B5%D9%84-%D9%84%D9%84%D8%B9%D9%82%D8%A7%D8%B1%D8%A7%D8%AA/id693990081',
      google: '',
      website: '',
    },
    role: 'iOS Developer',
    techstack: '',
    images: [
      'assets/portfolio/screenshot/WASL Properties/230x0w.png',
      'assets/portfolio/screenshot/WASL Properties/230x0w (1).png',
      'assets/portfolio/screenshot/WASL Properties/230x0w (2).png',
      'assets/portfolio/screenshot/WASL Properties/230x0w (3).png',
      'assets/portfolio/screenshot/WASL Properties/230x0w (4).png',
      'assets/portfolio/screenshot/WASL Properties/230x0w (5).png',
    ],
  },
  {
    name: 'Dubai Golf',
    platform: 'iOS',
    link: {
      apple: 'https://apps.apple.com/ae/app/viya/id1496968726',
      google: '',
      website: '',
    },
    role: 'iOS Developer',
    techstack: '',
    images: [
      'assets/portfolio/screenshot/Dubai Golf/230x0w.png',
      'assets/portfolio/screenshot/Dubai Golf/230x0w (1).png',
      'assets/portfolio/screenshot/Dubai Golf/230x0w (2).png',
      'assets/portfolio/screenshot/Dubai Golf/230x0w (3).png',
      'assets/portfolio/screenshot/Dubai Golf/230x0w (4).png',
    ],
  },
  {
    name: 'TinyCal',
    platform: 'macOS',
    link: {
      apple: '',
      google: '',
      website: 'http://plumamazing.com/mac/tinycal/',
    },
    role: 'macOS Developer (Maintenance, Feature addition)',
    techstack: '',
    images: [],
  },
  {
    name: 'TinyAlarm',
    platform: 'macOS',
    link: {
      apple: '',
      google: '',
      website: 'http://plumamazing.com/mac/tinyalarm',
    },
    role: 'macOS Developer (Maintenance, Feature addition)',
    techstack: '',
    images: [],
  },
  {
    name: 'iClock',
    platform: 'macOS',
    link: {
      apple: '',
      google: '',
      website: 'http://plumamazing.com/mac/iclock',
    },
    role: 'macOS Developer (Maintenance, Feature addition)',
    techstack: '',
    images: [],
  },
  {
    name: 'BURGER KING',
    platform: 'Android',
    link: {
      apple: '',
      google:
        'https://play.google.com/store/apps/details?id=com.citrusbits.burgerking',
      website: '',
    },
    role: 'Android Developer',
    techstack: '',
    images: [],
  },
  {
    name: 'Alpha',
    platform: 'iOS watchOS',
    link: { apple: '', google: '', website: '' },
    role: 'iOS & watchOS Developer',
    techstack: '',
    images: [],
  },
  {
    name: 'Beeconz',
    platform: 'iOS',
    link: {
      apple:
        'https://apps.apple.com/us/app/beeconz-set-share-find/id1363187758?ls=1',
      google: '',
      website: '',
    },
    role: 'iOS Developer & Backend Developer',
    techstack: '',
    images: [
      'assets/portfolio/screenshot/Beeconz/230x0w.png',
      'assets/portfolio/screenshot/Beeconz/230x0w (1).png',
      'assets/portfolio/screenshot/Beeconz/230x0w (2).png',
      'assets/portfolio/screenshot/Beeconz/230x0w (3).png',
      'assets/portfolio/screenshot/Beeconz/230x0w (4).png',
      'assets/portfolio/screenshot/Beeconz/230x0w (5).png',
      'assets/portfolio/screenshot/Beeconz/230x0w (6).png',
      'assets/portfolio/screenshot/Beeconz/230x0w (7).png',
    ],
  },
  {
    name: 'ZEN Classic',
    platform: 'iOS Android Admin Website',
    link: {
      apple: '',
      google: '',
      website: 'http://zakts.com/portfolio/zen-classics/',
    },
    role: 'iOS Developer & Project Lead',
    techstack: '',
    images: [],
  },
  {
    name: 'FavoriteRun',
    platform: 'iOS Android Admin',
    link: { apple: '', google: '', website: '' },
    role: 'iOS Developer & Project Lead',
    techstack: '',
    images: [],
  },
  {
    name: 'Myduub',
    platform: 'iOS Admin',
    link: {
      apple: 'https://apps.apple.com/us/app/myduub/id1345317101',
      google: '',
      website: '',
    },
    role: 'iOS Developer & Project Lead',
    techstack: '',
    images: [
      'assets/portfolio/screenshot/Myduub/230x0w.png',
      'assets/portfolio/screenshot/Myduub/230x0w (1).png',
      'assets/portfolio/screenshot/Myduub/230x0w (2).png',
      'assets/portfolio/screenshot/Myduub/230x0w (3).png',
      'assets/portfolio/screenshot/Myduub/230x0w (4).png',
    ],
  },
  {
    name: 'InstaRyde',
    platform: 'iOS Android Admin Website',
    link: {
      apple: 'https://itunes.apple.com/us/app/instaryde/id948357626?ls=1&mt=8',
      google:
        'https://play.google.com/store/apps/details?id=com.instaryde.android&hl=en',
      website: '',
    },
    role: 'iOS Developer, Android Developer (Feature addition ,support and Lead Android resource)',
    techstack: '',
    images: [
      'assets/portfolio/screenshot/InstaRyde/screen696x696.jpeg',
      'assets/portfolio/screenshot/InstaRyde/screen696x696-2.jpeg',
      'assets/portfolio/screenshot/InstaRyde/screen696x696-3.jpeg',
      'assets/portfolio/screenshot/InstaRyde/screen696x696-4.jpeg',
      'assets/portfolio/screenshot/InstaRyde/screen696x696-5.jpeg',
    ],
  },
  {
    name: 'QuikRep',
    platform: 'iOS',
    link: {
      apple: '',
      google: '',
      website: 'https://citrusbits.com/portfolio/quiksilver/',
    },
    role: 'iOS Developer',
    techstack: '',
    images: [
      'assets/portfolio/screenshot/QuikRep/quiksilver-mobile-app1.png',
      'assets/portfolio/screenshot/QuikRep/quiksilver-enterprise-mobile-app-1.png',
      'assets/portfolio/screenshot/QuikRep/quiksilver-enterprise-mobile-app-2.png',
      'assets/portfolio/screenshot/QuikRep/quiksilver-enterprise-mobile-app-3.png',
      'assets/portfolio/screenshot/QuikRep/quiksilver-enterprise-mobile-app-4.png',
      'assets/portfolio/screenshot/QuikRep/quiksilver-enterprise-mobile-app-5.png',
      'assets/portfolio/screenshot/QuikRep/quiksilver-enterprise-mobile-app-6.png',
      'assets/portfolio/screenshot/QuikRep/quiksilver-enterprise-mobile-app-7.png',
    ],
  },
  {
    name: 'VUNote',
    platform: 'iOS',
    link: {
      apple: 'https://itunes.apple.com/us/app/vunote/id1000817137?mt=8',
      google: '',
      website: '',
    },
    role: 'iOS Developer',
    techstack: '',
    images: [
      'assets/portfolio/screenshot/VUNote/screen322x572.jpeg',
      'assets/portfolio/screenshot/VUNote/screen322x572 (1).jpeg',
      'assets/portfolio/screenshot/VUNote/screen322x572 (2).jpeg',
      'assets/portfolio/screenshot/VUNote/screen322x572 (3).jpeg',
      'assets/portfolio/screenshot/VUNote/screen322x572 (4).jpeg',
    ],
  },
  {
    name: 'TrueWorldOps',
    platform: 'iOS',
    link: {
      apple: 'https://itunes.apple.com/us/app/true-world-ops/id1033515612?mt=8',
      google: '',
      website: '',
    },
    role: 'iOS Developer',
    techstack: '',
    images: [
      'assets/portfolio/screenshot/TrueWorldOps/screen322x572.jpeg',
      'assets/portfolio/screenshot/TrueWorldOps/screen322x572 (1).jpeg',
      'assets/portfolio/screenshot/TrueWorldOps/screen322x572 (2).jpeg',
    ],
  },
  {
    name: 'WillyTrain',
    platform: 'iOS',
    link: { apple: '', google: '', website: '' },
    role: 'iOS Developer',
    techstack: '',
    images: [
      'assets/portfolio/screenshot/WillyTrain/iOS Simulator Screen Shot 16-Feb-2015 4.02.44 pm.png',
      'assets/portfolio/screenshot/WillyTrain/iOS Simulator Screen Shot 16-Feb-2015 4.02.57 pm.png',
      'assets/portfolio/screenshot/WillyTrain/iOS Simulator Screen Shot 16-Feb-2015 4.03.39 pm.png',
      'assets/portfolio/screenshot/WillyTrain/iOS Simulator Screen Shot 16-Feb-2015 4.04.08 pm.png',
      'assets/portfolio/screenshot/WillyTrain/iOS Simulator Screen Shot 16-Feb-2015 4.04.51 pm.png',
      'assets/portfolio/screenshot/WillyTrain/iOS Simulator Screen Shot 16-Feb-2015 4.04.56 pm.png',
    ],
  },
  {
    name: 'LA Fashion District',
    platform: 'iOS',
    link: {
      apple:
        'https://itunes.apple.com/us/app/la-fashion-district/id601266753?mt=8',
      google: '',
      website: '',
    },
    role: 'iOS Developer',
    techstack: '',
    images: [
      'assets/portfolio/screenshot/LA Fashion District/screen320x480.jpeg',
      'assets/portfolio/screenshot/LA Fashion District/screen320x480 (1).jpeg',
      'assets/portfolio/screenshot/LA Fashion District/screen320x480 (2).jpeg',
      'assets/portfolio/screenshot/LA Fashion District/screen320x480 (3).jpeg',
      'assets/portfolio/screenshot/LA Fashion District/screen320x480 (4).jpeg',
    ],
  },
  {
    name: 'Blink 13 QR',
    platform: 'iOS',
    link: {
      apple: 'https://itunes.apple.com/us/app/blink-13-qr/id662019041?mt=8',
      google: '',
      website: '',
    },
    role: 'iOS Developer',
    techstack: '',
    images: ['assets/portfolio/screenshot/Blink 13 QR/screen568x568.jpeg'],
  },
  {
    name: 'Christmas Tree Plus Cards Sender Pro',
    platform: 'iOS',
    link: {
      apple:
        'http://itunes.apple.com/pk/app/christmas-tree-plus-cards/id491448478?mt=8',
      google: '',
      website: '',
    },
    role: 'iOS Developer',
    techstack: '',
    images: [
      'assets/portfolio/screenshot/Christmas Tree Plus Cards Sender Pro/screen320x480.jpeg',
    ],
  },
  {
    name: 'Turkce Karaoke',
    platform: 'iOS',
    link: {
      apple: 'http://itunes.apple.com/pk/app/turkce-karaoke/id498913632?mt=8',
      google: '',
      website: '',
    },
    role: 'iOS Developer & Backend Developer',
    techstack: '',
    images: [
      'assets/portfolio/screenshot/Turkce Karaoke/screen320x480.jpeg',
      'assets/portfolio/screenshot/Turkce Karaoke/screen320x480 (1).jpeg',
      'assets/portfolio/screenshot/Turkce Karaoke/screen320x480 (2).jpeg',
      'assets/portfolio/screenshot/Turkce Karaoke/screen320x480 (3).jpeg',
      'assets/portfolio/screenshot/Turkce Karaoke/screen320x480 (4).jpeg',
    ],
  },
  {
    name: 'Angry Girl',
    platform: 'iOS',
    link: {
      apple: 'http://itunes.apple.com/app/angry-girl/id483329743?mt=8',
      google: '',
      website: '',
    },
    role: 'iOS Developer',
    techstack: '',
    images: [
      'assets/portfolio/screenshot/Angry Girl/Screen Shot 2015-12-17 at 6.48.00 PM.png',
      'assets/portfolio/screenshot/Angry Girl/Screen Shot 2015-12-17 at 6.48.16 PM.png',
      'assets/portfolio/screenshot/Angry Girl/Screen Shot 2015-12-17 at 6.48.29 PM.png',
    ],
  },
  {
    name: 'Broker Buddy: The Commercial Real Estate Tool',
    platform: 'iOS',
    link: {
      apple:
        'https://itunes.apple.com/us/app/broker-buddy-commercial-real/id670698254?ls=1&mt=8',
      google: '',
      website: '',
    },
    role: 'iOS Developer',
    techstack: '',
    images: [
      'assets/portfolio/screenshot/Broker Buddy/Screen Shot 2015-12-17 at 6.45.00 PM.png',
      'assets/portfolio/screenshot/Broker Buddy/Screen Shot 2015-12-17 at 6.45.13 PM.png',
    ],
  },
  {
    name: '4 Letter Word Game',
    platform: 'iOS',
    link: {
      apple:
        'https://itunes.apple.com/us/app/4-letter-word-game/id610305848?mt=8',
      google: '',
      website: '',
    },
    role: 'iOS Developer',
    techstack: '',
    images: [
      'assets/portfolio/screenshot/4 Letter Word Game/screen568x568.jpeg',
      'assets/portfolio/screenshot/4 Letter Word Game/screen568x568 (1).jpeg',
      'assets/portfolio/screenshot/4 Letter Word Game/screen568x568 (2).jpeg',
      'assets/portfolio/screenshot/4 Letter Word Game/screen568x568 (3).jpeg',
    ],
  },
  {
    name: 'RhymesWithFriends',
    platform: 'iOS',
    link: {
      apple:
        'https://itunes.apple.com/us/app/rhymes-with-friends/id695443015?mt=8',
      google: '',
      website: '',
    },
    role: 'iOS Developer',
    techstack: '',
    images: [
      'assets/portfolio/screenshot/RhymesWithFriends/screen568x568.jpeg',
      'assets/portfolio/screenshot/RhymesWithFriends/screen568x568 (1).jpeg',
      'assets/portfolio/screenshot/RhymesWithFriends/screen568x568 (2).jpeg',
      'assets/portfolio/screenshot/RhymesWithFriends/screen568x568 (3).jpeg',
      'assets/portfolio/screenshot/RhymesWithFriends/screen568x568 (4).jpeg',
    ],
  },
  {
    name: 'AppySpot',
    platform: 'iOS',
    link: { apple: '', google: '', website: 'http://appyspot.com' },
    role: 'iOS Developer & Team Lead',
    techstack: '',
    images: [
      'assets/portfolio/screenshot/AppySpot/Appyspot111.png',
      'assets/portfolio/screenshot/AppySpot/2.png',
      'assets/portfolio/screenshot/AppySpot/ipad-new-copy1.png',
    ],
  },
  {
    name: 'iCasino',
    platform: 'iOS',
    link: { apple: '', google: '', website: '' },
    role: 'iOS Developer',
    techstack: '',
    images: [
      'assets/portfolio/screenshot/iCasino/Screen Shot 2015-12-17 at 7.32.04 PM.png',
      'assets/portfolio/screenshot/iCasino/Screen Shot 2015-12-17 at 7.32.18 PM.png',
      'assets/portfolio/screenshot/iCasino/Screen Shot 2015-12-17 at 7.32.35 PM.png',
      'assets/portfolio/screenshot/iCasino/Screen Shot 2015-12-17 at 7.32.44 PM.png',
      'assets/portfolio/screenshot/iCasino/Screen Shot 2015-12-17 at 7.32.58 PM.png',
      'assets/portfolio/screenshot/iCasino/Screen Shot 2015-12-17 at 7.33.16 PM.png',
    ],
  },
  {
    name: 'MajorPair',
    platform: 'iOS',
    link: { apple: '', google: '', website: '' },
    role: 'iOS Developer',
    techstack: '',
    images: [
      'assets/portfolio/screenshot/MajorPair/Screen Shot 2015-12-17 at 7.21.25 PM.png',
    ],
  },
  {
    name: 'DecisionMaker',
    platform: 'iOS',
    link: { apple: '', google: '', website: '' },
    role: 'iOS Developer',
    techstack: '',
    images: [
      'assets/portfolio/screenshot/DecisionMaker/screen568x568.jpeg',
      'assets/portfolio/screenshot/DecisionMaker/screen568x568 (1).jpeg',
      'assets/portfolio/screenshot/DecisionMaker/screen568x568 (2).jpeg',
      'assets/portfolio/screenshot/DecisionMaker/screen568x568 (3).jpeg',
    ],
  },
  {
    name: 'LiveEvent',
    platform: 'iOS',
    link: { apple: '', google: '', website: '' },
    role: 'iOS Developer & Backend Developer',
    techstack: '',
    images: [
      'assets/portfolio/screenshot/LiveEvent/Screen Shot 2015-12-17 at 8.52.28 PM.png',
    ],
  },
  {
    name: 'FriendsBasement',
    platform: 'iOS',
    link: { apple: '', google: '', website: '' },
    role: 'iOS Developer',
    techstack: '',
    images: [
      'assets/portfolio/screenshot/FriendsBasement/Screen Shot 2015-12-17 at 7.37.16 PM.png',
    ],
  },
  {
    name: 'SayWhat',
    platform: 'iOS',
    link: { apple: '', google: '', website: '' },
    role: 'iOS Developer & Backend Developer',
    techstack: '',
    images: [
      'assets/portfolio/screenshot/SayWhat/1.png',
      'assets/portfolio/screenshot/SayWhat/saywhat-mobile-app.png',
    ],
  },
  {
    name: 'Peacekeeper Emergency Response',
    platform: 'iOS Android',
    link: {
      apple:
        'https://itunes.apple.com/us/app/peacekeeper-emergency-response/id867425789?mt=8',
      google: '',
      website: '',
    },
    role: 'iOS Developer',
    techstack: '',
    images: [
      'assets/portfolio/screenshot/Peacekeeper Emergency Response/screen1136x1136.jpeg',
      'assets/portfolio/screenshot/Peacekeeper Emergency Response/screen1136x1136 (1).jpeg',
      'assets/portfolio/screenshot/Peacekeeper Emergency Response/screen1136x1136 (2).jpeg',
      'assets/portfolio/screenshot/Peacekeeper Emergency Response/screen1136x1136 (3).jpeg',
    ],
  },
  {
    name: 'MyCanna',
    platform: 'iOS',
    link: { apple: '', google: '', website: '' },
    role: 'iOS Developer',
    techstack: '',
    images: [],
  },
  {
    name: 'UniqVue',
    platform: 'iOS',
    link: { apple: '', google: '', website: '' },
    role: 'iOS Developer',
    techstack: '',
    images: [],
  },
];

/* ===============
   NavBar DropdownItems
   =============== */

// Function to create dropdown items
function createDropdownItems(projects) {
  const dropdown = document.getElementById('project-dropdown');
  projects.forEach((project) => {
    const a = document.createElement('a');
    a.href = `portfolio.html#${encodeURIComponent(project.name)}`;
    a.textContent = project.name;
    dropdown.appendChild(a);
  });
}

// Initialize dropdown
document.addEventListener('DOMContentLoaded', () => {
  //createDropdownItems(data);
});

/* ===============
   Filter
   =============== */

function fillFilter() {
  const fillFilter = document.getElementById('filter');
  const filters = ['show all', 'iOS', 'Android', 'macOS', 'Admin', 'Website'];

  filters.forEach((filter, index) => {
    const button = document.createElement('button');
    button.onclick = () => filterSelection(filter);
    button.textContent = index === 0 ? 'Show all' : filter;
    button.className = index === 0 ? 'btn filter-active' : 'btn';
    fillFilter.appendChild(button);
  });
}

function filterSelection(filter) {
  filterSideLinks(filter);
  filterProjects(filter);
  selectedFilter();
}

function filterSideLinks(filter) {
  const sideLinks = document.querySelectorAll('#side-links li');
  sideLinks.forEach((sideLink) => {
    if (filter === 'show all' || sideLink.classList.contains(filter)) {
      sideLink.classList.remove('hidden');
    } else {
      sideLink.classList.add('hidden');
    }
  });
}

function filterProjects(filter) {
  const projects = document.getElementsByClassName('inner-container');
  const filterClass = filter === 'show all' ? '' : filter;
  Array.from(projects).forEach((project) => {
    project.classList.add('hidden');
    if (project.className.includes(filterClass)) {
      project.classList.remove('hidden');
    }
  });
}

function selectedFilter() {
  const filter = document.getElementById('filter');
  const buttons = filter.getElementsByClassName('btn');
  Array.from(buttons).forEach((button) => {
    button.addEventListener('click', function () {
      const current = document.getElementsByClassName('filter-active');
      if (current.length > 0) {
        current[0].classList.remove('filter-active');
      }
      this.classList.add('filter-active');
    });
  });
}

/* ===============
   SideLinks
   =============== */

function fillSideLinks() {
  const fillSideLinks = document.getElementById('side-links');
  const ul = document.createElement('ul');
  data.forEach((item) => {
    const li = document.createElement('li');
    li.className = item.platform;
    li.innerHTML = `<a href="#${item.name}">${item.name}</a>`;
    ul.appendChild(li);
  });
  fillSideLinks.appendChild(ul);
}

/* ===============
   Projects
   =============== */

function fillProjects() {
  const fillProjects = document.getElementById('projects');
  data.forEach((item) => {
    const div = document.createElement('div');
    div.className = `inner-container ${item.platform}`;
    div.id = item.name;

    const spin =
      '<a href="" target="_blank"><i class="fa-solid fa-spinner fa-pulse" style="color: blue"></i></a>';
    const apple = `<a href="${item.link.apple}" target="_blank"><i class="fa-brands fa-app-store" style="color: blue"></i></a>`;
    const google = `<a href="${item.link.google}" target="_blank"><i class="fa-brands fa-google-play" style="color: green"></i></a>`;
    const website = `<a href="${item.link.website}" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square" style="color: blue"></i></a>`;

    const links = [];
    if (item.link.apple) links.push(apple);
    if (item.link.google) links.push(google);
    if (item.link.website) links.push(website);

    const platform = links.length ? links.join('&emsp;') : spin;

    const images = item.images.length
      ? item.images
      : Array(5).fill('https://via.placeholder.com/200x300');
    const imageElements = images
      .map(
        (src) => `<div class="app-card"><img src="${src}" alt="App" /></div>`
      )
      .join('');

    div.innerHTML = `
      <h3>${item.name}</h3><hr />
      <p><b>Platform: </b>${item.platform}</p>
      <p><b>Link: </b>${platform}</p>
      <p><b>Role: </b>${item.role}</p>
      <p><b>TechStack: </b>${item.techstack}</p><hr />
      <div class="showcase">${imageElements}</div>
    `;

    fillProjects.appendChild(div);
  });
}
