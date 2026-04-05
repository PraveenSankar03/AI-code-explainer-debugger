import os
from rest_framework.decorators import api_view
from rest_framework.response import Response
from google import genai
from google.genai import types

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

@api_view(["POST"])
def explain_code(request):
    code = request.data.get("code")
    mode = request.data.get("mode", "explain")
    if not code:
        return Response({"error": "Please provide code to explain."}, status=400)
    
    if mode == "explain":
        prompt = f"Explain the following code clearly and concisely:\n\n{code}"
    else:
        prompt = f"Debug the following code. Identify bugs, errors, and issues, and suggest fixes:\n\n{code}"

    config = types.GenerateContentConfig(system_instruction="You are a friendly coder. explain neat, brief and crisp")

    try:
        response = client.models.generate_content(
            model="gemini-2.5-flash", 
            contents=prompt,
            config=config
        )

        return Response({
            "explanation": response.text
        })

    except Exception as e:
        return Response({"explanation": f"AI is busy: {str(e)}"}, status=429)