from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI()

class SymptomInput(BaseModel):
    symptoms: List[str]

@app.post("/diagnose")
def diagnose(input: SymptomInput):
    return {
        "input": input.symptoms,
        "conditions": ["Adrenal Fatigue", "IBS"],
        "treatments": ["Ashwagandha", "Breathwork", "Peppermint Oil"]
    }
