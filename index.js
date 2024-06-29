// Some of the code is repetitite, using similar logic. You can shorten it by writing it like this:
const elements = {
    work: { current: document.getElementById("work-daily"), previous: document.getElementById("work-previous") },
    play: { current: document.getElementById("play-daily"), previous: document.getElementById("play-previous") },
    study: { current: document.getElementById("study-current"), previous: document.getElementById("study-previous") },
    exercise: { current: document.getElementById("exercise-current"), previous: document.getElementById("exercise-previous") },
    social: { current: document.getElementById("social-current"), previous: document.getElementById("social-previous") },
    selfcare: { current: document.getElementById("selfcare-current"), previous: document.getElementById("selfcare-previous") }
};
// Above, I created the "element" object to store the HTML elements for the activities

// create populate function that adds event listeners to the buttons, and then call the updateElements function
async function populate(){
    const response = await fetch("data.json");
    const timelineData = await response.json();
    console.log(timelineData);

    document.getElementById("daily-btn").addEventListener("click", function(){
        updateElements(timelineData, "daily");
    });
    document.getElementById("weekly-btn").addEventListener("click", function(){
        updateElements(timelineData, "weekly");
    });
    document.getElementById("monthly-btn").addEventListener("click", function(){
        updateElements(timelineData, "monthly");
    });
}

// create function to update elements
function updateElements(data, timeframe) {
    // Loop through each activity (work, play, study, etc.)
    Object.keys(elements).forEach(activity => {
        // Find the data for the current activity
        const activityData = data.find(item => item.title === capitalizeFirstLetter(activity));

        // Extract the current and previous values for the current timeframe
        const currentValue = activityData.timeframes[timeframe].current;
        const previousValue = activityData.timeframes[timeframe].previous;

        // Update the text content of the current and previous elements
        elements[activity].current.textContent = `${currentValue}hrs`;
        elements[activity].previous.textContent = `Previous - ${previousValue}hrs`;
    });
}

// Helper function to capitalize the first letter of a string
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// run the populate function
populate();
