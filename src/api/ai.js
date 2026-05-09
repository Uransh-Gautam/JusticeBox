const API_KEY = import.meta.env.VITE_AI_API_KEY;

// ai se complaint analyze karwane wala function
export async function analyzeComplaint(complaintText) {
  if (!API_KEY) {
    throw new Error("API Key is missing. Please check your .env.local file.");
  }

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content: "You are an expert consumer rights legal assistant. Analyze the user's complaint and provide a legal analysis and a drafted legal notice. Respond ONLY with a JSON object containing 'analysis' and 'notice' keys."
          },
          {
            role: "user",
            content: complaintText
          }
        ],
        response_format: { type: "json_object" }
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`API error: ${response.status} - ${errorData.error?.message || 'Unknown error'}`);
    }

    const data = await response.json();
    const content = data.choices[0].message.content;
    
    // json parse karke return kar denge (groq ka json mode badhiya chal rha hai)
    return JSON.parse(content);
  } catch (error) {
    console.error("Failed to analyze complaint with Groq:", error);
    throw error;
  }
}
