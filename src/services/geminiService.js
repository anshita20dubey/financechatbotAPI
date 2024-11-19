const { GoogleGenerativeAI } = require("@google/generative-ai");

// Initialize Google Generative AI with API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API);

const getSavingsAdvice = async (goal, duration, avgDailyExpense) => {
    try {
        // Get the Gemini model instance
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

        // Define the prompt
        const prompt = `A user wants to save ₹${goal} over ${duration} month(s). Their average daily expense is ₹${avgDailyExpense}. Provide practical advice to achieve this saving goal.`;

        // Log the prompt for debugging
        console.log("Prompt:", prompt);

        // Generate advice 
        const result = await model.generateContent(prompt);

        // Access and return the response text
        return result.response.candidates[0].content.parts[0].text;
    } catch (error) {
        console.error("Error fetching advice from Gemini API:", error.message);
        throw error;
    }
};

// Example usage for testing
// (async () => {
//     try {
//         const advice = await getSavingsAdvice(100, 2, 50);
//         console.log("Savings Advice:", advice);
//     } catch (error) {
//         console.error("Error:", error.message);
//     }
// })();

module.exports = {
    getSavingsAdvice
};