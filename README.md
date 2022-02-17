![Battlesnake Logo](https://media.battlesnake.com/social/StarterSnakeGitHubRepos_JavaScript.png)

This is a implementation of the [Battlesnake API](https://docs.battlesnake.com/references/api) in JavaScript. 

## Technologies Used

* [JavaScript](https://www.javascript.com/)
* [Node.js](https://nodejs.dev/)
* [Express](https://expressjs.com/)


## Quickstart

The [Quick Start Coding Guide](https://docs.battlesnake.com/guides/getting-started) provides the full set of instructions to customize, register, and create your first games with your Battlesnake! So then you can use this project locally or deploy it in cloud.

### Prerequisites

* A free [Battlesnake Account](https://play.battlesnake.com/?utm_source=github&utm_medium=readme&utm_campaign=javascript_starter&utm_content=homepage)

---

## Customizing Your Battlesnake

Locate the `info` function inside [src/configs/top-level.json](src/configs/top-level.json). You should see a line that looks like this:

```javascript
{
  apiversion: "1",
  author: "",
  color: "#888888",
  head: "default",
  tail: "default"
}
```
This function is called by the game engine periodically to make sure your Battlesnake is healthy, responding correctly, and to determine how your Battlesnake will appear on the game board. See [Battlesnake Personalization](https://docs.battlesnake.com/references/personalization) for how to customize your Battlesnake's appearance using these values.

Whenever you update these values, go to the page for your Battlesnake and select 'Refresh Metadata' from the option menu. This will update your Battlesnake to use your latest configuration and those changes should be reflected in the UI as well as any new games created.

## Rules

See the [Battlesnake Game Rules](https://docs.battlesnake.com/references/rules) for more information on playing the game, moving around the board, and improving your algorithm.

## Running Tests

This Starter Project comes with a very simple test suite for you to expand! Located in `tests/*.spec.js` you can run them using the following command:
```shell
npm test
```
---

## Playing Battlesnake

### Completing Challenges

If you're looking for the Single Player Mode of Battlesnake, or something to practice with between events, check out [Challenges.](https://docs.battlesnake.com/guides/quick-start-challenges-guide)

### Joining a Battlesnake Arena

Once you've made your Battlesnake behave and survive on its own, you can enter it into the [Global Battlesnake Arena](https://play.battlesnake.com/arena/global) to see how it performs against other Battlesnakes worldwide.

Arenas will regularly create new games and rank Battlesnakes based on their results. They're a good way to get regular feedback on how well your Battlesnake is performing, and a fun way to track your progress as you develop your algorithm.

## Resources

All documentation is available at [docs.battlesnake.com](https://docs.battlesnake.com), including detailed Guides, API References, and Tips.
