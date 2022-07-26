---
templateKey: project-post
title: Fizzy
date: 2022-07-26T20:07:45.826Z
draft: false
description: Fizzy is an open-source fitness app that helps you log your
  workouts and keep track of you workouts.
github: https://github.com/dylanwe/fizzy-fitness-app
tags:
  - TypeScript
  - MySQL
featuredimage: /static/img/fizzy-thumbnail.png
---
![Fitness app homepage and workout page](fizzy-thumbnail.png "Fitness app homepage and workout page")

This project was made as I read up more about fitness and the effects it had on the body and mind. I was heavily inspired by the app [Strong](https://www.strong.app/) which doesn't have a website, so I decided to try and make my own version of that. The name Fizzy is quite silly I'll admit that, it came from physique then became Physi and finally Fizzy.

**Here is a [demo video](https://youtu.be/RcGxFgKqzA4) of the project.**
---

## 🧑🏻‍💻 The code

During school I worked on a [project](https://github.com/PAD-Team-6-2022/Deliverex) which was build with Express.js in the MVC structure. I quite liked working more with Node.js so when I decided to do a side project I started using Node.js and Express again, but I also wanted to try something new, so I added TypeScript for the backend and frontend.

TypeScript is a superset of JavaScript meaning that in my experience translates nicely. What I loved about using TypeScript was the addition of types, meaning I could write safer code and it provided me with better hints on what I wanted to do. An example of types is shown below, where we see the type for `id` = `number` and the return type being `Promise<User>`.

```typescript
/**
* Get a user by his id
*
* @param id the id of the user
* @returns a user
*/
export const getUserById = async (id: number): Promise<User> => {
	const [users]: any = await db.query(
		'SElECT id, email, username, apikey FROM user WHERE id = ?',
		[id]
	);
	
	return users[0] as User;
};
```

![Fizzy product view](fizzy-showcase.png "Fizzy product view")

## 🧑🏻‍🏫 Things I learned

* Writing TypeScript
* Adding custom types
* Adding user authentication with [Passport.js](https://www.passportjs.org/)

## 📌 Things I would do differently

I happen to be reusing some views a lot, which makes me think that going with a framework like React, Svelte, or Vue or their meta framework Next, Nuxt, or Svelte kit would have been better a better fit for this project. I will be using one of these frameworks in my next school year, making it quite useful to already have some experience with it before then.

Another thing I would have done is look more into types because I still added a lot of `any` types.