##The Basic Skeleton of a generic resizable Outfit Template

This is a solid starting point for any future 'big red box-esque' [outfit](http://outfit.io) templating work.

<br>

##What does it do?

This template allows you to easily create a generic resizable outfit template for your brand using this as a starting point. All the heavy lifting regarding scalable fonts for any dimension or size has been taken care of for you using `vminvmax`. Custom media queries for different aspect ratios have been created in `PostCSS` and `cssnext`. `cssnext` also has support for native css varibles. `PostCSS` also autoprefixes your css if a prefix is required. suck it `-webkit`.
Finally all of your `mustache` variables are filled with data and a built version is able to be previewed in your browser on port `8080` by `node-static`.

<br>

##Setting it up.

1. Clone this Repository: <br>
  `git clone https://github.com/johnpmorris/GenericResizable.git`

2. Navigate to the repo directory: <br>
  `cd GenericResizable`

3. Create build folder: <br>
  `mkdir -p build/assets/stylesheets && mkdir -p build/assets/javascripts`

4. `npm install`

5. `npm run serve`

6. Template should be accessible at [http://localhost:8080](http://localhost:8080)

<br>

##Using this template:

###File Structure
- The `/src` directory is where your working files are and will be the files you edit, they get compiled to the `/build` directory when the server is running.
- Any time you change a file in the `/src` folder, the build will run again, recompiling your assets.

###Outfit Variables

- Outfit uses the [mustache logicless templating language](https://mustache.github.io/) for creating Outfit Variables. These varaibles become the Inputs `authors` use to input data into the template.

- The `src/data.json` file is where the dummy data for your outfit variables will be stored

  **A Basic Outfit variable in `src/index.mst`:**

  ```
  <h1>{{ headline }}</h1>
  ```
  **The corresponding data in 	`src/data.json`:**

  ```
  {
   "headline": "My Headline"
  }
  ```

  **Built html file in `build/index.html`:**

  ```
  <h1>My Headline</h1>
  ```


- All mustache tags ( `{{ }}` ) inside the template must be inside the `src/index.mst` file, any tags in other files will be ignored (and probably thow you a big fat error), so if you need to add mustache tags to `css` or `js` files for whatever reason, they must be in the `index.mst`.

  **Example Mustache tags in javascript**:

  ```
  <script type="text/javascript">
    var foo = {{ bar }}
  </script>
  ```
  **Example Mustache tags in CSS**:

  ```
  <style type="text/css">
    .foo {
      color: {{ bar }};
    }
  </style>
  ```
  <br>

- **Different types of mustache tags** <br>
  There are a few different types of mustache tags and a few special ones unique to outfit, These are the most used.

    - **`{{ foo }}` <br>**
      Standard Mustache tag (will escape special characters)

    - **`{{{ foo }}}` <br>**
      Standard Mustache tag (will not escape special characters)

    - **`{{# foo }} <h1>bar</h1> {{/ foo }}` <br>**
      Only print `<h1>bar</h1>` if there _**is**_ data for `foo`.

    - **`{{^ foo }} <h1>bar</h1> {{/ foo }}` <br>**
      Only print `<h1>bar</h1>` if there _**is no**_ content for `foo`.

      <br>

##Importing the template into outfit

1. Create a new template.

2. Copy the contents of `src/index.mst`

3. Edit the contents of `index.html.mst` in the outfit repo and paste in the code that you copied from `src/index.mst`

4. Copy contents of the files in `/build/assets` and create corresponding directories and files in outfit.

5. Navigate to the tags view and create the missing variables.

6. Booyah.
