# Dark-Roasted Coffee Catalog + API
> Build a brewing hot mobile app screen & the API endpoints it needs.

<br>

- [🎯 **YOUR ASSIGNMENT**](#-your-assignment)
  > what you'll be doing
  - [Summary](#summary)
  - [Tasks](#tasks)
  - [Quality Assurance](#quality-assurance)

<br>

- [📑 **MORE INFO**](#-more-info)
  > other useful information
  - [Frequently Asked Questions (FAQ)](#-more-info)

<br>

## 🎯 **YOUR ASSIGNMENT** 
<details>
  <summary><b>🎭 Backstory</b></summary>

  Ahh, coffee. The universal beverage. In every country on the planet, people drink it. It's one of those special things that binds us together as human beings. No matter the culture we come from. Or the language we speak. Most of us share a common respect for a great cup of coffee. 

  No other beverage has inspired developers more. And so, we dedicate this challenge to coffee. A universal challenge, for a universal beverage.<br>
</details>

<br>

### **Summary**
The designers & system architects have been hard at work developing the UI & API you'll find in this project. And now, two important pieces are ready to be built:
- the **Coffee Catalog** screen _(front-end)_ — for discovering different coffee drinks
- the **Coffee API** _(back-end)_ — providing coffee drink data to the catalog 

<br>

> 👉 **P.S.** As a full-stack developer, you'll be implementing both. The Coffee Catalog screen on the front-end. And the Coffee API providing the essential data from the back-end.

<br>

🖼️ Visual Reference

![Chart Challenge](.assets/visual-reference.png)

<br>


➡️ Handoffs

> **Design Handoff** <br>
[Coffee App Designs](https://www.figma.com/file/R0zqwp4ckhdr3m1pTFShzp/Reusable-Challenge---Coffee-Shop)<br>
  _Password:_ `6MUiW`<br>

> **System Architecture**<br>
[Coffee API - OpenAPI Spec File](./specs/CoffeeAPI.yaml) `(the api you'll implement)` <br>*You can find the OpenAPI specification file in the `spec/` folder.*

> **Dummy Data**<br>
[Dummy Data - JSON File](./data/CoffeeData.json) <br>
*You can find the dummy data in the `data/` folder.*

<br>

📝 Acceptance Criteria
- the Coffee Catalog screen looks & works as expected, based on the design handoff
- the API is implemented perfectly according to the OpenAPI specification
- the front-end renders based on data from the API

<br>

*For more details, continue reading. The next section (Tasks) will provide more specifics.*

<br>

### **Tasks**
> A breakdown of the assignment into smaller tasks — with more details.

- <details><summary><b>API Implementation</b> <em>(back-end)</em> <code>🪙18 points</code></summary>
  
  > Implement the `Coffee API` according to the OpenAPI specification.
  
  The `Coffee API` relies on data about various Coffee Drinks. You can find this data as a json file in the `/data` folder. You need to provide this data through your endpoints.

  <br>➡️ Handoffs
  > **System Architecture**<br>
  [Coffee API - OpenAPI Spec File](./specs/CoffeeAPI.yaml) `(the api you'll implement)` <br>*You can find the OpenAPI specification file in the `spec/` folder.*

  > **Dummy Data**<br>
  [Dummy Data - JSON File](./data/CoffeeData.json) <br>
  *You can find the dummy data in the `data/` folder.*

  <br>📝 Acceptance Criteria
  
  > • the API project is initialized inside the `api/` folder — with a well-organized folder structure
  <br>• the API is implemented perfectly according to the OpenAPI specification
  <br>• `unit tests` are provided, together with `clear instructions` on how to run them

  <br></details>

  - <details><summary><b>Initialize Your Project</b> <code>🪙3 points</code></summary>
  
    > Initialize your project inside the `api/` folder, and use an well-organized folder structure.

    <br>📝 Acceptance Criteria
    > • the API project is initialized inside the `api/` folder
    <br>• a well-organized folder structure is used
    <br></details>

  - <details><summary><b>Implement the Coffee API</b> <code>🪙8 points</code></summary>
    
    > Implement the `Coffee API`, percisely according to the OpenAPI speficiation.

    The `Coffee API` relies on data about various Coffee Drinks. You can find this data as a json file in the `/data` folder. You need to provide this data through your endpoints.

    **P.S.** _Don't implement a database. It's not needed... yet._ <br>Feel free to follow best practices like the repository pattern to improve code readability, but don't go any further than that.
    
    <br>➡️ Handoffs
    > **System Architecture**<br>
    [Coffee API - OpenAPI Spec File](./specs/CoffeeAPI.yaml) `(the api you'll implement)` <br>*You can find the OpenAPI specification file in the `spec/` folder.*

    > **Dummy Data**<br>
    [Dummy Data - JSON File](./data/CoffeeData.json) <br>
    *You can find the dummy data in the `data/` folder.*
    
    <br>📝 Acceptance Criteria
    > • the API is implemented perfectly according to the OpenAPI specification
    <br>• modern software development principles are followed
    <br>• clear instructions on how to run the project is provided in an easy-to-find location (such as the `README.md` file found in the `./api/` folder)
    <br></details>

  - <details><summary><b>Write Unit Tests</b> <code>🪙7 points</code></summary>
    
    > Write unit tests for the `Coffee API`.
    
    If you don't know where to start, [UnitTest by Martin Fowler](https://www.martinfowler.com/bliki/UnitTest.html) is a good resource to check out. Remember, tests should help ensure high quality, make maintenance & refactoring easier, and improve the overall developer experience.

    Make sure to:
    - select & use high quality software testing packages
    - aim for balance - don't test too much, or too little

    <br>📚 Relevant Resources
    > • [UnitTest by Martin Fowler](https://www.martinfowler.com/bliki/UnitTest.html)

    <br>📝 Acceptance Criteria
    > • `unit tests` are provided, together with `clear instructions` on how to run them
    <br></details>

- <details><summary><b>Coffee Catalog Screen</b> <em>(front-end)</em> <code>🪙19 points</code></summary>

  > Build the Catalog Screen, as seen in the design handoff, and connect it to your `Coffee API`.

  <br>➡️ Design Handoff
    > [Coffee App Designs](https://www.figma.com/file/R0zqwp4ckhdr3m1pTFShzp/Reusable-Challenge---Coffee-Shop)<br>
    _Password:_ `6MUiW`<br>

  <br>📝 Acceptance Criteria
  > • the catalog screen look & work as expected, based on the design handoff
  <br>• the catalog is integrated with, and renders based on data from the `Coffee API`
  <br>• the user is able to search through the catalog using the search box
  <br></details>

  - <details><summary><b>Build the Catalog Screen</b> <code>🪙8 points</code></summary>

    > Build the Catalog Screen, as seen in the design handoff.

    The target screen dimensions are `375x812`. Aim to make it work on any mobile device size. You can find colors, fonts and other design details in the design handoff.

    <br>➡️ Design Handoff
    > [Coffee App Designs](https://www.figma.com/file/R0zqwp4ckhdr3m1pTFShzp/Reusable-Challenge---Coffee-Shop)<br>
    _Password:_ `6MUiW`<br>

    <br>📝 Acceptance Criteria
    > • the catalog screen look & work as expected, based on the design handoff
    <br>• a component-based approach is taken, and components have easy-to-understand and clearly documented inputs (i.e. props).
    <br></details>

  - <details><summary><b>Integrate with the API</b> <code>🪙8 points</code></summary>
    
    > Provide the UI with real data coming from the `Coffee API` you built.

    You need to fetch data from the `Coffee API` you've implemented.

    P.S. Don't worry about the `rating` and `price` values. We haven't collected these yet, so just use the values you see in the design as placeholders for now.

    <br>📝 Acceptance Criteria
    > • the right endpoints of the `Coffee API` are called to fetch the data needed to render the UI
    <br>• the UI is displaying correct values coming from the `Coffee API`
    <br></details>

  - <details><summary><b>Search</b> <code>🪙3 points</code></summary>

    > Implement search functionality.

    Do your best to implement search in a way that provides a good end user experience.

    <br>👤 User Story
    > From the perspective of the end user: _"When using the coffee catalog, I want to search for particular coffee drinks, so that I can find what I want quickly."_

    <br>📝 Acceptance Criteria
    > • search looks & works as expected, based on the design handoff and data from the API
    <br>• the end user experience is smooth and seamless _(e.g. without annoyances)_
    <br>• a component-based approach is taken, and components have easy-to-understand and clearly documented inputs (i.e. props).
    <br></details>

<br>

> ⚠️ Your solution will also be quality assured. Make sure to read the [Quality Assurance](#quality-assurance) section as well.

<br>

### **Quality Assurance**
> In addition to the acceptance criteria associated with each task, there are also overall criteria for **evaluating the quality** of your work & final result. That's what this section is about.

Your solution will be reviewed by professionals, just like it would in a normal day-to-day work situation. Below you can find the criteria specifically related to quality - which together with your task completion will determine your score in the challenge.

- <details><summary><b>Clear Component Interfaces</b> <code>🪙5 points</code></summary>
  
  > Are your component interfaces logical and well-named, and are they easy for others to build with?

  Your component interfaces matter. The names you choose for props, their descriptions and the default values all help to make it easier for other developers to build with your components.
  <br></details>

- <details><summary><b>Code Readability</b> <code>🪙4 points</code></summary>
  
  > is your code easy to understand (i.e. simple naming & syntax) and well presented (i.e. consistent & well documented where needed)?

  Readability is the ease with which a reader can understand your code. In programming, things such as programmer comments, choice of loop structure, and choice of names can determine the ease with which humans can read computer program code.
  <br></details>

- <details><summary><b>Software Package Selection</b> <code>🪙5 points</code></summary>
  
  > Have you chosen well-designed _(e.g. easy to use & understand)_ highly adopted _(e.g. big community, common issues raised & resolved already)_ and reliable _(e.g. good performance, well maintained, no security vulnerabilities)_ and otherwise solid `software packages`?

  A `software package` _(accessible through software package managers like `NPM`)_ is a collection of software components which when combined perform a set of generalized tasks that are applicable to a range of use cases. 

  Selecting the right software package can lead to a better developer experience, less maintenance overhead, ease of fixing issues, and avoidance of security vulnerabilities. Selecting the wrong software package can lead to a host of issues, including unforeseen bugs, security vulnerabilities, maintenance nightmares, and much more. All of this makes selecting the right software packages an essential measure of quality.
  <br></details>

<br>

## 📑 **MORE INFO**
<details>
  <summary><b>❓ Frequently Asked Questions (FAQ)</b></summary>
  
  > Common questions and answers for getting started quickly.<br>

  <details><summary><b>How do I deliver?</b></summary>
    
  > To deliver your solution you'll have to commit and push the repo, and then go to the DIGGIT dashboard to submit your solution.
  <br></details>

  <details><summary><b>How do I know if I'm ready to submit?</b></summary>
    
  > First, check your tasks. Make sure you have given all of them your best shot. Second, check the quality assurance section. Verify that your solution is high quality by cheking your solution against this section. Once you've done your best, both in terms of tasks & quality, you're ready to submit.
  <br></details>

  <details><summary><b>I'm Stuck... help?!</b></summary>
    
  > Oof... sorry, but we can't do debugging for active challenges. But what we can recommend is that you take some extra time. You may just need to take a break, go have a coffee or take a walk. Or all of the above! We often find it helps to simply take your mind off the problem for a little while... Once you come back, check again your progress on both tasks & quality, and see if there is something you haven't considered or tried before. All we can ask is that you do your best. And regardless of the final result, there's a lot to gain from submitting your solution. We wish you the best of luck!
  <br></details>
<br></details>
