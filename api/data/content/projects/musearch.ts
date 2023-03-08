export const content = {
  cta: {
    message: {
      title: 'Enter the world of art...',
      texts: [
        `Art is an essential part of human culture and has been for thousands of years. It is a powerful form of self-expression that allows us to communicate our emotions, thoughts, and ideas. Art can provide us with a deeper understanding of the world around us. It encourages creativity and imagination, which are essential for personal growth and inspires us to think outside the box and come up with new ideas and solutions. Art can have therapeutic benefits, helping us to relax and reduce stress.`,
        `Knowing all these benefits of communing with art, will we be surprised that as many as <strong>68% of the Americans avoid museums?</strong> The <strong>three main reasons</strong> are: the belief that <strong>there is nothing interesting</strong> for them, <strong>difficulty in finding a place</strong> that will match their interests and <strong>negative precedent experiences</strong> such as queues.`,
      ],
    },
    brand: {
      title: 'Musearch',
      text: 'A mobile application to help people discover the culture around them, from a personalized search for cultural objects to the purchase of tickets.',
    },
  },
  caseSummary: {
    title: 'Case summary',
    actionButton: 'Skip ahead to final design',
    statistic: `
      <h4>"There are about <strong>55,000</strong> museums in <strong>202</strong> countries"</h4>
      <span> - according to the Museums of the World</span>
      `,
    lightSections: [
      {
        title: 'Product vision',
        texts: [
          'Mobile application that makes it easier for users to access museums around the world by searching based on their current location or keywords of interest.',
        ],
      },
      {
        title: 'Problem',
        subTitles: [
          'I noticed that with the progress of digitization, there is an increasing problem with keeping “everything you need” in one place.',
          'In addition, the number of objects can be overwhelming and researching each of them separately consumes a large amount of time.',
        ],
        texts: [
          'Museums want to seemingly make it easier for visitors to obtain access by creating dedicated websites and applications, so that the user has to set up multiple accounts just to buy a ticket. Most often, the account is useless for anything else, and the user forgets about its existence. The websites of different museums and cultural objects are built differently and are often not optimized for mobile devices. This makes it difficult to find the desired information and causes frustration for users.',
        ],
      },
    ],
    darkSections: [
      {
        title: 'Solution',
        subTitles: [
          'Musearch is an app for both true art lovers who do not want to miss any exhibition and for tourists visiting museums on a rainy day.',
        ],
        texts: [
          'The goal was to create an intuitive and user-friendly application that allows users to easily find and explore museums and purchase tickets directly from their mobile devices.',
          'All admission information, current exhibitions, news, guides are in one app. By having a profile in the application, the user has access to personalized recommendations based on selected interests.',
        ],
      },
    ],
    images: [
      { url: 'case-summary-1.png', alt: 'Onboarding step 1' },
      { url: 'case-summary-2.png', alt: 'Onboarding step 2' },
      { url: 'case-summary-3.png', alt: 'Onboarding step 3' },
      { url: 'case-summary-4.png', alt: 'Onboarding step 4' },
      { url: 'case-summary-5.png', alt: 'Onboarding step 5' },
      { url: 'case-summary-6.png', alt: 'Onboarding step 6' },
    ],
    processHighlights: [
      {
        title: 'ROLE',
        text: 'research, user flows, sketching, wireframing, visual design, prototyping (Individual project)',
      },
      {
        title: 'PROJECT PLAN',
        text: 'one week of discovery and ideation, followed by a week of prototyping and designing. /February 2023',
      },
      {
        title: 'TOOLS',
        text: 'Figma, Adobe Illustrator',
      },
    ],
  },
  discovery: {
    title: 'Discovery and Ideation',
    subSections: [
      {
        texts: [
          'The purpose of this research is to understand the needs and requirements of different types of museum-goers in order to design a user-friendly mobile application that will meet their needs and expectations. The research will also help to identify potential user personas and use cases, which will inform the design of the app’s interface, features, and functionality. The research will also provide insights into the target audience’s pain points and desires, which will help to ensure that the app is user-centered and meets the needs of a wide range of museum-goers.',
          'Bearing in mind the needs of the user, we cannot forget about the other side. During the research, I want to determine how the use of the application can affect the development of cultural facilities, especially those smaller and less known that may seem less attractive to tourists.',
        ],
      },
      {
        title: 'Competitive research',
        texts: [
          'Competitor analysis is an important step in the design and development of a mobile application. It helps to understand the market and identify the strengths and weaknesses of existing solutions, which can inform the design of the new app.',
          'I focused on the analysis of two competitors, one of them is highly recognizable around the world, the other is definitely less popular but its functionality is more suitable for our product for comparison purposes.',
        ],
        competitors: [
          {
            name: 'Tripadvisor.com',
            strengths: {
              title: 'Strengths',
              items: ['large catalogue', 'recognition', 'many photos', 'recommendations', 'reviews'],
            },
            weaknesses: {
              title: 'Weaknesses',
              items: [
                'no info about current exhibitions, events and art',
                'many complaints from users about reservation system (errors and invalid tickets',
                'some admission info is invalid',
                'to see more about museum you have to visit a page sometimes hard to navigate and search for specific results',
                'better for tourists than just art lovers',
              ],
            },
          },
          {
            name: 'whichmuseum.nl',
            strengths: {
              title: 'Strengths',
              items: [
                'well-developed museum classification system',
                'reviews',
                'user friendly, not overcomplicated',
                'navigation',
              ],
            },
            weaknesses: {
              title: 'Weaknesses',
              items: [
                'only some places have ticket booking options',
                'some admission info is invalid',
                'only 30 countries available',
                'advanced search is not reliable',
                'no/invalid info about current exhibitions, events and art',
              ],
            },
          },
        ],
      },
      {
        title: 'Research',
        texts: [
          `I started by researching the existing market tailored for tourists and art lovers. I invited our potential users to answer open-ended questions and share their habits and experiences. After questionnaires and multiple forum reviews, I gathered 34 responses, mostly from groups related to the topic on social media. This allowed me to take a broader look at people's expectations, which differ depending on their attitude to culture and art, as well as the inconveniences they have experienced in the past.`,
          `I was able to choose and highlight several user profiles that represent different approaches. During the interviews, I learned that the key to attracting people to museums and art institutions is to make it easy for them to find a place that interests them and then get all the information in a quick and uniform way. For people already associated with art, additional functionality is important, such as news and notifications about upcoming exhibitions.`,
          `To get a better understanding of the audience, I chose 5 participants who represent the users.`,
        ],
      },
      {
        title: 'Interviews',
        interviews: [
          {
            person: 'Linda, 40',
            interview: [
              {
                question: 'Can you tell us a little bit about yourself and your experience with museum-related apps?',
                answer:
                  'Sure, I’m a 40-year-old and I have three kids. I like to plan fun and educational activities for my family and spend a lot of time together.',
              },
              {
                question: 'How do you usually plan your museum visits?',
                answer: `I usually do a bit of research online, or I ask friends and family for recommendations. I also like to check the museum's website to see if they have any special exhibitions or events that might be of interest to my kids.`,
              },
              {
                question:
                  'How do you think a new app designed specifically for searching museums around the world would benefit you?',
                answer:
                  'I think a new app like this would be incredibly helpful. It would make it easier for me to find and plan museum visits for my family, as I would have all the information I need in one place. I need a quick access to everything. Children are very impatient.',
              },
              {
                question: 'What features would you like to see in such an app?',
                answer: `I would like to see a location-based search function, so I can easily find museums near us. I’d also like to see a way to filter results based on age-appropriate exhibits and events for kids. And finally, it would be great if the app had a way for me to purchase tickets for the whole family, without having to leave the app or wait in line with the kids.`,
              },
            ],
          },
          {
            person: 'Alex, 21',
            interview: [
              {
                question: 'Can you tell us a little bit about yourself and your experience with museum-related apps?',
                answer: `Sure, I’m a 21-year-old art student and I love visiting museums. I have a particular interest in one museum, and I visit it very often.`,
              },
              {
                question: 'How do you usually keep up to date with news and events at your favorite museum?',
                answer: `I usually check their website or social media accounts, but I find it can be a bit time-consuming. I’d like to have all the information I need in one place, so I can quickly see what’s new.`,
              },
              {
                question:
                  'How do you think a new app designed specifically for searching museums around the world would benefit you?',
                answer: `I think a new app like this would be incredibly helpful, as it would give me all the information I need about my favorite museum in one place. If the app was user-friendly and had all the information I need, I would use it all the time.`,
              },
              {
                question: 'What features would you like to see in such an app?',
                answer: `I would like to see a way to save my favorite museum, so I can quickly access information about it. I’d also like to see a section for news and events, so I can stay up to date with what’s happening at my favorite museum. And finally, it would be great if the app had a way for me to purchase tickets directly, without having to leave the app.`,
              },
            ],
          },
          {
            person: 'Abraham, 70',
            interview: [
              {
                question: 'Can you tell us a little bit about yourself and your experience with museum-related apps?',
                answer: `Sure, I’m a 70-year-old retired person and I enjoy visiting museums. However, I have some mobility issues and use a wheelchair, so I need to plan my visits carefully.`,
              },
              {
                question: 'How do you usually plan your museum visits?',
                answer: `I usually ask friends for recommendationsand I do a bit of research online. I also like to check if the museum is accessible for wheelchairs and if they have any special facilities or services available.`,
              },
              {
                question:
                  'How do you think a new app designed specifically for searching museums around the world would benefit you?',
                answer: `I think a new app like this would be incredibly helpful, as it would make it easier for me to plan my museum visits. If the app had a clear and user-friendly search function, with information about accessibility and special facilities, I would be able to quickly find museums that I can visit without any issues.`,
              },
              {
                question: 'What features would you like to see in such an app?',
                answer: `I would like to see a location-based search function, so I can easily find museums near me. I’d also like to see a simple way to filter results based on accessibility and facilities for disabled visitors. Also information about parking lots is useful for me. And finally, I’d like to see a clear and easy-to-use ticket purchasing process, with the possibility of having a ticket in the application, and not only in an additional pdf file.`,
              },
            ],
          },
          {
            person: 'Josh, 30',
            interview: [
              {
                question: 'Can you tell us a little bit about yourself and your experience with museum-related apps?',
                answer: `Sure, I’m a 30-year-old graphic designer and I love visiting museums. I’ve used a few museum-related apps before, but I’ve never been completely satisfied with them.`,
              },
              {
                question:
                  'Can you tell us about your experience using those apps? What were the main issues you faced?',
                answer: `Well, the first issue I had was finding the right museum. The search function wasn’t very intuitive and it was hard to find what I was looking for. Once I found a museum, the information wasn’t always up to date, and I often had to double check with the museum’s website to make sure the hours and prices were correct. Finally, buying tickets was a hassle, as I had to go back and forth between the app and the museum’s website.`,
              },
              {
                question:
                  'How do you think a new app designed specifically for searching museums around the world would benefit you?',
                answer: `I think a new app designed specifically for museums would be a huge improvement. If it had a clear and user-friendly search function, up-to-date information, and a simple ticket purchasing process, I would use it all the time. It would make visiting museums much more enjoyable and stress-free.`,
              },
              {
                question: 'What features would you like to see in such an app?',
                answer: `I would like to see a location-based search function, so I can easily find museums near me. I’d also like to see a simple way to filter results based on specific keywords, such as “modern art” or “history.” And finally, I’d like to see a clear and easy-to-use ticket purchasing process, without having to leave the app.`,
              },
            ],
          },
          {
            person: 'Tony, 25',
            interview: [
              {
                question: 'Can you tell us a little bit about yourself and your experience with museum-related apps?',
                answer: `Sure, I’m a 25-year-old office worker and I rarely visit museums. I’ve never used a museum-related app before.`,
              },
              {
                question: 'Why do you rarely visit museums?',
                answer: `To be honest, I just don’t have much interest in them. But, I do like to try new things and visit new places when I’m on vacation.`,
              },
              {
                question: 'How do you usually plan your museum visits when you’re on vacation?',
                answer: `I usually ask friends and family for recommendations, or just look up popular museums in the area online. But, I don’t really have a specific process for finding museums.`,
              },
              {
                question:
                  'How do you think a new app designed specifically for searching museums around the world would benefit you?',
                answer: `I think a new app like this could be really helpful, especially when I’m on vacation and looking for things to do. It would be great to have all of the information I need about museums in one place, so I can easily compare and choose which ones to visit.`,
              },
              {
                question: 'What features would you like to see in such an app?',
                answer: `I would like to see an easy-to-use search function, where I can filter results based on location and type of museum. I’d also like to see clear and concise information about each museum, including admission prices, hours of operation, and any special exhibitions or events. And finally, it would be great if the app allowed me to purchase tickets directly, so I can save time and avoid lines at the museum.`,
              },
            ],
          },
        ],
      },
    ],
  },
  customerJourney: {
    title: 'So, who are the user personas?',
    text: `I created two characters based upon interviews to further understand users' needs`,
    personas: [
      {
        name: 'average tourist',
        motto: '"Ok, we can go"',
        image: {
          url: 'average-tourist.png',
          alt: 'Average tourist persona',
        },
        properties: [
          {
            name: 'Behaviours:',
            text: 'limited time, wants to have time for various activities during their vacation',
          },
          {
            name: 'Goals:',
            text: `wants to visit "must-see", doesn't want to waste time in lines`,
          },
          {
            name: 'Needs:',
            text: 'searching and scheduling according to available information and limited time, quick access and everything in one place',
          },
        ],
      },
      {
        name: 'avid art lover',
        motto: `"I'd love to go!"`,
        image: {
          url: 'art-lover.png',
          alt: 'Art lover persona',
        },
        properties: [
          {
            name: 'Behaviours:',
            text: 'time-poor, has problem of keeping up to date with news from museums due to time-comsuming research, knows his interests',
          },
          {
            name: 'Goals:',
            text: 'wants to discover more and broaden interests, be updated',
          },
          {
            name: 'Needs:',
            text: 'recommendations based on personalized lists, notifications',
          },
        ],
      },
    ],
    journeyMaps: [
      {
        urlBig: 'average-tourist-journey-big.png',
        urlSmall: 'average-tourist-journey-small.png',
        alt: 'Average tourist journey map',
      },
      {
        urlBig: 'art-lover-journey-big.png',
        urlSmall: 'art-lover-journey-small.png',
        alt: 'Art lover journey map',
      },
    ],
  },
};
