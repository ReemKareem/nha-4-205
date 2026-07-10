const express = require("express");
const router = express.Router();

function random(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

const replies = {

    greeting: [
        "Hello! I'm Elevate Fit Assistant. How can I help you today?",
        "Hi! Welcome to Elevate Fit.",
        "Hey! Ready to achieve your fitness goals?"
    ],

    diet: [
        "Eat more vegetables, fruits, lean protein and whole grains.",
        "A healthy plate should contain protein, vegetables and complex carbohydrates.",
        "Avoid sugary drinks and processed foods whenever possible."
    ],

    workout: [
        "Aim for at least 150 minutes of exercise every week.",
        "Strength training 3 times per week is a great start.",
        "Combine cardio and resistance training for the best results."
    ],

    protein: [
        "For muscle gain: 1.6 - 2.2 g protein per kg body weight.",
        "For weight loss: 1.2 - 1.6 g protein per kg body weight."
    ],

    water: [
        "Drink about 35 ml × your body weight (kg).",
        "Example: 70 kg → approximately 2.5 liters/day."
    ],

    sleep: [
        "Adults should sleep between 7 and 9 hours every night.",
        "Good sleep improves recovery, fat loss and concentration."
    ],

    weightLoss: [
        "Maintain a calorie deficit, eat enough protein and stay active.",
        "Losing 0.5–1 kg per week is considered healthy."
    ],

    weightGain: [
        "Eat in a slight calorie surplus and prioritize protein.",
        "Strength training is essential for healthy weight gain."
    ],

    calories: [
        "Average women need about 2000 kcal/day.",
        "Average men need about 2500 kcal/day.",
        "Tell me your age, height, weight and gender for a better estimate."
    ],

    help: [
`You can ask me about:

• Diet
• Workout
• BMI
• Calories
• Protein
• Water Intake
• Sleep
• Weight Loss
• Weight Gain`
    ]
};

router.post("/ask", (req, res) => {

    const { message } = req.body;

    if (!message) {
        return res.status(400).json({
            reply: "Please type a message."
        });
    }

    const text = message.toLowerCase().trim();

    // ==========================
    // BMI
    // Example:
    // bmi 170 70
    // ==========================

    if (text.startsWith("bmi")) {

        const nums = text.match(/\d+/g);

        if (nums && nums.length >= 2) {

            const height = Number(nums[0]) / 100;
            const weight = Number(nums[1]);

            const bmi = (weight / (height * height)).toFixed(1);

            let status = "";

            if (bmi < 18.5)
                status = "Underweight";
            else if (bmi < 25)
                status = "Normal";
            else if (bmi < 30)
                status = "Overweight";
            else
                status = "Obese";

            return res.json({
                reply: `Your BMI is ${bmi} (${status}).`
            });

        }

        return res.json({
            reply: "Example: BMI 170 70"
        });

    }

    // ==========================
    // Greeting
    // ==========================

    if (
        text.includes("hello") ||
        text.includes("hi") ||
        text.includes("hey") ||
        text.includes("مرحبا") ||
        text.includes("السلام")
    ) {

        return res.json({
            reply: random(replies.greeting)
        });

    }

    // Diet

    if (
        text.includes("diet") ||
        text.includes("food") ||
        text.includes("eat") ||
        text.includes("meal") ||
        text.includes("nutrition") ||
        text.includes("رجيم") ||
        text.includes("اكل")
    ) {

        return res.json({
            reply: random(replies.diet)
        });

    }

    // Workout

    if (
        text.includes("workout") ||
        text.includes("exercise") ||
        text.includes("gym") ||
        text.includes("cardio") ||
        text.includes("رياضة")
    ) {

        return res.json({
            reply: random(replies.workout)
        });

    }

    // Calories

    if (
        text.includes("calorie") ||
        text.includes("calories")
    ) {

        return res.json({
            reply: random(replies.calories)
        });

    }

    // Protein

    if (
        text.includes("protein")
    ) {

        return res.json({
            reply: random(replies.protein)
        });

    }

    // Water

    if (
        text.includes("water") ||
        text.includes("مياه")
    ) {

        return res.json({
            reply: random(replies.water)
        });

    }

    // Sleep

    if (
        text.includes("sleep") ||
        text.includes("نوم")
    ) {

        return res.json({
            reply: random(replies.sleep)
        });

    }

    // Lose Weight

    if (
        text.includes("lose weight") ||
        text.includes("fat") ||
        text.includes("burn") ||
        text.includes("اخس")
    ) {

        return res.json({
            reply: random(replies.weightLoss)
        });

    }

    // Gain Weight

    if (
        text.includes("gain weight") ||
        text.includes("muscle") ||
        text.includes("bulk") ||
        text.includes("تخن")
    ) {

        return res.json({
            reply: random(replies.weightGain)
        });

    }

    // Help

    return res.json({
        reply: random(replies.help)
    });

});

module.exports = router;
