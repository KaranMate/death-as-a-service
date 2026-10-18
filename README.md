☠️ # Death-as-a-Service (DaaS)

> A darkly humorous API that returns random, ridiculous death scenarios. Because everyone's gotta go sometime.

Inspired by [no-as-a-service](https://github.com/hotheadhacker/no-as-a-service), this tiny API delivers comedic ways to meet your maker—perfect for games, apps, chatbots, or just a morbid chuckle.

---

## 📦 Use as an npm package

Install it in an existing Express application:

```bash
npm install daas express
```

Mount the exported Express app (it does not start a server when imported):

```javascript
const express = require('express');
const deathApi = require('daas');

const app = express();
app.use('/api', deathApi());
app.listen(3000);
```

The routes are then available at `/api/death`, `/api/deaths`, and `/api/health`.
You can also customize the rate limit with `deathApi({ rateLimitMax: 60 })`.

## 🚀 API Usage

**Base URL**
```
https://death-as-a-service.onrender.com/ 
```

**Method:** `GET`  
**Rate Limit:** `120 requests per minute per IP`

### Endpoints

#### 1. `/death` — Get a random reason
```bash
curl https://death-as-a-service.onrender.com/death
```

**Response:**
```json
{
  "reason": "Defeated in a staring contest with a pigeon"
}
```

#### 2. `/deaths` — Alias for `/death`
```bash
curl https://death-as-a-service.onrender.com/deaths
```

Same response shape as `/death`.

#### 3. `/health` — Health check
```bash
curl https://death-as-a-service.onrender.com/health
```

**Response:**
```json
{
  "status": "alive"
}
```

---

## 🛠️ Self-Hosting

### 1. Clone & Setup
```bash
git clone https://github.com/kookyharsh/death-as-a-service.git
cd death-as-a-service
npm install
```

### 2. Start the server
```bash
npm start
```

The API will be live at:
```
http://localhost:3000/death
```

### 3. Custom port
```bash
PORT=5000 npm start
```

---

## 📁 Project Structure

```
death-as-a-service/
├── index.js            # Express API server
├── reasons.json        # Random reason strings
├── package.json        # Dependencies
├── Dockerfile          # Docker configuration (optional)
└── README.md           # This file
```

---

## 🐳 Docker Support (Optional)

### Build the image
```bash
docker build -t daas .
```

### Run the container
```bash
docker run -p 3000:3000 daas
```

---

## 📋 Example Usage

### JavaScript/Node.js
```javascript
async function getDeath() {
  const response = await fetch('http://localhost:3000/death');
  const data = await response.json();
  console.log(data.reason);
}

getDeath();
```

### Python
```python
import requests

response = requests.get('http://localhost:3000/death')
print(response.json()['reason'])
```

### cURL
```bash
curl http://localhost:3000/death | jq
```

### Shell Script
```bash
#!/bin/bash
curl -s http://localhost:3000/death | jq -r '.reason'
```

---

## 🎮  Use Cases

- **Games** — Random death messages for game overs
- **Chatbots** — Morbid humor in AI responses
- **Terminals** — Easter eggs in CLI tools
- **Web Apps** — Dark comedy generators
- **Discord Bots** — `/death` command for servers
- **Slack Integrations** — Morbid slack status updates
- **Just for fun** — Because why not?

---

## 📊 Sample Responses

Here's what you might get:

- "Choked on a single grain of rice"
- "Lost a fight to a rubber duck"
- "Died of boredom waiting for Windows updates"
- "Sneezed so hard they achieved orbit"
- "Got tangled in their own phone charger cable"
- "Typed 'sudo' before a question they shouldn't have asked"
- "Became a living meme and the internet killed it"
- "Stepped on a LEGO and never recovered"

---

## 🤔 Adding More Deaths

Want to add more reasons? Add a string to `reasons.json`:

```json
[
  "Your new reason here",
  "Another ridiculous way to go"
]
```

Then restart the server.

---

## 🔧 Configuration

### Environment Variables
```bash
PORT=3000          # Server port (default: 3000)
NODE_ENV=production # Environment (optional)
```

### Rate Limiting
Edit `index.js` to adjust rate limits:
```javascript
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,  // 1 minute window
  max: 120,                  // 120 requests per window
});
```

---

## 📜 License

MIT — Do whatever you want, just don't blame me if you die laughing.

---

## 👤 Credits

Created in the spirit of [no-as-a-service](https://github.com/hotheadhacker/no-as-a-service) by hotheadhacker.

Darkly humorous content & API design by [You].

---

## 🚨 Disclaimer

This is purely for entertainment. Any resemblance to actual deaths is purely coincidental (and darkly comedic). Please don't actually die. We need the active users.

---

## 🎭 Testimonials

> "This API is killer." — Your Therapist (probably)

> "Death never looked so funny." — The Grim Reaper (allegedly)

---

**Remember:** Life is short, make it funny. 💀
