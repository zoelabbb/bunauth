# Bun Authentication Basic

I create this a Bun application with basic authentication using `hono`. The application includes a public route ("/") and an authenticated route ("/auth/page") that requires a bearer token.

## Technologies Used

- [Bun](https://bun.js.org/): A minimalistic web framework for Node.js.
- [Hono](https://hono.js.org/): Middleware-based authentication for Bun.
- [Node.js](https://nodejs.org/): A JavaScript runtime built on Chrome's V8 JavaScript engine.

## Installation

Make sure you already installed [Node.js](https://nodejs.org/).

1. Clone this repository:

   ```bash
   git clone https://github.com/zoelabbb/bunauth.git && cd bunauth
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Usage

### Configuration

The example includes a simple authentication mechanism using a bearer token. The token is defined in the `token` variable within the `index.ts` file. In a real-world scenario, you would replace this with a more secure and dynamic authentication mechanism.

### Running the Application

Run the Bun application:

```bash
bun run src/index.ts
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Testing Authentication

#### Public Route ("/")

Open your browser or use a tool like [curl](https://curl.haxx.se/) / Postman / REST Client plugin `VSCode` to access the public route:

### Using Curl

```js
curl http://localhost:3000
```

### Using plugin REST Client `VSCode`

```js
GET http://localhost:3000
```

You should receive a JSON response:

```js
TTP/1.1 200 OK
Content-Type: application/json; charset=UTF-8
Date: Fri, 01 Dec 2023 16:29:09 GMT
Content-Length: 124

{
  "message": "Basic auth using Bun and Hono",
  "author": "Alif Ryuu BR",
  "github": "https://github.com/zoelabbb",
  "version": "1.0.0"
}
```

#### Authenticated Route ("/auth/page")

To access the authenticated route, you need to include the bearer token in the request header.

### Use the following curl command as an example:
```bash
curl -H "Authorization: Bearer iloveprogramming" http://localhost:3000/auth/page
```

You should receive a plain text response:

```js
Auth page : Your token is valid
```

### Using REST Client `VSCode`
```js
GET http://localhost:3000/auth/page

Authorization: Bearer iloveprogramming
```

You should receive a response:
```js
HTTP/1.1 200 OK
content-type: text/plain;charset=utf-8
Date: Fri, 01 Dec 2023 16:41:15 GMT
Content-Length: 31

Auth page : Your token is valid
```


## Customization

Feel free to customize the authentication mechanism, routes, or any other aspects of the application according to your requirements. Explore the `hono` documentation for more advanced authentication options and features.

## Directory Structure

- `src/`: Contains the source code.
  - `index.ts`: The main application file.
- `node_modules/`: The directory where npm packages are installed.
- `package.json`: Project configuration file.
- `tsconfig.json`: TypeScript configuration file.

# bunauth

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.0.14. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
