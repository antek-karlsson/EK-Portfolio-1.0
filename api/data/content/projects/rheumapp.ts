export const content = {
  cta: {
    message: {
      title: 'Living with chronic disease',
      texts: [
        `Rheumatic autoimmune diseases are a group of chronic conditions that occur when the immune system attacks healthy tissues. These diseases can affect various parts of the body, including the joints, muscles, bones, and organs.`,
        `Rheumatic autoimmune diseases are often characterized by inflammation, pain, and stiffness, and can significantly impact an individual's quality of life.`,
        `It is estimated that <strong>autoimmune diseases affect 10% of the world's population.</strong> They are often difficult to diagnose due to non-specific symptoms.`,
      ],
    },
    brand: {
      title: 'RheumApp',
      text: 'A mobile application to help people understand their condition and improve daily lives.',
    },
  },
  caseSummary: {
    title: 'Case summary',
    actionButton: 'Skip ahead to final design',
    slogan: `Effective treatment of these diseases requires a holistic approach.`,
    lightSections: [
      {
        title: 'Product vision',
        texts: [
          'Mobile application that makes it easier for users to monitor their condition both for self-awareness and to improve communication with the doctor during a medical appointment. It is also intended to be a source of information created and verified by specialists, in accordance with the latest scientific knowledge.',
        ],
      },
      {
        title: 'Problem',
        subTitles: [
          `Managing these symptoms requires ongoing monitoring of medication usage, symptom patterns, and other health factors, as well as making lifestyle modifications such as diet and exercise. However, keeping track of all this information can be challenging and overwhelming for patients.`,
          `Additionally, independent and incompetent search for medical knowledge on the Internet may end badly for the patient.`,
        ],
        texts: [
          `
            The diagnosis of an autoimmune disease is always difficult for the patient and his family. The fact that the disease is chronic and lifelong forces the patient to rearrange his entire life to improve his daily functioning.
            There is no one-size-fits-all approach to understanding or treating the disease - everyone experiences the disease in their own way, with varying severity of symptoms.
          `,
        ],
      },
    ],
    darkSections: [
      {
        title: 'Solution',
        subTitles: [`RheumApp is a mobile application for people suffering from chronic rheumatic diseases.`],
        texts: [
          `The goal was to create an intuitive and user-friendly application that helps users of all ages to easily monitor the progress of the disease, remind of medication and educate to improve everyday functioning.`,
          `One of the key benefits of the RheumApp is its ability to centralize all information related to the user's disease management. Medication history, specialist visits, blood test results, and x-ray reports can all be accessed through the application, providing a comprehensive overview of the user's treatment history. This feature also enables users to monitor the course of their disease over time and identify trends or patterns in their symptoms`,
          `Another critical feature of the RheumApp is its ability to facilitate better cooperation between patients and doctors. By collecting and transferring information related to the user's disease management, the application can help healthcare providers gain a more comprehensive understanding of the user's condition and make more informed treatment decisions. This information-sharing can also help patients become more engaged in their own care and make more informed decisions about their treatment plan.`,
        ],
      },
    ],
    hero: {
      title: `Enhancing everyday living`,
      text: `Keep track of your symptoms, medication and appointments in one place and get personalized tips on diet and excercise to help manage your condition`,
      logo: { url: 'rheumapp-logo.png', alt: 'Rheumapp - logo' },
      image: { url: 'case-summary-ra.png', alt: 'Rheumapp by Ewelina Karlsson' },
    },
    processHighlights: [
      {
        title: 'ROLE',
        text: 'research, user flows, sketching, wireframing, visual design, prototyping (Individual project)',
      },
      {
        title: 'PROJECT PLAN',
        text: `one week of discovery and ideation, followed by a week of prototyping and designing. \n/April 2023`,
      },
      {
        title: 'TOOLS',
        text: 'Figma, Adobe Illustrator, Adobe AfterEffects',
      },
    ],
  },
  designProcess: {
    title: 'Design process',
    image: { url: 'design-process-ra.png', alt: 'Design process - Rheumapp' },
    steps: [
      {
        title: 'Empathize',
        subSteps: [`Competitive research`, `Survey`, `User Interviews`],
      },
      {
        title: 'Define',
        subSteps: [`Interview analysis`, `User Personas`, `Empathy Map`, `Customer Journey Map`],
      },
      {
        title: 'Ideate',
        subSteps: [`Idea Prioritisation`, `Sketching`, `User flows`],
      },
      {
        title: 'Prototype',
        subSteps: [`Wireframing`, `Style Guide`, `Low-fidelity prototype`, `UI Kit`, `Final Prototype`],
      },
      {
        title: 'Test',
        subSteps: [`Feedback`, `Outcomes`],
      },
    ],
  },
  discovery: {
    title: 'Discovery and Ideation',
    step: 'STEP: EMPATHIZE',
    subSections: [
      {
        texts: [
          `The purpose of this research is to understand the needs and requirements of people suffering from chronic rheumatic diseases, in order to design a user-friendly mobile application that will meet their needs and expectations. The research will also help to identify potential user personas and use cases, which will inform the design of the app's interface, features, and functionality.`,
          `The research will focus on identifying the pain points and difficulties experienced by people with rheumatic diseases in their daily lives, such as tracking their symptoms, managing medication, and scheduling appointments with healthcare providers. By understanding the needs and challenges of this target audience, RheumApp can be designed to address these specific pain points and provide helpful solutions for everyday living.`,
          `Ultimately, the research will help to create a user-centered application that meets the needs of people with rheumatic diseases, while also providing valuable insights into how technology can be used to improve the lives of those living with chronic illnesses.`,
        ],
      },
      {
        title: 'Competitive research',
        texts: [
          'Competitor analysis is an important step in the design and development of a mobile application. It helps to understand the market and identify the strengths and weaknesses of existing solutions, which can inform the design of the new app.',
          'The market is full of health apps. Often, such applications are geared towards the largest possible group of users, because they are quite universal and do not address a specific problem. I focused on the analysis of three competitors, who are most concerned with rheumatic diseases.',
        ],
        competitors: [
          {
            name: 'MyRA',
            strengths: {
              title: 'Strengths',
              items: [
                'developed by a reputable organization in the field',
                'tracking symptoms and medication',
                'educational resources',
              ],
            },
            weaknesses: {
              title: 'Weaknesses',
              items: [
                'focused on rheumatoid arthritis',
                'technical issues reported by some users',
                'UI can be confusing for some users',
              ],
            },
          },
          {
            name: 'ArthritisPower',
            strengths: {
              title: 'Strengths',
              items: [
                'variety of features (symptom and medication tracking, connecting with healthcare providers)',
                'compatible with wearable devices',
                'collected data used for research purposes',
              ],
            },
            weaknesses: {
              title: 'Weaknesses',
              items: ['user interface can be overwhelming', 'no customization of symptoms', 'limited availability'],
            },
          },
          {
            name: 'Healthline',
            strengths: {
              title: 'Strengths',
              items: [
                'wide range of health-related information (including articles)',
                'access to healthcare providers (telemedicine system)',
                'symptom, medication and appointments tracking',
              ],
            },
            weaknesses: {
              title: 'Weaknesses',
              items: [
                'not specifically designed for arthritis patients',
                'overwhelming for some users',
                'limited availability (telemedicine)',
              ],
            },
          },
        ],
      },
      {
        title: 'Research and Survey',
        texts: [
          `
            I started by researching many thematic groups on social media platforms. 
            Groups bring together thousands of people with rheumatic diseases. 
            Users share their observations, opinions and ask many questions.
          `,
          `
            It was these questions (and answers) that made me realize that patients still know too little about their disease and do not know where to look for this knowledge. 
            I invited our potential users to answer closed-ended and open-ended questions and share their habits and experiences.
          `,
          `
            After questionnaires and multiple forum reviews, I gathered 56 responses, mostly from groups related to the topic on social media. 
            This allowed me to take a broader look at people's expectations.
          `,
        ],
        charts: [
          {
            title: 'How often do you see a rheumatologist?',
            image: { url: 'chart-ra-1.png', alt: 'Chart - Rheumatologist visit frequency' },
          },
          {
            title: 'Do you ever forget to take your medicine?',
            image: { url: 'chart-ra-2.png', alt: 'Chart - Remembering medication' },
          },
          {
            title:
              'Do you ever feel "blank" when visiting a doctor and forget to tell the doctor about various symptoms or worries that have occurred since your last visit?',
            image: { url: 'chart-ra-3.png', alt: 'Chart - Remembering symptoms' },
          },
          {
            title:
              'Do you carry out any observation of your health condition to provide the collected information to the doctor?',
            image: { url: 'chart-ra-4.png', alt: 'Chart - Health condition observation' },
          },
          {
            title:
              'Do you feel confused by the amount of different (often contradictory) information about the disease and treatment coming from many sources?',
            image: { url: 'chart-ra-5.png', alt: 'Chart - Information overflow' },
          },
          {
            title:
              'If a mobile application was designed, which would be both a reliable source of knowledge about the disease and could monitor your health, would you be interested in using it?',
            image: { url: 'chart-ra-6.png', alt: 'Chart - application interest' },
          },
          {
            title: 'How do you assess the knowledge provided by the doctor during a medical appointment?',
            image: { url: 'chart-ra-7.png', alt: 'Chart - Doctor knowledge assessment' },
          },
          {
            title: 'What sources of knowledge do you use?',
            image: { url: 'chart-ra-8.png', alt: 'Chart - knowledge sources' },
          },
        ],
        results: {
          title: 'From the survey results, I found out that:',
          items: [
            `Patients have a problem with providing information and symptoms to the doctor. This is probably due to the long time between appointments and inaccurate monitoring (or no monitoring at all).`,
            `Patients feel overwhelmed by the amount of different information. They often do not know where to look for knowledge or they get it from unreliable sources (social media, general interest websites etc.)`,
            `Patients do not feel sufficiently informed by their doctor. They feel rushed during the visit, lack of commitment and lack of initiative.`,
          ],
        },
      },
      {
        title: 'Interviews',
        texts: [
          `To get a better understanding of the audience, I chose 4 participants who represent the users.`,
          `I was able to choose and highlight several user profiles that represent different approaches. During the interviews, I learned that the key to design user-centered application is to take into account easy-to-use interface, reminders and notifications, reliable information and monitoring (with sharing option). Several interviewees expressed a desire to share data with their healthcare providers during appointments. This could be a valuable feature of product, as it could help facilitate more informed discussions between patients and providers.`,
        ],
        interviews: [
          {
            person: 'Rick, 75',
            interview: [
              {
                question: `Can you tell me a bit about yourself and your experience with rheumatic disease?`,
                answer: `I'm a retired teacher and I've been dealing with rheumatoid arthritis for the past 20 years. I try to stay active and do some gentle exercises every day. I also take my medications as prescribed by my doctor.`,
              },
              {
                question: 'Can you tell me a little bit about your experience with technology and smartphones?',
                answer: `Oh, I'm not very good with all those fancy new gadgets. But my granddaughter helped me set up a smartphone so I can make calls and send messages.`,
              },
              {
                question: 'Have you ever used any health-related apps on your phone?',
                answer: `No, I haven't. I don't really trust them, to be honest.`,
              },
              {
                question:
                  'What would you like to see in a health-related app that would make you feel more comfortable using it?',
                answer: `Well, I don't want anything too complicated. Just something that I can easily navigate and understand. And it would be nice if it reminded me when it's time to take my medications. And if I could share my information with my doctor on my medical appointments.`,
              },
              {
                question: `That's a great suggestion. How often do you have medical appointments?`,
                answer: `Oh, quite often. I see my doctor every two or three months.`,
              },
              {
                question: `And do you usually bring any information or notes to your appointments?`,
                answer: `Yes, I try to write down everything I can remember about my symptoms and how I'm feeling. But sometimes I forget things, and it's hard to remember everything when I'm at the doctor's office.`,
              },
              {
                question: `With an app, you could keep track of your symptoms and medications in one place, and easily share that information with your doctor. Would that be helpful?`,
                answer: `Yes, it would. As long as it's not too complicated to use. And if it could give me some notifications, that would be great too.`,
              },
            ],
          },
          {
            person: 'Janet, 35',
            interview: [
              {
                question: `Can you start by telling me a little bit about your experience with your condition?`,
                answer: `Of course. I've been dealing with my condition for a few years now, and it's been a struggle to keep track of my symptoms and how I'm feeling on a day-to-day basis.`,
              },
              {
                question: `I see. Have you tried keeping a symptom diary or journal to help with that?`,
                answer: `Yes, I've tried to do that in the past, but I always seem to fall off track and forget to keep up with it.`,
              },
              {
                question: `How does that impact your visits to the doctor?`,
                answer: `It can be difficult. I feel like I have a hard time remembering everything that's been going on with my symptoms, so I worry that I'm not able to give my doctor the full picture.`,
              },
              {
                question: `That's a valid concern. How do you think an app like RheumApp could help with that?`,
                answer: `Interviewee: I think it could be really helpful to have everything in one place and easily accessible. I like the idea of being able to track my symptoms and even set reminders to take my medications. And if I can have all of that information with me at my next doctor's appointment, I feel like I could have a more productive conversation with my doctor.`,
              },
              {
                question: `Is there anything in particular that you would want the app to include or any features that you think would be especially helpful?`,
                answer: `I think it would be really helpful to have a way to log my activities or daily routine, like how much I'm exercising or what I'm eating, to see if that's affecting my symptoms. And if the app could help me organize all of that information in a way that's easy to understand, that would be great.`,
              },
            ],
          },
          {
            person: 'Tom, 23',
            interview: [
              {
                question: `Can you tell me about your experience with managing your chronic rheumatic disease?`,
                answer: `Sure. It can be challenging at times to manage my symptoms, especially when I'm busy with work or other activities. But I'm pretty tech-savvy, so I use a lot of apps to help me stay on top of things.`,
              },
              {
                question: `Have you used any apps specifically for managing your chronic rheumatic disease?`,
                answer: `No, not really. I've tried a few, but they were all pretty clunky and hard to use. I feel like there's definitely a need for a better app that can help me track my symptoms, medications, and appointments in an easy and intuitive way.`,
              },
              {
                question: `What features would be most helpful to you in an app for managing your disease?`,
                answer: `Definitely reminders for medications and appointments, as well as a way to track my symptoms over time. It would also be great if the app could integrate with my fitness tracker so I could see how my activity level is affecting my symptoms.`,
              },
              {
                question: `How important is it for you to have access to educational resources about your disease?`,
                answer: `It's really important. There's so much information out there, and it can be hard to know what's trustworthy and what's not. I would love to have an app that could provide me with reliable and up-to-date information about my disease, as well as tips for managing my symptoms and living a healthy lifestyle.`,
              },
            ],
          },
          {
            person: 'Jake, 42',
            interview: [
              {
                question: `Can you start by telling me a bit about yourself and your experience with your condition?`,
                answer: `Ok, I'm a middle-aged person who has been living with my condition for a few years now. I'm pretty tech-fluent, so I don't have any issues using technology to help manage my condition. However, I do have some trouble with my doctor. He's not very open or talkative, and I feel like I'm not getting all the information I need from him. I only see him about once every four months, so it's tough to keep up with everything on my own.`,
              },
              {
                question: `I understand. Can you tell me a bit more about the challenges you face with your doctor?`,
                answer: `Yeah, so when I see him, he only answers my questions and doesn't really offer any extra information. It's like pulling teeth trying to get him to tell me what I need to know. And then when I leave the appointment, I'm not really sure if I've gotten all the information I need or if I'm doing everything correctly. It can be really frustrating.`,
              },
              {
                question: `Have you tried looking for information or support online or through social media?`,
                answer: `I have, but I'm always a bit hesitant to trust the information I find online. There's just so much out there, and it's hard to know what's reliable and what's not. I've looked into some online groups, but I don't feel like I can trust everything I read there either. I just wish there was a way to get reliable information and support without having to rely solely on my doctor.`,
              },
              {
                question: `Have you ever used any apps or tools to help manage your condition?`,
                answer: `Not really, no. I've looked into a few, but I'm not sure if they're really right for me. I need something that can help me keep track of my appointments, remind me to take my medications, and give me reliable information about my condition. I don't want something too complicated, but I also don't want something too basic that won't be helpful.`,
              },
              {
                question: `If there was an app that could offer all those features and more, would you be interested in trying it out?`,
                answer: `Definitely. I think an app like that could really help me manage my condition more effectively and give me the information and support I need between appointments. It would be great to have something that's reliable, easy to use, and tailored specifically to my needs.`,
              },
            ],
          },
        ],
      },
    ],
  },
  userPersona: {
    step: 'STEP: DEFINE',
    title: 'So, who is the user persona?',
    text: `I created one character based upon interviews to further understand users’ needs.`,
    persona: {
      name: 'Sarah, 40',
      title: 'Background',
      story: `
          Sarah was diagnosed with rheumatoid arthritis three years ago. 
          She struggled with the diagnosis at first, but has since come to terms with it and is proactive about managing her condition. 
          Sarah has a demanding job and a busy family life, but she makes time to attend doctor’s appointments and stay on top of her medications. 
          She relies heavily on her smartphone to manage her. 
          Unfortunately, she sometimes forgets to note down her symptoms and thoughts. 
          Her doctor answers her questions, but often she has trouble asking questions, feeling blank during the visit. 
          She later searches for information on her own.
        `,
      image: {
        url: 'user-persona-ra.png',
        alt: 'User Persona - Rheumapp',
      },
      properties: [
        {
          title: 'Goals and needs',
          items: [
            `To manage her condition effectively and minimize its impact on her daily life.`,
            `To stay informed about the latest developments in RA treatment and research.`,
            `To connect with others who have RA and share experiences and advice.`,
            `To be able to track her symptoms and medications easily and accurately.`,
            `To be able to communicate effectively with her doctor.`,
          ],
        },
        {
          title: 'Frustrations',
          items: [
            `She struggles with keeping track of her symptoms.`,
            `She also finds it difficult to navigate the overwhelming amount of information on the internet about RA, and is unsure which sources to trust.`,
            `She has had difficulty finding a doctor who is communicative and shows initiative.`,
          ],
        },
      ],
    },
    empathyMap: {
      title: 'Empathy map',
      image: { url: 'empathy-map-ra.png', alt: 'Empathy map - Rheumapp' },
      sections: [
        {
          title: 'SAYS',
          list: [
            `"I wish my doctor would give me more information and guidance during appointments."`,
            `"I often forget to track my symptoms and take my medications."`,
            `"It's hard to find reliable information about RA online."`,
            `"I'd like to connect with others who have RA and share experiences."`,
          ],
        },
        {
          title: 'THINKS',
          list: [
            `"I hope my condition doesn't worsen over time."`,
            `"I wonder if there are better treatment options available."`,
            `"I worry that I'm not doing enough to manage my condition."`,
            `"I wonder if my doctor is up-to-date with the latest treatments and research."`,
          ],
        },
        {
          title: 'DOES',
          list: [
            `Tracks symptoms and medications `,
            `Searches for information about RA online, on social media, blogs etc.`,
            `Attends doctor's appointments regularly.`,
            `Shares experiences with others in online RA support groups.`,
          ],
        },
        {
          title: 'FEELS',
          list: [
            `Frustrated when she forgets to track her symptoms and medications.`,
            `Overwhelmed by the amount of information available online about RA.`,
            `Anxious about the long-term effects of her condition.`,
            `Relieved to connect with others who have RA and share experiences.`,
          ],
        },
      ],
    },
  },
  ideaPrioritisation: {
    step: 'STEP: IDEATE',
    title: 'Idea Prioritisation',
    text: 'Hence, I identified the opportunity areas for RheumApp:',
    ideas: [
      {
        title: 'MyCalendar as main feature',
        items: [
          'Viewing data over time',
          'Tracking symptoms and treatment',
          'Creating personalized reports that can be shared with doctor',
        ],
      },
      {
        title: 'Easy to use for everyone',
        items: [
          'Three thematic sections indicated by different colors',
          'Straightforward navigation, always easily accessible',
          'Accessibility for all age groups',
        ],
      },
      {
        title: 'Opportunity to gain knowledge',
        items: [
          'Educational resources created and verified by experts',
          'Access to scientific database, useful links',
          'Useful lifestyle tips',
        ],
      },
    ],
  },
  prototyping: {
    step: 'STEP: PROTOTYPE',
    title: 'Prototyping',
    texts: [
      'After research and prioritisation of ideas I split my story into a few major user scenarios: registration, creating a shareable repor and entering information via MyCalendar.',
      'Then I started digging deeper sketching, wireframing and developing other features. The previews below show major steps taken in the prototyping stage.',
    ],
    subSections: [
      {
        title: 'USER FLOWS',
        texts: ['Major user scenarios allowed me to focus on the specific flows.'],
        images: [
          {
            urlSmall: 'user-flow-1-small.png',
            urlBig: 'user-flow-1-big.png',
            alt: 'User flow - registration',
          },
          {
            urlSmall: 'user-flow-2-small.png',
            urlBig: 'user-flow-2-big.png',
            alt: 'User flow - search',
          },
          {
            urlSmall: 'user-flow-3-small.png',
            urlBig: 'user-flow-3-big.png',
            alt: 'User flow - purchase',
          },
        ],
      },
      {
        title: 'SKETCHING',
        texts: [
          'After creating user flows I started sketching low-fidelity screens. It helped me to examine and rethink my ideas before putting everything together.',
        ],
        // image: { url: 'sketching-big.png', alt: 'Musearch - sketching' },
        image: { url: '', alt: 'Musearch - sketching' },
      },
      {
        title: 'WIREFRAMING',
        texts: [
          'After putting all the ideas on paper, I started to organize the elements of the interface and added more details by turning my sketches into wireframes in Figma. I focused on conveying the overall direction and hierarchy of UI. It gave me an outline of structure and layout of app. Wireframes helped me to test my concepts and understand how users will navigate my product before applying visual styles.',
          'The next step was to create mid-fidelity prototype. The main goal was to detect possible problems as soon as possible before design details and interactions were at an advanced stage.',
        ],
        image: {
          url: 'wireframes-big.png',
          alt: 'Musearch - wireframes',
        },
      },
    ],
  },
  branding: {
    title: 'BRANDING',
    texts: {
      main: 'The next step was to decide on brand identity and visual style.',
      secondary: 'I wanted to show the combination of both words, so I decided to use the logotype.',
    },
    fonts: {
      url: 'fonts.png',
      alt: 'Musearch - fonts',
    },
    colors: {
      primary: { title: 'PRIMARY', swatches: ['#A03F45', '#B5777B', '#EBEBEB'] },
      accents: {
        title: 'ACCENTS',
        swatchGroups: [
          { colors: ['#AAA993', '#D2D2C1', '#E5E5D9'] },
          { colors: ['#D7C7C1', '#F2E3DD', '#FFF4EF'] },
          { colors: ['#9B6670', '#D3A9B1', '#E4D5D8'] },
          { colors: ['#90A3B4', '#C8D5E1', '#ECF3F9'] },
        ],
      },
    },
    logo: {
      url: 'musearch-logo.png',
      alt: 'Musearch - logo',
    },
  },
  loFiPrototype: {
    title: 'LOW-FIDELITY PROTOTYPE',
    text: `Applying branding and bringing prototype closer to detailed version. 
      At this stage I focused on the hierarchy and prioritization of buttons, forms, inputs, checkboxes etc. I started designing cards for various uses. The next important step was to create reusable components`,
    image: {
      url: 'lo-fi-prototype.png',
      alt: 'Musearch - low fidelity prototype',
    },
  },
  outcomes: {
    title: 'Outcomes',
    subSections: [
      {
        title: 'How did potential users react?',
        text: 'High-fidelity prototype has been tested on 6 users in order to evaluate the expected functionalities and visual style. They could go through basic user flows and check micro-interactions. I received almost entirely positive feedback. Users loved the idea, visual style, two ways to search, personalization (Favourities, interests, recommendations etc.) and quick and easy way to buy tickets. An often mentioned advantage was one QR code for many tickets in the case of a family or group. However, all users came to the conclusion that the problem could be making the application available and widespread everywhere.',
      },
      {
        title: 'What are my thoughts?',
        text: 'Based on the finding from both research and potential users’ opinions I was able to locate and make minor adjustments. In order for this application to make sense as a product, it is necessary to integrate it with cultural institutions and facilities, both private and public. Possible further development would require strong business case and investors.',
      },
      {
        title: 'Next steps',
        text: 'In order to develop the application, it’s good to take into account additional user needs, called "nice to have" features. This will increase the application potential and competitiveness. These include reviews, loyalty and membership programs, educational features. ',
      },
    ],
  },
  finalDesigns: {
    title: 'Final designs',
    subSections: [
      {
        title: 'Onboarding',
        text: 'Welcome screen and beginning of onboarding with with short content describing the advantages of the application.',
        images: [
          {
            alt: 'Musearch - onboarding step 1',
            url: 'onboarding-1.png',
          },
          {
            alt: 'Musearch - onboarding step 2',
            url: 'onboarding-2.png',
          },
          {
            alt: 'Musearch - onboarding step 3',
            url: 'onboarding-3.png',
          },
          {
            alt: 'Musearch - onboarding step 4',
            url: 'onboarding-4.png',
          },
        ],
      },
      {
        title: 'Registration',
        text: 'The stages of creating an account are shown on progress bars, quick registration and then personalization of the user by choosing interests. To make it easier for the user to create an account, when password input is activated, the password security rules are shown.',
        images: [
          {
            alt: 'Musearch - registration step 1',
            url: 'registration-1.png',
          },
          {
            alt: 'Musearch - registration step 2',
            url: 'registration-2.png',
          },
          {
            alt: 'Musearch - registration step 3',
            url: 'registration-3.png',
          },
          {
            alt: 'Musearch - registration step 4',
            url: 'registration-4.png',
          },
          {
            alt: 'Musearch - registration step 5',
            url: 'registration-5.png',
          },
          {
            alt: 'Musearch - registration step 6',
            url: 'registration-6.png',
          },
          {
            alt: 'Musearch - registration step 7',
            url: 'registration-7.png',
          },
          {
            alt: 'Musearch - registration step 8',
            url: 'registration-8.png',
          },
        ],
      },
      {
        title: 'Searching by location',
        text: `Location-based search is the default search method available on the application's home page. After entering the city, available facilities appear. The results can be filtered.`,
        images: [
          {
            alt: 'Musearch - search by location step 1',
            url: 'search-location-1.png',
          },
          {
            alt: 'Musearch - search by location step 2',
            url: 'search-location-2.png',
          },
          {
            alt: 'Musearch - search by location step 3',
            url: 'search-location-3.png',
          },
        ],
      },
      {
        title: 'Admission',
        text: 'After choosing a museum, we can get information about opening hours, address and ticket prices. We have access to guides, maps and visit tips. When we decide to visit, we see a preview of the calendar to choose the date and we can choose the number of tickets for each age group. We still have quick access to the most important information related to a visit to the museum.',
        images: [
          {
            alt: 'Musearch - admission step 1',
            url: 'admission-1.png',
          },
          {
            alt: 'Musearch - admission step 2',
            url: 'admission-2.png',
          },
          {
            alt: 'Musearch - admission step 3',
            url: 'admission-3.png',
          },
        ],
      },
      {
        title: 'Purchasing tickets and checkout',
        subSections: [
          {
            text: 'To streamline the process of purchasing tickets, we go straight to checkout. Logged in users have the option to add their payment card for future transactions to make the purchase even more convenient. After the transaction is processed, a confirmation appears. We can go straight to the qr code, which is our purchased tickets. On the screen with the QR code (this screen is also accessible from the bottom navigation) we have access to the most important information and recommended exhibits.',
            images: [
              {
                alt: 'Musearch - checkout step 1',
                url: 'checkout-1.png',
              },
              {
                alt: 'Musearch - checkout step 2',
                url: 'checkout-2.png',
              },
            ],
          },
          {
            text: 'If we do not have active tickets, we can go straight to search from this view or see available recommendations.',
            images: [
              {
                alt: 'Musearch - checkout step 3',
                url: 'checkout-3.png',
              },
              {
                alt: 'Musearch - checkout step 4',
                url: 'checkout-4.png',
              },
            ],
          },
        ],
      },
      {
        title: 'Advanced search',
        text: 'The advanced search option allows you to search by keywords. We can, for example, find a museum with an exhibition of a specific artist.',
        images: [
          {
            alt: 'Musearch - advanced search step 1',
            url: 'search-advanced-1.png',
          },
          {
            alt: 'Musearch - advanced search step 2',
            url: 'search-advanced-2.png',
          },
          {
            alt: 'Musearch - advanced search step 3',
            url: 'search-advanced-3.png',
          },
          {
            alt: 'Musearch - advanced search step 4',
            url: 'search-advanced-4.png',
          },
        ],
      },
      {
        title: 'Personalization',
        subSections: [
          {
            images: [
              {
                alt: 'Musearch - personalization 1',
                url: 'personalization-1.png',
              },
              {
                alt: 'Musearch - personalization 2',
                url: 'personalization-2.png',
              },
            ],
          },
          {
            text: 'The user can edit their profile picture, account information, payment and security settings. The user also has access to the preview of recently visited museums and has the option of selecting areas of interest.',
            images: [
              {
                alt: 'Musearch - personalization 3',
                url: 'personalization-3.png',
              },
              {
                alt: 'Musearch - personalization 4',
                url: 'personalization-4.png',
              },
              {
                alt: 'Musearch - personalization 5',
                url: 'personalization-5.png',
              },
            ],
          },
        ],
      },
    ],
  },
};
