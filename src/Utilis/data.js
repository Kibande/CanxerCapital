
import africa from '../Assets/africa-min.jpg';
import kidepo from '../Assets/kidepo.jpg';
import akagera from '../Assets/akagera.jpg';
import nyungwe from '../Assets/nyungwe.jpg';
import safari from '../Assets/safari.jpg';
import karisimbi from '../Assets/karisimbi.jpg';
import planning from '../Assets/planning-min.jpg';
import heritage from '../Assets/cultural heritage-min.jpg';
import guided_tour from '../Assets/guided tour-min.jpg';
import murchison_falls from '../Assets/Murchison falls.jpg';
import dp from '../Assets/dp.png';
import accomdationPic from '../Assets/pexels-pixabay-258154-min.jpg';
export const AUTH_TOKEN = 'auth-token';
export const SERVER_API_ENDPOINT = 'http://localhost:9000/graphql';
export const SERVER_SUBSCRIPTIONS_ENDPOINT = `ws://localhost:9000/graphql`;
export const WHATSAPP_CONTACT = "+256751076860"
export const CURRENT_USER_COOKIE_NAME = 'current_user';

export const HOMEPAGEINDEX = 0;
export const SINGLEPACKAGEPAGEINDEX = 1;
export const BLOGPAGEINDEX = 2;
export const CONTACTUSPAGEINDEX = 3;
export const ABOUTUSPAGEINDEX = 4;
export const TERMSANDCONDITIONSPAGEINDEX = 5;
export const TESTIMONALS = 6;
export const SINGLEBLOGPAGE = 7;


//Admin

export const ADMINACCOMODATIONINDEX = 0;
export const ADMINANALYTICSINDEX = 1;
export const ADMINBLOGSINDEX = 2;
export const ADMINBOOKINGSINDEX = 3;
export const ADMINCUSTOMERCAREINDEX = 4;
export const ADMINDASHBOARDINDEX = 5;
export const ADMINDESTINATIONSINDEX = 6;
export const ADMINHOMEINDEX = 7;
export const ADMINPACKAGESINDEX = 8;
export const ADMINPAYMENTSINDEX = 9;
export const ADMINSECURITYINDEX = 10;
export const ADMINUSERSINDEX = 11;
export const ADMINWEBSITEINFOINDEX = 12;
export const ADMINNEWBLOGINDEX = 13;
export const ADMINVIEWBLOGINFOINDEX = 14;
export const ADMINEDITBLOGINDEX = 15;
export const ADMINNEWPACKAGEINDEX = 16;
export const ADMINEDITPACKAGEINDEX = 17;
export const ADMINVIEWPACKAGEINDEX = 18;

export const CompanyEmail = "info@daytodaysafaris.com";
export const CompanyTel = "+256 751 076 860";


export const ADMINQUICKMENULINKS = [
    {
        title: "Dash board",
        pageIndex: ADMINDASHBOARDINDEX,
    },
    {
        title: "Destinations",
        pageIndex: ADMINDESTINATIONSINDEX
    },
    {
        title: "Accomodation",
        pageIndex: ADMINACCOMODATIONINDEX
    }
    ,
    {
        title: "Blogs",
        pageIndex: ADMINBLOGSINDEX
    },
    {
        title: "Packages",
        pageIndex: ADMINPACKAGESINDEX
    },
    {
        title: "WebsiteInfo",
        pageIndex: ADMINWEBSITEINFOINDEX
    }

]



export const ADMINMANAGEMENTLINKS = [
    {
        title: "Customer Care",
        pageIndex: ADMINCUSTOMERCAREINDEX
    },
    {
        title: "Analytics",
        pageIndex: ADMINANALYTICSINDEX
    },
    {
        title: "Payments",
        pageIndex: ADMINPAYMENTSINDEX
    }
    ,
    {
        title: "Bookings",
        pageIndex: ADMINBOOKINGSINDEX
    },
    {
        title: "Users",
        pageIndex: ADMINUSERSINDEX
    },
    {
        title: "Security",
        pageIndex: ADMINSECURITYINDEX
    }

]



export const HeaderLinks = [
    {
        title: "Home",
        pageIndex: HOMEPAGEINDEX
    },
    {
        title: "Blogs",
        pageIndex: BLOGPAGEINDEX
    }
    ,
    {
        title: "Contact Us",
        pageIndex: CONTACTUSPAGEINDEX
    }

]



export const FooterInfoLinks = [
    {
        title: "Home",
        pageIndex: HOMEPAGEINDEX
    },
    {
        title: "About Us",
        pageIndex: ABOUTUSPAGEINDEX
    },
    {
        title: "Contact Us",
        pageIndex: CONTACTUSPAGEINDEX
    }
    ,
    {
        title: "Terms and Conditions",
        pageIndex: TERMSANDCONDITIONSPAGEINDEX
    }
]


export const FooterHelpfulLinks = [
    {
        title: "Blogs",
        pageIndex: BLOGPAGEINDEX
    },
    // {
    //     title: "Tours and Packages",
    //     pageIndex: HOMEPAGEINDEX
    // },
    // {
    //     title: "Destination Gudies",
    //     pageIndex: HOMEPAGEINDEX
    // }
    // ,
    // {
    //     title: "Reviews and Testimonals",
    //     pageIndex: TESTIMONALS
    // }

]

export const Accomodation = [
    {
        id: 1,
        imgSrc: accomdationPic,
        title: 'Abas Motel',
        location: 'Tanzania',
        beds: 1,
        bath: 1,
        wifi: true,
        shuttle: true,

        description: `This pacakage comes with comfortable accomdation where you can safely rest after a wonderful day of adventure.`
    }
]

export const PackagesInfo = {
    reserve: `<p><span style="color: rgb(246, 112, 9);"><strong><em>We reserve the right to amend the stated itinerary in response to unexpected changes in local conditions.</em></strong></span></p>
    <p><span style="color: rgb(246, 112, 9);"><strong><em>  </em></strong></span></p>
    <p><span style="color: rgb(246, 112, 9);"><strong><em>Quotations and Bookings for 2019: Tariffs quoted are valid for 2019 wherever possible.  Not all service providers release or guarantee their rates well in advance and therefore the itinerary cost is subject to increase.  Many factors may result in an increase of the cost of a safari itinerary and GoExplore Safaris is not liable to cover such increases.  Factors influencing cost increases include, but are not limited to, supplier increases (including gorilla permits and park / conservation fees), government tax increases and instatements, fuel increases, itinerary amendments, availability restrictions etc.  We will endeavor to provide as much notice as possible, and assure you that we will do all we can to prevent or limit any increases.</em></strong></span></p>
    <p><span style="color: rgb(246, 112, 9);"><strong><em> </em></strong></span></p>
    <p><span style="color: rgb(246, 112, 9);"><strong><em>East Africa (Uganda. Kenya, Rwanda and Tanzania) is a developing region, and whilst GoExplore Safaris endeavors to make the itinerary as accurate as possible, it should be considered as an approximate agenda of activities rather than a rigid schedule. Trip itineraries are subject to revision due to weather, trail conditions, government and local restrictions, animal movement and other reasons beyond our control. In addition, frequent reconnaissance of routes sometimes determines a better routing. We do our best to ascertain the most scenic and convenient route possible throughout our client’s safari with us.</em></strong></span></p>
    <p></p>
    `
}


export const DayaToDaySafarisLegal={
    termsandConditions:`<p><span style="color: rgb(0,0,0);font-size: medium;font-family: Poppins, sans-serif;"><strong>Terms and Conditions Welcome to Day to Day Safaris.</strong></span></p>
    <p><span style="color: rgb(0,0,0);font-size: medium;font-family: Poppins, sans-serif;"> These terms and conditions outline the rules and regulations for the use of our website and the services we provide. By accessing or using our website, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, please do not use our website or services.</span></p>
    <p><span style="color: rgb(0,0,0);font-size: medium;font-family: Poppins, sans-serif;"><strong> 1. Intellectual Property All content on this website,</strong> including text, graphics, logos, images, videos, and software, is the property of Da y to Day Safaris and is protected by intellectual property laws. You may not reproduce, distribute, modify, or use any content without our prior written consent. </span></p>
    <p><span style="color: rgb(0,0,0);font-size: medium;font-family: Poppins, sans-serif;"><strong>2. Booking and Payments</strong></span></p>
    <p><span style="color: rgb(0,0,0);font-size: medium;font-family: Poppins, sans-serif;"> 2.1. Booking Confirmation: All bookings made through our website are subject to confirmation. We reserve the right to reject or cancel a booking if any information provided is found to be incorrect or if the requested service is unavailable. </span></p>
    <p><span style="color: rgb(0,0,0);font-size: medium;font-family: Poppins, sans-serif;">2.2. Payment: Payment for bookings must be made in full at the time of reservation, unless otherwise specified. We accept various payment methods, and all transactions are securely processed. </span></p>
    <p><span style="color: rgb(0,0,0);font-size: medium;font-family: Poppins, sans-serif;">2.3. Cancellation and Refunds: Our cancellation and refund policy varies depending on the type of service booked. Please refer to the specific terms and conditions provided during the booking process. </span></p>
    <p><span style="color: rgb(0,0,0);font-size: medium;font-family: Poppins, sans-serif;"><strong>3. Travel Documents and Insurance</strong></span></p>
    <p><span style="color: rgb(0,0,0);font-size: medium;font-family: Poppins, sans-serif;">3.1. Travel Documents: It is the responsibility of the traveler to ensure they have valid passports, visas, and any other required travel documents for the destinations they plan to visit. [Tour Company Name] is not liable for any issues arising from inadequate travel documents. </span></p>
    <p><span style="color: rgb(0,0,0);font-size: medium;font-family: Poppins, sans-serif;">3.2. Travel Insurance: We strongly recommend that all travelers obtain adequate travel insurance to cover any unforeseen circumstances, including trip cancellations, medical emergencies, or lost/stolen belongings.Day to Day Safaris is not responsible for any losses or expenses incurred during the trip. </span></p>
    <p><span style="color: rgb(0,0,0);font-size: medium;font-family: Poppins, sans-serif;"><strong>4. Limitation of Liability </strong></span></p>
    <p><span style="color: rgb(0,0,0);font-size: medium;font-family: Poppins, sans-serif;">4.1. Disclaimer: While we strive to provide accurate and up-to-date information on our website, we cannot guarantee the completeness, accuracy, reliability, or availability of the content. We reserve the right to make changes to our website and services without prior notice. </span></p>
    <p><span style="color: rgb(0,0,0);font-size: medium;font-family: Poppins, sans-serif;">4.2. Indemnification: By using our website and services, you agree to indemnify and hold Day to Day Safaris harmless from any claims, damages, losses, liabilities, and expenses arising from your use of our website, services, or violation of these terms and conditions. </span></p>
    <p><span style="color: rgb(0,0,0);font-size: medium;font-family: Poppins, sans-serif;">5. Governing Law These terms and conditions shall be governed by and construed in accordance with the laws of Uganda. Any disputes arising from the use of our website or services shall be subject to the exclusive jurisdiction of the courts in Uganda. If you have any questions or concerns regarding these terms and conditions, please contact us at support@daytodaysafaris. </span></p>
    <p><span style="color: rgb(0,0,0);font-size: medium;font-family: Poppins, sans-serif;">Last updated: 1st July 2023</span>&nbsp;</p>
    `
}
export const PackagesData = [
    {
        id: 1,
        img: murchison_falls,
        title: 'ENTEBBE | MURCHISON FALLS | 3 DAYS | 2 NIGHTS ',
        country: 'Uganda',
        region: 'ENTEBBE',
        description: `
        `,
        days: [
            {
                img: murchison_falls,
                title: 'Day 1 – Transfer to Murchison Falls National Park',
                description: `<p>Pick up from your residence where you will meet and greet your GoExplore Safaris representative and have lunch at a selected restaurant later drive to Murchison Falls National park, then drive to your lodge enjoying your evening game&nbsp;</p>
                <p><strong>Overnight at Pakuba safari lodge </strong></p>
                <p><strong>Meal plan – breakfast, lunch and dinner</strong></p>
                <p></p>
                `
            },

            {
                img: murchison_falls,
                title: 'Day 2 – Morning Game drive and boat cruise',
                description: `<p>After breakfast, you will go for an early game drive where you may encounter the cape Buffalo, Uganda Kob, Elephants and hippopotamus, then return for lunch and relaxation as you prepare to Boat cruise to the bottom of the falls seeing lots of hippos, crocodiles, elephants.&nbsp;</p>
                <p><strong>Overnight at Pakuba safari lodge</strong></p>
                <p><strong>Meal plan – breakfast, lunch and dinner  </strong></p>
                <p></p>
                `
            },

            {
                img: murchison_falls,
                title: 'Day 3 – Transfer to Kampala.',
                description: `<p><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Very early Morning you will have breakfast and later you proceed from the lodge as  you enjoy another rewarding morning game drive on your way out of the park, driving from Murchison falls heading to Kampala back home.</span>&nbsp;&nbsp;</p>
                `
            }

        ],

        includes: `
        
            <ul>
            <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">All meals as specified in the itinerary (hotels in Arusha, Nairobi, Kampala or Entebbe are B&amp;B)</span></li>
            <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Drinks as stipulated in itinerary</span></li>
            <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Accommodation as indicated in the itinerary</span></li>
            <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Water in the vehicle for overland sectors</span></li>
            <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">All ground transportation and transfers as indicated, which are inclusive of fuel</span></li>
            <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Activities as indicated in the itinerary </span></li>
            <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Game drives </span></li>
            <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Ranger guide fees</span></li>
            <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Park, conservation and community bed night fees </span></li>
            <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">All applicable taxes, administration and banking fees</span></li>
            <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">AMREF flying doctors’ emergency evacuation program</span></li>
            <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Gorilla and Chimpanzee permits per person as specified in the itinerary. </span></li>
            <ul>
            <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Gorilla &amp; Chimpanzee tracking is subject to availability of permits, which are limited to 8 per gorilla group per day and 6 per chimpanzee track per ½ day.</span></li>
            <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Any Gorilla and Chimpanzee permits required need to be paid for upfront when booking. As soon as funds clear in our account, we will go ahead and purchase</span></li>
            <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Gorilla and Chimpanzee permits cannot be held with the Uganda Wildlife Authority in advance of payment and Rwanda Development Board – they are only secured once physically paid for.</span></li>
            <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Gorilla and Chimpanzee permits are always 100% non-transferable and non-refundable.</span></li>
            <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">There is a minimum age limit for gorilla tracking which is strictly 15 years. </span></li>
            </ul>
            </ul>
            <p></p>
            <p></p>

        `,
        excludes: `
        
        <ul>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">International flights and applicable airport departure taxes </span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">All passport and visa fees (Visa: US$ 50 per person for entry into Kenya – easily obtainable at the Airport) </span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Meals not specified (including lunch and other meal stops between properties on overland sectors)</span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Drinks where not stipulated in itinerary</span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Items of a personal nature: fax, telephone, etc. </span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Laundry in Entebbe/Kampala </span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Gratuities for guide/driver/hotel staff </span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Any extras and additional activities not mentioned in the itinerary </span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Travel/medical insurance</span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Trip cancellation, travel delay or baggage insurance. </span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Charges incurred as a result of delays beyond our control. </span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">All statutory increases beyond our control.</span></li>
        </ul>
        
        `,
        avaliablity: `
        <p></p>
        <p><strong>Availability:</strong></p>
        <p>Safari itinerary bookings and availability can only be guaranteed once the full invoiced deposit payment has reached our account.</p>
        <p>&nbsp;</p>
        <p><strong>Safari Price:</strong></p>
        <p>We try to make our prices as all-inclusive as possible so that our clients do not need to reach for their wallets. Where there are overland sectors, the 4x4 Safari Vehicles and safari guide will be at the clients’ exclusive use which provides great flexibility. The guide will accompany clients on all overland sectors, assist with check-in at accommodation and share his knowledge on the flora and fauna of Uganda | Kenya | Rwanda | Tanzania&nbsp;</p>
        <p></p>
        `
        ,
        accomodation: Accomodation[0]

    },
    {
        id: 2,
        img: kidepo,
        title: 'ENTEBBE | KIDEPO VALLEY NATIONAL PARK | 4 DAYS | 3 NIGHTS ',
        country: 'Uganda',
        region: 'ENTEBBE',
        description: `<p>Uganda is a land of contrasts. In half a day you can drive from mist-shrouded volcanic mountains to hot hazy savannah, dappled with wildlife.  Serene undulating hills of tea plantations, lush but ordered, give way to tangled jungle and rainforest with the musical accompaniment of chaotic, cacophonous birdlife. Uganda is alive with these contrasts: The tiniest sunbirds, iridescent in the morning light, the massive lumbering yet silent elephant, disappearing like a vapor behind the trees, the chimpanzees crashing about the forest canopy, the lugubrious gorilla, chewing thoughtfully in the bamboo thicket. There is the Nile, twisting its way north like a shimmering ribbon, through arid semi-desert scattered about with rocky kopjes. Snow-capped peaks, tropical, sandy, freshwater beaches, and smiling faces everywhere. It is all here, a feast for all the senses.
        Let us show you the Uganda we know and love.
        This is Africa: the way it should be!
        </p>
        `,
        days: [
            {
                img: kidepo,
                title: 'Day 01: Drive to Kidepo Valley National Park',
                description: `<p>Depending on your arrival time, your safari guide will meet you at Entebbe Airport and thereafter connect you for an internal flight to Kidepo valley national Park. Sometimes referred to as the true African wilderness, this park is one of the remotest and virgin tourism destinations in Uganda blessed with abundance of wildlife, beautiful scenery and rich local cultures of the surrounding Karamojong communities. Upon arrival at Kidepo Valley national Park, you will be transferred to Kidepo Savanah lodge for dinner and an overnight stay (Full Board)</p>
                <p></p>
                `
            },

            {
                img: kidepo,
                title: 'Day 02: Game drives at Kidepo Valley National Park. ',
                description: `<p>You will have full day game viewing at the park. After your breakfast, you will head into the park, driving through the park, here you will have an encounter with different residents of the park that include the Giraffes, Buffaloes, Elephants, Zebras, Lions and many other different animal and bird species. You will return to the lodge for lunch and afternoon relaxation. Later in the evening, you will have a sunset game drive in the park then return for dinner and an overnight stay at Kidepo Savanah lodge for dinner and an overnight stay (Full Board)</p>
                <p></p>
                `
            },

            {
                img: kidepo,
                title: 'Day 03: Morning game drive and afternoon community walk. ',
                description: `<p>After breakfast, you will set off for another game drive at Kidepo. Explore the park to its fullest as you encounter different animal and bird species. Later in the afternoon, you will have a community walk to the local Karamojong communities who live around the park. These communities have got unique cultures and ways of life that will give you an experience with the true African cultures. </p>
                `
            },

            {
                img: kidepo,
                title: 'Day 04: Transfer to Entebbe',
                description: `<p>Transfer Back to Kampala</p>
                `
            }

        ],

        includes: `
        
   <ul>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">All meals as specified in the itinerary (hotels in Arusha, Nairobi, Kampala or Entebbe are B&amp;B)</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Drinks as stipulated in itinerary</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Accommodation as indicated in the itinerary</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Water in the vehicle for overland sectors</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">All ground transportation and transfers as indicated, which are inclusive of fuel</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Activities as indicated in the itinerary </span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Game drives </span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Ranger guide fees</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Park, conservation and community bed night fees </span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">All applicable taxes, administration and banking fees</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">AMREF flying doctors’ emergency evacuation program</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Gorilla and Chimpanzee permits per person as specified in the itinerary. </span></li>
<ul>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Gorilla &amp; Chimpanzee tracking is subject to availability of permits, which are limited to 8 per gorilla group per day and 6 per chimpanzee track per ½ day.</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Any Gorilla and Chimpanzee permits required need to be paid for upfront when booking. As soon as funds clear in our account, we will go ahead and purchase</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Gorilla and Chimpanzee permits cannot be held with the Uganda Wildlife Authority in advance of payment and Rwanda Development Board – they are only secured once physically paid for.</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Gorilla and Chimpanzee permits are always 100% non-transferable and non-refundable.</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">There is a minimum age limit for gorilla tracking which is strictly 15 years. </span></li>
</ul>
</ul>
<p></p>
<p></p>

        `,
        excludes: `
        
        <ul>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">International flights and applicable airport departure taxes </span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">All passport and visa fees (Visa: US$ 50 per person for entry into Kenya – easily obtainable at the Airport) </span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Meals not specified (including lunch and other meal stops between properties on overland sectors)</span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Drinks where not stipulated in itinerary</span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Items of a personal nature: fax, telephone, etc. </span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Laundry in Entebbe/Kampala </span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Gratuities for guide/driver/hotel staff </span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Any extras and additional activities not mentioned in the itinerary </span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Travel/medical insurance</span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Trip cancellation, travel delay or baggage insurance. </span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Charges incurred as a result of delays beyond our control. </span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">All statutory increases beyond our control.</span></li>
        </ul>
        
        `,
        avaliablity: `
        <p></p>
        <p><strong>Availability:</strong></p>
        <p>Safari itinerary bookings and availability can only be guaranteed once the full invoiced deposit payment has reached our account.</p>
        <p>&nbsp;</p>
        <p><strong>Safari Price:</strong></p>
        <p>We try to make our prices as all-inclusive as possible so that our clients do not need to reach for their wallets. Where there are overland sectors, the 4x4 Safari Vehicles and safari guide will be at the clients’ exclusive use which provides great flexibility. The guide will accompany clients on all overland sectors, assist with check-in at accommodation and share his knowledge on the flora and fauna of Uganda | Kenya | Rwanda | Tanzania&nbsp;</p>
        <p></p>
        `
        ,
        accomodation: Accomodation[0]

    },
    {
        id: 3,
        img: nyungwe,
        title: '3 DAYS NYUNGWE FOREST NATIONAL PARK- RWANDA ',
        country: 'Nyungwe',
        region: 'RWANDA',
        description: `<p>Discover Nyungwe forest national park on this trip for chimpanzee tracking experience and canopy walk. 
                Nyungwe forest national park spanning an area of 1020 sq km of montane tropical rainforests located in southwestern Rwanda. The park is home to 12 primate species including chimpanzees and strong hold troop of 300 black and white colobus monkeys. The forest is also home to 77 mammals, over 300 bird species including albertine rift endemics as well as butterflies, insects, reptiles, amphibians and plants.   
                During the canopy walk experience various flora and fauns and see breathtaking scenery of nyungwe forest from the canopy bridges suspended 60 meters above the ground. 
                On arrival, our guide will pick you up and transfer to your hotel </p>
        `,
        days: [
            {
                img: nyungwe,
                title: 'Day 1 Kigali to Nyungwe Forest National Park',
                description: `<p>
                Depart Kigali city after breakfast in the morning and transfer to Nyungwe forest national park 5 hour drive approximately. Along the way, make a stopover at Nyanza palace and have lunch in Huye town. 
Reach the park in the afternoon check in the lodge of choice or Gisakura Guest House (budget)/ Nyungwe Hill Top View Lodge (mid-range)/ Nyungwe Forest Lodge (luxury), dinner and overnight stay. 
</p>
                <p></p>
                `
            },

            {
                img: nyungwe,
                title: 'Day 2 Chimpanzee tracking and canopy walk',
                description: `<p>
                Have breakfast at the lodge and head for a morning guided chimp walk at cyamudong. Guides lead your way into the forest in search for chimpanzees which can be seen in trees as well as on the ground. Other primates such as black and white colobus monkey, red tailed monkey can be spotted as you return back to the lodge for lunch. Go for a canopy walk in the afternoon. Canopy walk bridges suspended 130 feet above the ground offers up-close view of primates, birds, orchids in the tree tops. Return to the lodge for dinner and overnight. 
                </p>
                <p></p>
                `
            },

            {
                img: nyungwe,
                title: 'Day 3 transfer back to Kigali city',
                description: `<p>
                After breakfast, there’s optional time to do a nature walk after which you depart Nyungwe and transfer back to Kigali. End of the tour. 
                </p>
                `
            }



        ],

        includes: `
        
   <ul>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">All meals as specified in the itinerary (hotels in Arusha, Nairobi, Kampala or Entebbe are B&amp;B)</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Drinks as stipulated in itinerary</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Accommodation as indicated in the itinerary</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Water in the vehicle for overland sectors</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">All ground transportation and transfers as indicated, which are inclusive of fuel</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Activities as indicated in the itinerary </span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Game drives </span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Ranger guide fees</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Park, conservation and community bed night fees </span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">All applicable taxes, administration and banking fees</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">AMREF flying doctors’ emergency evacuation program</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Gorilla and Chimpanzee permits per person as specified in the itinerary. </span></li>
<ul>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Gorilla &amp; Chimpanzee tracking is subject to availability of permits, which are limited to 8 per gorilla group per day and 6 per chimpanzee track per ½ day.</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Any Gorilla and Chimpanzee permits required need to be paid for upfront when booking. As soon as funds clear in our account, we will go ahead and purchase</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Gorilla and Chimpanzee permits cannot be held with the Uganda Wildlife Authority in advance of payment and Rwanda Development Board – they are only secured once physically paid for.</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Gorilla and Chimpanzee permits are always 100% non-transferable and non-refundable.</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">There is a minimum age limit for gorilla tracking which is strictly 15 years. </span></li>
</ul>
</ul>
<p></p>
<p></p>

        `,
        excludes: `
        
        <ul>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">International flights and applicable airport departure taxes </span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">All passport and visa fees (Visa: US$ 50 per person for entry into Kenya – easily obtainable at the Airport) </span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Meals not specified (including lunch and other meal stops between properties on overland sectors)</span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Drinks where not stipulated in itinerary</span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Items of a personal nature: fax, telephone, etc. </span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Laundry in Entebbe/Kampala </span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Gratuities for guide/driver/hotel staff </span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Any extras and additional activities not mentioned in the itinerary </span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Travel/medical insurance</span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Trip cancellation, travel delay or baggage insurance. </span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Charges incurred as a result of delays beyond our control. </span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">All statutory increases beyond our control.</span></li>
        </ul>
        
        `,
        avaliablity: `
        <p></p>
        <p><strong>Availability:</strong></p>
        <p>Safari itinerary bookings and availability can only be guaranteed once the full invoiced deposit payment has reached our account.</p>
        <p>&nbsp;</p>
        <p><strong>Safari Price:</strong></p>
        <p>We try to make our prices as all-inclusive as possible so that our clients do not need to reach for their wallets. Where there are overland sectors, the 4x4 Safari Vehicles and safari guide will be at the clients’ exclusive use which provides great flexibility. The guide will accompany clients on all overland sectors, assist with check-in at accommodation and share his knowledge on the flora and fauna of Uganda | Kenya | Rwanda | Tanzania&nbsp;</p>
        <p></p>
        `
        ,
        accomodation: Accomodation[0]

    },
    {
        id: 4,
        img: akagera,
        title: '3 DAYS AKAGERA NATIONAL PARK SAFARI ',
        country: 'Akagera',
        region: 'RWANDA',
        description: `<p>
             Experience a wildlife viewing safari in Rwanda’s Akagera National Park. 
            Enjoy safari game drives in search for black rhinos, elephants, lions and hippos, giraffes, and several antelopes found in the park. 
            Boat cruises on Lake Ihema offer the chance to view hippos, crocodiles and water birds among the 500 bird species in the park. 
            Named after the Akagera River, the park covers a total area of 1200 sq km of diverse habitats such as savannah, woodland forests, swamp fringed lakes which are home to big 5 mammals and over 500 birds species. 
            The park is managed by the African Parks in partnership with Rwanda development, which have brought back black rhinos and lions following local extinction in the 1990’s. Since 2015, the population of rhinos and lions is increasing in the park. Other mammals found in the park include elephants, buffaloes, giraffe, zebra, leopard, and various antelopes such as topi, impala, eland, and bushbuck. With luck during game drives with rangers, you may spot the big 5 African mammals. 
            On arrival at Kigali you will be received by our team and transfer you to the hotel.  

                 </p>
        `,
        days: [
            {
                img: akagera,
                title: 'Day 1 Kigali to Akagera National Park',
                description: `<p>
                Pick up from your hotel after breakfast and depart Kigali for Akegera national park which about 3 hour drive. Along the journey, make a stopover at the famous cow dung art paintings in Nyakarambi village. Proceed to the park and check in the lodge for lunch.  There will be a game drive in the afternoon looking for elephants, lion, buffalo, giraffe, and zebra. Dinner and overnight at Ruzizi tented camp/ Akagera game lodge. 
                <p>
                <p></p>
                `
            },

            {
                img: akagera,
                title: 'Day 2 game drive and boat cruise ',
                description: `<p>
               Embark on a game in the morning with packed lunch to search for the big five mammals which include black rhino, elephant, buffalo, lion and elusive leopard. Have picnic lunch in the park and head for the afternoon boat cruise on Lake Ihema looking for hippos, crocodiles, sitatunga and lots of birds. Return back for dinner. After dinner, you have optional night game drive, you may be lucky to spot a leopard and spotted hyena on the hunt. 
                    Return back for dinner and overnight stay. After dinner, you have optional night game drive, you may be lucky to spot a leopard and spotted hyena. 

                </p>
                <p></p>
                `
            },

            {
                img: akagera,
                title: 'Day 3 Return back to Kigali ',
                description: `<p>
                Get up early morning at 06:00 a.m after breakfast to experience the sunrise and a game drive.
                On returning back to the lodge have breakfast, check out and transfer back to Kigali city for your departure flight. 

                </p>
                `
            }



        ],

        includes: `
        
   <ul>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">All meals as specified in the itinerary (hotels in Arusha, Nairobi, Kampala or Entebbe are B&amp;B)</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Drinks as stipulated in itinerary</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Accommodation as indicated in the itinerary</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Water in the vehicle for overland sectors</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">All ground transportation and transfers as indicated, which are inclusive of fuel</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Activities as indicated in the itinerary </span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Game drives </span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Ranger guide fees</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Park, conservation and community bed night fees </span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">All applicable taxes, administration and banking fees</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">AMREF flying doctors’ emergency evacuation program</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Gorilla and Chimpanzee permits per person as specified in the itinerary. </span></li>
<ul>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Gorilla &amp; Chimpanzee tracking is subject to availability of permits, which are limited to 8 per gorilla group per day and 6 per chimpanzee track per ½ day.</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Any Gorilla and Chimpanzee permits required need to be paid for upfront when booking. As soon as funds clear in our account, we will go ahead and purchase</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Gorilla and Chimpanzee permits cannot be held with the Uganda Wildlife Authority in advance of payment and Rwanda Development Board – they are only secured once physically paid for.</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Gorilla and Chimpanzee permits are always 100% non-transferable and non-refundable.</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">There is a minimum age limit for gorilla tracking which is strictly 15 years. </span></li>
</ul>
</ul>
<p></p>
<p></p>

        `,
        excludes: `
        
        <ul>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">International flights and applicable airport departure taxes </span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">All passport and visa fees (Visa: US$ 50 per person for entry into Kenya – easily obtainable at the Airport) </span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Meals not specified (including lunch and other meal stops between properties on overland sectors)</span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Drinks where not stipulated in itinerary</span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Items of a personal nature: fax, telephone, etc. </span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Laundry in Entebbe/Kampala </span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Gratuities for guide/driver/hotel staff </span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Any extras and additional activities not mentioned in the itinerary </span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Travel/medical insurance</span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Trip cancellation, travel delay or baggage insurance. </span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Charges incurred as a result of delays beyond our control. </span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">All statutory increases beyond our control.</span></li>
        </ul>
        
        `,
        avaliablity: `
        <p></p>
        <p><strong>Availability:</strong></p>
        <p>Safari itinerary bookings and availability can only be guaranteed once the full invoiced deposit payment has reached our account.</p>
        <p>&nbsp;</p>
        <p><strong>Safari Price:</strong></p>
        <p>We try to make our prices as all-inclusive as possible so that our clients do not need to reach for their wallets. Where there are overland sectors, the 4x4 Safari Vehicles and safari guide will be at the clients’ exclusive use which provides great flexibility. The guide will accompany clients on all overland sectors, assist with check-in at accommodation and share his knowledge on the flora and fauna of Uganda | Kenya | Rwanda | Tanzania&nbsp;</p>
        <p></p>
        `
        ,
        accomodation: Accomodation[0]

    },
    {
        id: 5,
        img: karisimbi,
        title: '4 DAYS RWANDA GORILLAS SAFARI AND MOUNT KARISIMBI HIKING ',
        country: 'Karismibi',
        region: 'RWANDA',
        description: `<p>
                Explore Rwanda’s volcanoes national park for mountain gorilla trekking and volcano hiking. 
                Volcanoes national park provides superb gorilla tracking opportunities, its home to mountain gorillas including 10 families that have been habituated for tourism. 
                Enjoy hiking Mount karisimbi 
                which is known for its mountain gorillas and the rare golden monkeys. Volcanoes national park has 10 gorilla families that are habituated f
                The park contains 3 dormant volcanoes with Mt. Karisimbi towering 4507 meters above sea level, it is the tallest in Rwanda, the Virunga Mountains and 8th in Africa. Besides gorillas and golden monkeys, the park is also home to a range of wildlife including 178 species of birds, other primates like baboons, velvet monkeys, as well as forest buffaloes and duikers. 
                Offered on this tour is gorilla trekking and hiking Karisimbi for breathtaking scenery of the virunga massifs. Included also is a visit to Iby’iwacu cultural village to enjoy a cultural experience and learn about this ecotourism project’s importance in community development and gorilla conservation. 
                
               <br/>
                <strong>Highlights </strong>
                 <br/>
                Up close encounter with mountain gorillas 
                Overnight volcano hiking 
                Amazing views of Virunga massifs
                Cultural experience with Rwandan traditional dance performances
                 </p>
        `,
        days: [
            {
                img: karisimbi,
                title: 'Day 1: Kigali to Volcanoes National Park',
                description: `<p>
                Begin your trip with a city tour before heading to Ruhengeri northern Rwanda.Visit Kigali genocide memorial, Kigali art museum and have lunch. Leave the city; take a 2 hours scenic drive via rolling hills to volcanoes national park. Check in and settle into your lodge, enjoy dinner and overnight at Mountain gorilla view lodge/ Virunga Hotel/ Da Vinci lodge. 
                <p>
                <p></p>
                `
            },

            {
                img: karisimbi,
                title: 'Day 2: Gorilla trek and Iby’iwacu cultural visit',
                description: `<p>
                    After breakfast, you head to Kinigi visitor center at around 07:00 a.m. Your Rwandan guides give you briefing on gorilla rules and take you on a guided trek searching for mountain gorillas. After spending 1 hour with gorillas, you return back at the lodge and enjoy lunch. 
                    In the late afternoon, you visit Iby’iwacu cultural village outside the park. Here you meet with local people that will perform their traditional dances and teach you about their traditions such as architecture, dressing as king and queen, herbal plants, a traditional healer, taste banana beer, and learn how to weave agaseke baskets. You will see the positive impact of gorilla tourism has brought to the community, such as job creation, cultural preservation. Return to the lodge for dinner and overnight.  

                </p>
                <p></p>
                `
            },

            {
                img: karisimbi,
                title: 'Day 3: Climb Mount Karisimbi ',
                description: `<p>
                    From your lodge after breakfast, you meet with guides at Kinigi and arrange necessary gears. Embark on the hiking as you soak up spectacular views, you arrive at the camp and set up where to sleep. 
                </p>
                `
            },

            {
                img: karisimbi,
                title: 'Day 4: Descend and transfer to Kigali city ',
                description: `<p>
                    The following morning, you climb further to the summit spend there some time enjoying sunrise and slowly descend back to Kinigi. On arrival, you are transferred back to Kigali. Depending on your flight time, a city is suggested and later you are dropped off at Kigali airport. 
                </p>
                `
            }



        ],

        includes: `
        
   <ul>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">All meals as specified in the itinerary (hotels in Arusha, Nairobi, Kampala or Entebbe are B&amp;B)</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Drinks as stipulated in itinerary</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Accommodation as indicated in the itinerary</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Water in the vehicle for overland sectors</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">All ground transportation and transfers as indicated, which are inclusive of fuel</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Activities as indicated in the itinerary </span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Game drives </span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Ranger guide fees</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Park, conservation and community bed night fees </span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">All applicable taxes, administration and banking fees</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">AMREF flying doctors’ emergency evacuation program</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Gorilla and Chimpanzee permits per person as specified in the itinerary. </span></li>
<ul>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Gorilla &amp; Chimpanzee tracking is subject to availability of permits, which are limited to 8 per gorilla group per day and 6 per chimpanzee track per ½ day.</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Any Gorilla and Chimpanzee permits required need to be paid for upfront when booking. As soon as funds clear in our account, we will go ahead and purchase</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Gorilla and Chimpanzee permits cannot be held with the Uganda Wildlife Authority in advance of payment and Rwanda Development Board – they are only secured once physically paid for.</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Gorilla and Chimpanzee permits are always 100% non-transferable and non-refundable.</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">There is a minimum age limit for gorilla tracking which is strictly 15 years. </span></li>
</ul>
</ul>
<p></p>
<p></p>

        `,
        excludes: `
        
        <ul>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">International flights and applicable airport departure taxes </span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">All passport and visa fees (Visa: US$ 50 per person for entry into Kenya – easily obtainable at the Airport) </span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Meals not specified (including lunch and other meal stops between properties on overland sectors)</span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Drinks where not stipulated in itinerary</span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Items of a personal nature: fax, telephone, etc. </span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Laundry in Entebbe/Kampala </span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Gratuities for guide/driver/hotel staff </span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Any extras and additional activities not mentioned in the itinerary </span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Travel/medical insurance</span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Trip cancellation, travel delay or baggage insurance. </span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Charges incurred as a result of delays beyond our control. </span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">All statutory increases beyond our control.</span></li>
        </ul>
        
        `,
        avaliablity: `
        <p></p>
        <p><strong>Availability:</strong></p>
        <p>Safari itinerary bookings and availability can only be guaranteed once the full invoiced deposit payment has reached our account.</p>
        <p>&nbsp;</p>
        <p><strong>Safari Price:</strong></p>
        <p>We try to make our prices as all-inclusive as possible so that our clients do not need to reach for their wallets. Where there are overland sectors, the 4x4 Safari Vehicles and safari guide will be at the clients’ exclusive use which provides great flexibility. The guide will accompany clients on all overland sectors, assist with check-in at accommodation and share his knowledge on the flora and fauna of Uganda | Kenya | Rwanda | Tanzania&nbsp;</p>
        <p></p>
        `
        ,
        accomodation: Accomodation[0]

    },
    {
        id: 6,
        img: safari,
        title: '5 DAYS GORILLAS AND CHIMPANZEE TRACKING SAFARI RWANDA ',
        country: 'rwanda',
        region: 'RWANDA',
        description: `<p>
                Explore great apes of Rwanda on this safari you will visit Volcanoes National Park and Nyungwe forest national park. 
Enjoy gorilla trekking and cultural tour at Iby’iwacu village in volcanoes national park where 10 gorilla families have been habituated for tourism. 
Go to Nyungwe forest national park for chimpanzee tracking experience. Nyunwe forest is home to 12 primate species including chimpanzees and troops of about 300 black and white colobus monkeys. 
Enjoy the canopy walk for beautiful panoramic views of Nyungwe forest. 

                 </p>
        `,
        days: [
            {
                img: safari,
                title: 'Day 1 Arrive at Kigali airport and transfer to volcanoes national park',
                description: `<p>
               Meet our guide on arrival at Kigali airport and transfer to volcanoes national park located in Ruhengeri, Northern Rwanda 2 hour drive approximately. 
                Arrive at the park and check in your lodge for dinner and overnight stay at Mountain Gorilla view lodge/ Da Vinci lodge/ Muhabura Hotel. 

                <p>
                <p></p>
                `
            },

            {
                img: murchison_falls,
                title: 'Day 2 gorilla tracking and cultural tour',
                description: `<p>
                   Have breakfast at the lodge and transfer to kinigi visitor for briefing on gorilla tracking rules at 07:30 a.m. visitors are divided into groups of 8 each allocated to a gorilla family. you are taken to the trailhead and led by guides walking in foot through the forest searching for gorillas. once they are found, visitors are allowed to spend an hour taking photos and observing gorillas. 
                    Trek back to the lodge for lunch. In the afternoon, you may enjoy a cultural tour outside the park at Iby’iwacu cultural village where you will learn more about the culture and lifestyle of local people. 


                </p>
                <p></p>
                `
            },

            {
                img: safari,
                title: 'Day 4 Chimpanzee tracking and canopy walk',
                description: `<p>
                   After breakfast depart for Nungwe forest national park. En route stopover at the ethnographic museum in Huye Butare and king’s palace in Nyanza to learn more about the cow dung paintings. Proceed to the park reaching in the afternoon and check in your lodge of choice. Dinner and overnight Nyungwe top view lodge/ Gisakura guest house. 
                </p>
                `
            },

            {
                img: safari,
                title: 'Day 4: Descend and transfer to Kigali city ',
                description: `<p>
                    After breakfast, head to the visitor center and meet with your guides for a short briefing before embarking on the guided chimp trek. Expect to walk through dense vegetation where your guide creates path in search for chimps. A wonderful encounter with chimps will be rewarding. 
                    After seeing chimps, you return to the lodge for lunch. In the afternoon, take embark on the fantastic canopy walks giving you a bird’s view of the entire Nyungwe forest with a chance for wildlife encounters. Return back to the lodge for dinner and overnight. 

                </p>
                `
            },
            {
                img: safari,
                title: 'Day 5 Transfer back to Kigali ',
                description: `<p>
                After breakfast, you will be driven back to Kigali via Huye Butare. Upon arrival to Kigali, you may do some shopping or sightseeing before you transfer to the airport for departure. 
                </p>
                `
            }



        ],

        includes: `
        
   <ul>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">All meals as specified in the itinerary (hotels in Arusha, Nairobi, Kampala or Entebbe are B&amp;B)</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Drinks as stipulated in itinerary</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Accommodation as indicated in the itinerary</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Water in the vehicle for overland sectors</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">All ground transportation and transfers as indicated, which are inclusive of fuel</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Activities as indicated in the itinerary </span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Game drives </span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Ranger guide fees</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Park, conservation and community bed night fees </span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">All applicable taxes, administration and banking fees</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">AMREF flying doctors’ emergency evacuation program</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Gorilla and Chimpanzee permits per person as specified in the itinerary. </span></li>
<ul>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Gorilla &amp; Chimpanzee tracking is subject to availability of permits, which are limited to 8 per gorilla group per day and 6 per chimpanzee track per ½ day.</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Any Gorilla and Chimpanzee permits required need to be paid for upfront when booking. As soon as funds clear in our account, we will go ahead and purchase</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Gorilla and Chimpanzee permits cannot be held with the Uganda Wildlife Authority in advance of payment and Rwanda Development Board – they are only secured once physically paid for.</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Gorilla and Chimpanzee permits are always 100% non-transferable and non-refundable.</span></li>
<li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">There is a minimum age limit for gorilla tracking which is strictly 15 years. </span></li>
</ul>
</ul>
<p></p>
<p></p>

        `,
        excludes: `
        
        <ul>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">International flights and applicable airport departure taxes </span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">All passport and visa fees (Visa: US$ 50 per person for entry into Kenya – easily obtainable at the Airport) </span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Meals not specified (including lunch and other meal stops between properties on overland sectors)</span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Drinks where not stipulated in itinerary</span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Items of a personal nature: fax, telephone, etc. </span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Laundry in Entebbe/Kampala </span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Gratuities for guide/driver/hotel staff </span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Any extras and additional activities not mentioned in the itinerary </span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Travel/medical insurance</span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Trip cancellation, travel delay or baggage insurance. </span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">Charges incurred as a result of delays beyond our control. </span></li>
        <li><span style="font-size: 11pt;font-family: Trebuchet MS", sans-serif;">All statutory increases beyond our control.</span></li>
        </ul>
        
        `,
        avaliablity: `
        <p></p>
        <p><strong>Availability:</strong></p>
        <p>Safari itinerary bookings and availability can only be guaranteed once the full invoiced deposit payment has reached our account.</p>
        <p>&nbsp;</p>
        <p><strong>Safari Price:</strong></p>
        <p>We try to make our prices as all-inclusive as possible so that our clients do not need to reach for their wallets. Where there are overland sectors, the 4x4 Safari Vehicles and safari guide will be at the clients’ exclusive use which provides great flexibility. The guide will accompany clients on all overland sectors, assist with check-in at accommodation and share his knowledge on the flora and fauna of Uganda | Kenya | Rwanda | Tanzania&nbsp;</p>
        <p></p>
        `
        ,
        accomodation: Accomodation[0]

    }
]

export const Posts = [
    {
        id: 1,
        postImage: africa,

        title: "Top 5 Must-Visit Destinations in East Africa",

        summary: `Discover the top five most amazing destinations to visit in East Africa for an unforgettable safari adventure. From the stunning landscapes of Serengeti to the majestic Victoria Falls, you won't want to miss these breathtaking locations.`,

        body: `East Africa is a magical place filled with stunning landscapes and awe-inspiring wildlife. Whether you're an experienced traveler or a first-time visitor, there are many must-see destinations that you simply can't miss. In this blog post, we've put together a list of the top five destinations you should visit in East Africa. These locations are sure to make your trip unforgettable, and will leave you with memories that will last a lifetime.

        First on our list is the Serengeti National Park. Known for its vast open plains and incredible wildlife, the Serengeti is one of the most famous destinations in East Africa. You can expect to see everything from elephants and lions to wildebeest and zebras. With stunning scenery and a range of activities, the Serengeti is a must-visit for anyone traveling to East Africa.
        
        Next up is Victoria Falls, located on the border of Zambia and Zimbabwe. The falls are one of the largest in the world, and are a breathtaking sight to behold. You can take a boat ride or hike around the falls, or even take a helicopter tour to get a bird's eye view. Whether you're a nature lover or just looking for an adventure, Victoria Falls is an absolute must-visit.
        
        Third on our list is Zanzibar, a beautiful island off the coast of Tanzania. Known for its turquoise waters and white sandy beaches, Zanzibar is the perfect place to unwind and relax after your safari adventure. You can go snorkeling, scuba diving, or simply relax on the beach and soak up the sun. Zanzibar is a hidden gem that should not be missed.
        
        Fourth on our list is Mount Kilimanjaro, the highest peak in Africa. Climbing Kilimanjaro is a once-in-a-lifetime experience that will challenge you physically and mentally. The views from the summit are breathtaking, and the sense of accomplishment you'll feel after reaching the top is indescribable. If you're up for the challenge, climbing Kilimanjaro is an unforgettable experience.
        
        Last but not least, we have the Masai Mara National Reserve. Located in Kenya, the Masai Mara is home to some of the most incredible wildlife in East Africa. You can witness the Great Migration, where millions of wildebeest, zebras, and gazelles cross the Mara River in search of greener pastures. With its stunning scenery and unforgettable wildlife, the Masai Mara is a must-visit destination for any safari lover.`
    }, {
        id: 1,
        postImage: planning,
        title: `Expert Advice for Planning Your Dream Safari Adventure`,
        summary: `Going on a safari is a once-in-a-lifetime adventure that requires careful planning. To make the most out of your trip, it’s essential to consider several factors beforehand. In this blog post, we’ll provide you with some expert tips for planning the ultimate safari adventure.`,
        body: `A safari is an experience that many people dream of, but it can be overwhelming to plan. To start, you need to decide on a destination that offers the wildlife and scenery you’re interested in. Researching the different national parks and reserves is key to ensuring that you pick the right place for your safari adventure.

        Once you’ve chosen your destination, you’ll need to decide on the best time to visit. Wildlife sightings can vary depending on the time of year, so it’s essential to do your research and select a time that aligns with your goals. Also, keep in mind the weather and peak tourist seasons, as they can impact your experience.
        
        Next, consider the type of safari experience you want. Would you prefer a guided tour or a self-drive option? Both have their pros and cons, and it’s up to you to decide which one aligns better with your preferences and budget.
        
        Another crucial factor to consider is your accommodation. You’ll be spending most of your time on safari, so it’s essential to choose accommodation that meets your needs and preferences. Options range from luxury lodges to more budget-friendly campsites, and there is something for every type of traveler.
        
        Finally, don’t forget to plan for additional activities and excursions. Many safari destinations offer more than just wildlife viewing, including cultural experiences and adventure activities such as hot air balloon rides and hiking. These activities can enhance your safari experience and create unforgettable memories.
        
        In conclusion, planning a safari adventure requires careful consideration and research. By following these expert tips, you can ensure that you have the trip of a lifetime and create unforgettable memories.
        
        `
    }, {
        id: 1,
        postImage: heritage,
        title: `Exploring the Rich Cultural Heritage of Africa`,
        summary: ` Africa is known for its diverse cultural heritage, with hundreds of ethnic groups and languages spread across the continent. In this blog post, we'll take a closer look at some of the fascinating aspects of African culture that you can explore on your next trip to the continent.`,
        body: `Africa is a melting pot of cultures, each with its unique traditions, customs, and beliefs. One of the best ways to experience the rich cultural heritage of Africa is to visit the local communities and immerse yourself in their way of life. From the traditional dress to the food, music, dance, and art, there is so much to learn and appreciate.

        One of the most interesting aspects of African culture is its oral tradition. Many communities across Africa have a rich storytelling tradition, where stories are passed down from generation to generation. These stories often teach important life lessons and are an integral part of the community's culture. You can experience this tradition firsthand by attending storytelling sessions or visiting local museums that showcase African art and artifacts.
        
        Another fascinating aspect of African culture is the vibrant music and dance scene. African music is known for its rhythm, melody, and unique instruments like the kora, djembe, and balafon. Traditional dances are an important part of African culture and are often performed during important ceremonies and events. You can attend local music and dance performances to experience the energy and vibrancy of African culture.
        
        Finally, African cuisine is a must-try for anyone visiting the continent. From the spicy flavors of West African cuisine to the exotic dishes of North Africa, there is something to suit every taste. Local markets and street vendors are the best places to sample authentic African dishes and learn about the ingredients and cooking methods used.
        
        In conclusion, Africa's cultural heritage is rich and diverse, and there is so much to explore and experience. By immersing yourself in the local communities, attending cultural events, and sampling the local cuisine, you can gain a deeper appreciation for the continent's history, traditions, and way of life.`
    }, {
        id: 1,
        postImage: guided_tour,
        title: `Top 5 Reasons Why a Guided Tour is the Best Way to Experience Africa`,
        summary: ` Discover why guided tours are the perfect way to experience the beauty and wonder of Africa. From expert guides to curated itineraries, guided tours provide the ultimate African adventure. In this blog post, we highlight the top five reasons why a guided tour is the best way to experience Africa.`,
        body: `Africa is a continent of natural beauty and diversity, from the majestic wildlife to the stunning landscapes. For many people, a trip to Africa is a once-in-a-lifetime experience, and making the most of it is crucial. One of the best ways to experience Africa is through a guided tour. Here are the top five reasons why:

        Expert Guides: When you embark on a guided tour, you'll have the opportunity to be led by expert guides who have extensive knowledge of the region. They can provide you with insight into the local culture, history, and wildlife, making your trip a truly enriching experience.
        
        Curated Itineraries: Guided tours offer curated itineraries that allow you to experience the best of Africa. From exploring the savannas of the Serengeti to visiting local villages, the itinerary is designed to provide a comprehensive and immersive experience.
        
        Safety and Security: Safety and security are paramount when traveling to a foreign country. Guided tours provide a level of safety and security that ensures peace of mind while exploring unfamiliar territories.
        
        Convenience: A guided tour takes the hassle out of planning a trip. From accommodations to transportation, everything is taken care of, leaving you to relax and enjoy the adventure.
        
        Unique Experiences: Guided tours often provide unique experiences that are not easily accessible to individual travelers. From behind-the-scenes wildlife encounters to private tours of cultural sites, guided tours provide a unique and unforgettable adventure.
        
        In conclusion, a guided tour is the best way to experience the beauty and wonder of Africa. From expert guides to curated itineraries and unique experiences, a guided tour provides a safe, convenient, and unforgettable adventure.
        
        
        
        
        
        `
    }
]


export const users = [
    {
        userFirstName: "Ivan",
        userSecondName: "Mujuni",
        userEmail: "userone@gmail.com",
        userTel: "0751 076 860",
        userLevel: "User",
        dpImage: dp,
        phoneVerified: false,
        emailVerified: false,
        lastSeen: '2 min ago'
    },
    {
        userFirstName: "Magambo",
        userSecondName: "Mathias",
        userEmail: "usertwo@gmail.com",
        userTel: "0751 884 860",
        userLevel: "User",
        dpImage: dp,
        phoneVerified: false,
        emailVerified: false,
        lastSeen: 'active'
    },

    {
        userFirstName: "Walter",
        userSecondName: "Tondi",
        userEmail: "userthree@gmail.com",
        userTel: "0751 076 912",
        userLevel: "Admin",
        dpImage: dp,
        phoneVerified: false,
        emailVerified: false,
        lastSeen: '3 hrs'
    }

]