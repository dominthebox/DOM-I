const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// Header Navigation Links

const links = document.querySelectorAll('nav a');
links[0].textContent = siteContent["nav"]["nav-item-1"];
links[1].textContent = siteContent["nav"]["nav-item-2"];
links[2].textContent = siteContent["nav"]["nav-item-3"];
links[3].textContent = siteContent["nav"]["nav-item-4"];
links[4].textContent = siteContent["nav"]["nav-item-5"];
links[5].textContent = siteContent["nav"]["nav-item-6"];

// Top Section Content

const bigTitle = document.querySelector('h1');
bigTitle.textContent = siteContent["cta"]["h1"];

const circleImg = document.getElementById("cta-img");
circleImg.setAttribute('src', siteContent["cta"]["img-src"]);

const button = document.querySelector('button');
button.textContent = siteContent["cta"]["button"];

// Main Section Content

// const mainContent = document.querySelector(".main-content");
// const topContent = mainContent.querySelector(".top-content");
// const topContentDiv = topContent.querySelector("div");

// topContentDiv[0].querySelector("h4").textContent = siteContent["main-content"]["features-h4"];
// topContentDiv[0].querySelector("p").textContent = siteContent["main-content"]["features-content"];

// topContentDiv[1].querySelector("h4").textContent = siteContent["main-content"]["about-h4"];
// topContentDiv[1].querySelector("p").textContent = siteContent["main-content"]["about-content"];

const wideImg = document.getElementById("middle-img");
wideImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// const bottomContent = mainContent.querySelector(".bottom-content");
// const bottomContentDiv = bottomContent.querySelector("div");

// bottomContentDiv[0].querySelector("h4").textContent = siteContent["main-content"]["services-h4"];
// bottomContentDiv[0].querySelector("p").textContent = siteContent["main-content"]["services-h4"];

// bottomContentDiv[1].querySelector("h4").textContent = siteContent["main-content"]["product-h4"];
// bottomContentDiv[1].querySelector("p").textContent = siteContent["main-content"]["product-content"];

// bottomContentDiv[2].querySelector("h4").textContent = siteContent["main-content"]["vision-h4"];
// bottomContentDiv[2].querySelector("p").textContent = siteContent["main-content"]["vision-content"];


// Contact Section

const contactTitle = document.querySelector('.contact h4');
contactTitle.textContent = siteContent["contact"]["contact-h4"];

const contactInfo = document.querySelectorAll('.contact p');
contactInfo[0].textContent = siteContent["contact"]["address"];
contactInfo[1].textContent = siteContent["contact"]["phone"];
contactInfo[2].textContent = siteContent["contact"]["email"];

// Footer Section 

const footerCopyright = document.querySelector('footer');
footerCopyright.textContent = siteContent["footer"]["copyright"];