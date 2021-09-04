import LeaderShip from "../../assets/services/comprehensive.svg";
import Awards from "../../assets/services/awards.svg";
import Dialogue from "../../assets/services/dialogue.svg";
import Restoration from "../../assets/services/restoration.svg";
import Observation from "../../assets/services/observation.svg";
import Forum from "../../assets/services/forum.svg";
import ImageOne from "../../assets/services/mockpic.jpg";
import ImageTwo from "../../assets/services/mockpic2.jpg";
import ImageThree from "../../assets/services/mockpic3.jpg";
import Prefect from "../../assets/services/prefect.jpg";
import Iyambo from "../../assets/services/iyambo.jpg";
import Dialog from "../../assets/services/dialog.jpg";
import Flag from "../../assets/services/namibiaflag.png";
import Election from "../../assets/services/election.jpg";
import ForumBg from "../../assets/services/forum.jpg";




export const servicesData = [
    {
        name: "Comprehensive Leadership Development Training",
        logo: LeaderShip,
        background: Prefect,
        images: [
            ImageOne,
            ImageTwo,
            ImageThree
        ],
        info: [
            {
                type: "paragraph",
                data: "Improve LRC/SRC’S standard of leadership by honing interpersonal and communication skills, their ability to evaluate their progress and track record and moulding them to be active participants in democratic structures."
            },
            {
                type: "list",
                data: [
                    "Engage NID and foster an operational agreement.",
                    "Engage with the respective school management boards to foster a memorandum of understanding for the organization to train their LRCs.",
                    "Engage with the respective SRC’s and universities to foster a memorandum of understanding.",
                    "Engage sponsor/donors to assist in any way.",
                    "Draft a document detailing all the targeted LRC’S/SRC’s in each region."
                ]
            }
        ]
    },
    {
        name: "Abraham Iiyambo achievement  awards",
        logo: Awards,
        background: Iyambo,
        images: [
            ImageOne,
            ImageTwo,
            ImageThree
        ],
        info: [
            {
                type: "paragraph",
                data: "Promote social transformation, inclusivity, and excellence within public leadership by awarding to exceptional youth who have created positive social change within their community. "
            },
            {
                type: "list",
                data: [
                    "Engage the minister of youth, sports, and culture to foster a memorandum of understanding with the minister in respect of the minister presenting the awards to the respectful winners.",
                    "Establish the selection committee.",
                    "Engage sponsors and strategic partners in sponsoring the awards.",
                ]
            }
        ]
    },
    {
        name: "Social Community Dialogue Initiative",
        logo: Dialogue,
        background: Dialog,
        images: [
            ImageOne,
            ImageTwo,
            ImageThree
        ],
        info: [
            {
                type: "paragraph",
                data: "Increase civic engagement by providing a platform through which citizens can learn and actively participate within democratic processes."
            },
            {
                type: "list",
                data: [
                    "Set up the Social Notice.",
                    "Engage sponsors/donors and various food outlets and restaurants for the social night",
                    "Devise mechanisms to create incentives for people to actively participate in the polls on the organization’s website.",
                ]
            }
        ]
    },
    {
        name: "Community Restoration Program",
        logo: Restoration,
        background: Flag,
        images: [
            ImageOne,
            ImageTwo,
            ImageThree
        ],
        info: [
            {
                type: "paragraph",
                data: "Increase the youth’s engagement and participation within the local Authorities’ programs by encouraging them to be involved in a series of community restoration programs that further the local authority’s developmental agenda."
            },
            {
                type: "list",
                data: [
                    "Engage sponsors/donors to assist financially in the organization of the national events.",
                    "Create a budget detailing how much the organization is allocating for organization of each national day’s event.",
                    "Find alternatives to cover for any financial deficit in the allocated budget.",
                    "Formulate a mechanism of tracking the number of people participating in the national day events and device a mechanism to increase participation and awareness on the significance of  the national days."
                ]
            }
        ]
    },
    {
        name: "Election Observation",
        logo: Observation,
        background: Election,
        images: [
            ImageOne,
            ImageTwo,
            ImageThree
        ],
        info: [
            {
                type: "paragraph",
                data: "Build the confidence of young people within democratic structures by improving their overall understanding of democratic processes from a grassroots level through the observations of the LRC/SRC elections and any other election’s that will help further their understanding of democratic structures."
            },
            {
                type: "list",
                data: [
                    "Partner up with the Namibian institute for democracy (NID) to provide training for the election observers.",
                    "Engage with the electoral commissioners of the relevant universities in the aim of entering a memorandum of understanding for the observation of the SRC elections.",
                    "Engage the respective school management boards while working in conjunction with the ministry of education to foster a memorandum of understanding for the observation of the LRC elections.",
                    "Formulate a budget for the observation of the elections.",
                    "delegate members of the management committee to oversee the election observations"
                ]
            }
        ]
    },
    {
        name: "LRC Forum",
        logo: Forum,
        background: ForumBg,
        images: [
            ImageOne,
            ImageTwo,
            ImageThree
        ],
        info: [
            {
                type: "paragraph",
                data: "Empower LRC’s to understand the importance of democratic structures, by providing a platform through which they can learn from each other and consolidate support and assistance in the furtherance of their projects."
            }
        ]
    }
]