# CodeInsight — AI Code Assistant

> Write. Explain. Debug. Powered by Gemini 2.5 Flash.

A full-stack React + Django application that gives developers a tri-mode AI tool — generate code from a prompt, understand unfamiliar logic instantly, or surface bugs and fixes in seconds.

---

## What It Does

Three modes. One interface. No friction.

| Mode | Input | Output |
|------|-------|--------|
| **Write** | Describe what you need | Working code, generated instantly |
| **Explain** | Paste any code | Line-by-line breakdown of logic and intent |
| **Debug** | Paste broken code | Bug identified, fix surfaced |

---

## Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | React.js, JavaScript, CSS |
| Backend | Django, Django REST Framework, Python |
| AI | Google Gemini API (gemini-2.5-flash) |

---

## Quick Setup

**1. Clone**
```bash
git clone https://github.com/PraveenSankar03/AI-code-explainer-debugger.git
```

**2. Backend**
```bash
cd backend
pip install -r requirements.txt
python manage.py runserver
```

**3. Frontend**
```bash
cd frontend
npm install
npm start
```

**4. Environment**

Create `backend/.env` and add:
```
GEMINI_API_KEY=your_api_key_here
```

---

## Rate Limits

Runs on Gemini 2.5 Flash free tier — RPM, RPD, and TPM quotas apply.
If a request fails, wait a moment and retry. Use responsibly.

---

## Author

**Praveen Kumar S** — Full Stack Developer, Chennai
[GitHub](https://github.com/PraveenSankar03) · [LinkedIn](https://www.linkedin.com/in/praveen-kumar-40109b366/) · [Portfolio](https://portfolio-praveen03.vercel.app/)

---

⭐ Star this repo if it saved you time.