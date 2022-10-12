# Leboncoin frontend technical test — Maël Martin

## Overview

Creation of a `Next.js` based `React` app to display and use a simple chat app, served by a `json-server` db, for a job interview at Leboncoin.

## Installation

- `git clone https://github.com/Bryndille1701/frontend-technical-test`
- `cd frontend-technical-test`
- `npm install`
- `npm run start-server`
- `npm run dev`

## Added dependencies

- `react-query` for client-side fetching, state invalidation and re-fetching.
- `typescript` as a typed super-set for Javascript.
- `sass` as a styling language, with `CSSModules`.

## Fetching

Some data is fetched server-side and stays inert on the client, like conversations.

Some data, on the other hand, is first gathered on server, and re-fetched on client, like messages. This helps to get the first data very quickly, and then get an updated version of said data.

## Routes

Two new routes were added to the `Next.js` app :

- `/conversations`, where you can find all your active conversations
- `/conversations/[id]`, where you can find previous messages and send new ones for a given conversation.

Both routes use a common `Layout` component, responsible of displaying the list of conversations in a sidebar.

## Lacking features

- **Auth** : Sadly, I wasn’t able to add an auth system.
- Accessibility : I wish I had time to add accessibility features, such as regions, aria roles, etc.
- **Adding conversation** : I designed all the features and components to add new conversations, but I wasn’t able to adapt the json-server to store the data correctly.
- **User data** is refetched too often, and it would be better to have it globally stored for use in different components
- Lack of a **global store**, with Redux or useContext, to store fetched data, make it available through the app, and reduce refetching / prop waterfalling.
- Lack of testing, mainly because of a lack of knowledge. I prefered to show what I can do today, knowing I need to learn some stuff in the future.

## Struggles / difficulties

- I had problems at first for fetching data from the API, because of a misconfiguration of my `etc/hosts` file on my machine.
- Using **CSS Modules** was new to me. I usually prefer a global stylesheet for my components, but it was fun.

## Conclusion

I spent around 5-6 hours on the project, a little more than what was asked, because I wanted to finish some responsive aspects and add the ability to create new conversations, which I failed :'(.

This project was interesting and fun. Thank you for your attention and the time spent discovering my work.
