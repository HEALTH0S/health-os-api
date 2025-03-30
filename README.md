# Health OS API

## Local Development

```bash
pip install -r requirements.txt
uvicorn app.main:app --reload
```

## Deploy to Render

1. Upload this project to a GitHub repo
2. Go to https://render.com and create a new Web Service
3. Connect your GitHub repo
4. Render will detect `render.yaml` and deploy automatically