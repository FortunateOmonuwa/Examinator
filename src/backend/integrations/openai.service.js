//import OpenAI from "openai";
import Together from "together-ai";
// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

const togetherAI = new Together({
  apiKey: process.env.TOGETHERAI_API_KEY,
});

// const calculateScore = async ({ question, answer, maxScore }) => {
//   try {
//     const prompt = `
//   You are a grading assistant. Grade the following answer based on the question and award a score out of ${maxScore}.
//   Respond with only the score as a number — no explanation.

//   Question: ${question}

//   Answer: ${answer}
//   `;

//     console.log("prompt", prompt);

//     const response = await openai.chat.completions.create({
//       model: "gpt-3.5-turbo",
//       messages: [
//         {
//           role: "user",
//           content: prompt,
//         },
//       ],
//     });

//     const result = response.choices[0].message.content.trim();
//     console.log("result", result);
//     return Number(result);
//   } catch (error) {
//     console.error("Error calculating score:", error);
//     throw error;
//   }
// };

const calculateScore = async ({ question, answer, maxScore }) => {
  try {
    const prompt = `Grade this answer and respond with ONLY a number from 0 to ${maxScore}. No text, no explanation, just the number.

Question: ${question}
Answer: ${answer}
Score:`;

    // console.log("prompt", prompt);

    const response = await togetherAI.chat.completions.create({
      model: "meta-llama/Llama-3.3-70B-Instruct-Turbo-Free",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      max_tokens: 10,
      temperature: 0.1,
    });

    const result = response.choices[0].message.content.trim();
    console.log("AI Response:", result);

    // Try multiple approaches to extract a number
    let score = 0;

    // First, try to find a standalone number
    const standaloneNumber = result.match(/^\s*(\d+(?:\.\d+)?)\s*$/);
    if (standaloneNumber) {
      score = Number(standaloneNumber[1]);
      console.log("Found standalone number:", score);
    } else {
      // Look for any number in the response
      const anyNumber = result.match(/(\d+(?:\.\d+)?)/);
      if (anyNumber) {
        score = Number(anyNumber[1]);
        console.log("Found number in text:", score);
      } else {
        console.log("No number found, defaulting to 0");
        score = 0;
      }
    }

    const validatedScore = Math.max(0, Math.min(score, maxScore));
    console.log("Final validated score:", validatedScore);
    return validatedScore;
  } catch (error) {
    // console.error("Error calculating score:", error);
    throw error;
  }
};

export { calculateScore };
