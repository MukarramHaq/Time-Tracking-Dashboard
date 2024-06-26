const dailyBtnEl = document.getElementById("daily-btn");
const weeklyBtnEl = document.getElementById("weekly-btn");
const monthlyBtnEl = document.getElementById("monthly-btn");

const workDailyEl = document.getElementById("work-daily");
const workPreviousEl = document.getElementById("work-previous");
const playDailyEl = document.getElementById("play-daily");
const playPreviousEl = document.getElementById("play-previous");
const studyCurrentEl = document.getElementById("study-current");
const studyPreviousEl = document.getElementById("study-previous");
const exerciseCurrentEl = document.getElementById("exercise-current");
const exercisePreviousEl = document.getElementById("exercise-previous");
const socialCurrentEl = document.getElementById("social-current");
const socialPreviousEl = document.getElementById("social-previous");
const selfcareCurrentEl = document.getElementById("selfcare-current");
const selfcarePreviousEl = document.getElementById("selfcare-previous");

async function populate(){
    const response = await fetch("data.json");
    const timelineData = await response.json();
    console.log(timelineData)
    populateDaily(timelineData);
    populateWeekly(timelineData);
    populateMonthly(timelineData);
}

function populateDaily(obj){
    
    dailyBtnEl.addEventListener("click", function(){
        const workDailyCurrent = obj.find(item => item.title === "Work").timeframes.daily.current;
        const workDailyPrevious = obj.find(item => item.title === "Work").timeframes.daily.previous;

        const playDailyCurrent = obj.find(item => item.title === "Play").timeframes.daily.current;
        const playDailyPrevious = obj.find(item => item.title === "Play").timeframes.daily.previous;

        const studyDailyCurrent = obj.find(item => item.title === "Study").timeframes.daily.current;
        const studyDailyPrevious = obj.find(item => item.title === "Study").timeframes.daily.previous;

        const exerciseDailyCurrent = obj.find(item => item.title === "Exercise").timeframes.daily.current;
        const exerciseDailyPrevious = obj.find(item => item.title === "Exercise").timeframes.daily.previous;

        const socialDailyCurrent = obj.find(item => item.title === "Social").timeframes.daily.current;
        const socialDailyPrevious = obj.find(item => item.title === "Social").timeframes.daily.previous;

        const selfcareDailyCurrent = obj.find(item => item.title === "Self Care").timeframes.daily.current;
        const selfcareDailyPrevious = obj.find(item => item.title === "Self Care").timeframes.daily.previous;

        workDailyEl.textContent = `${workDailyCurrent}hrs`;
        workPreviousEl.textContent = `Previous - ${workDailyPrevious}hrs`

        playDailyEl.textContent = `${playDailyCurrent}hrs`
        playPreviousEl.textContent = `Previous - ${playDailyPrevious}hrs`

        studyCurrentEl.textContent = `${studyDailyCurrent}hrs`
        studyPreviousEl.textContent = `Previous - ${studyDailyPrevious}hrs`

        exerciseCurrentEl.textContent = `${exerciseDailyCurrent}hrs`;
        exercisePreviousEl.textContent = `Previous - ${exerciseDailyPrevious}hrs`;

        socialCurrentEl.textContent = `${socialDailyCurrent}hrs`
        socialPreviousEl.textContent = `Previous - ${socialDailyPrevious}hrs`;

        selfcareCurrentEl.textContent = `${selfcareDailyCurrent}hrs`
        selfcarePreviousEl.textContent = `Previous - ${selfcareDailyPrevious}hrs`
    })
}

function populateWeekly(obj){
    weeklyBtnEl.addEventListener("click", function(){
        const workWeeklyCurrent = obj.find(item => item.title === "Work").timeframes.weekly.current;
        const workWeeklyPrevious = obj.find(item => item.title === "Work").timeframes.weekly.previous;

        const playWeeklyCurrent = obj.find(item => item.title === "Play").timeframes.weekly.current;
        const playWeeklyPrevious = obj.find(item => item.title === "Play").timeframes.weekly.previous;

        const studyWeeklyCurrent = obj.find(item => item.title === "Study").timeframes.weekly.current;
        const studyWeeklyPrevious = obj.find(item => item.title === "Study").timeframes.weekly.previous;

        const exerciseWeeklyCurrent = obj.find(item => item.title === "Exercise").timeframes.weekly.current;
        const exerciseWeeklyPrevious = obj.find(item => item.title === "Exercise").timeframes.weekly.previous;

        const socialWeeklyCurrent = obj.find(item => item.title === "Social").timeframes.weekly.current;
        const socialWeeklyPrevious = obj.find(item => item.title === "Social").timeframes.weekly.previous;

        const selfcareWeeklyCurrent = obj.find(item => item.title === "Self Care").timeframes.weekly.current;
        const selfcareWeeklyPrevious = obj.find(item => item.title === "Self Care").timeframes.weekly.previous;

        workDailyEl.textContent = `${workWeeklyCurrent}hrs`;
        workPreviousEl.textContent = `Previous - ${workWeeklyPrevious}hrs`

        playDailyEl.textContent = `${playWeeklyCurrent}hrs`
        playPreviousEl.textContent = `Previous - ${playWeeklyPrevious}hrs`

        studyCurrentEl.textContent = `${studyWeeklyCurrent}hrs`
        studyPreviousEl.textContent = `Previous - ${studyWeeklyPrevious}hrs`

        exerciseCurrentEl.textContent = `${exerciseWeeklyCurrent}hrs`;
        exercisePreviousEl.textContent = `Previous - ${exerciseWeeklyPrevious}hrs`;

        socialCurrentEl.textContent = `${socialWeeklyCurrent}hrs`
        socialPreviousEl.textContent = `Previous - ${socialWeeklyPrevious}hrs`;

        selfcareCurrentEl.textContent = `${selfcareWeeklyCurrent}hrs`
        selfcarePreviousEl.textContent = `Previous - ${selfcareWeeklyPrevious}hrs`
    })
}

function populateMonthly(obj){
    monthlyBtnEl.addEventListener("click", function(){
        const workMonthlyCurrent = obj.find(item => item.title === "Work").timeframes.monthly.current;
        const workMonthlyPrevious = obj.find(item => item.title === "Work").timeframes.monthly.previous;

        const playMonthlyCurrent = obj.find(item => item.title === "Play").timeframes.monthly.current;
        const playMonthlyPrevious = obj.find(item => item.title === "Play").timeframes.monthly.previous;

        const studyMonthlyCurrent = obj.find(item => item.title === "Study").timeframes.monthly.current;
        const studyMonthlyPrevious = obj.find(item => item.title === "Study").timeframes.monthly.previous;

        const exerciseMonthlyCurrent = obj.find(item => item.title === "Exercise").timeframes.monthly.current;
        const exerciseMonthlyPrevious = obj.find(item => item.title === "Exercise").timeframes.monthly.previous;

        const socialMonthlyCurrent = obj.find(item => item.title === "Social").timeframes.monthly.current;
        const socialMonthlyPrevious = obj.find(item => item.title === "Social").timeframes.monthly.previous;

        const selfcareMonthlyCurrent = obj.find(item => item.title === "Self Care").timeframes.monthly.current;
        const selfcareMonthlyPrevious = obj.find(item => item.title === "Self Care").timeframes.monthly.previous;

        workDailyEl.textContent = `${workMonthlyCurrent}hrs`;
        workPreviousEl.textContent = `Previous - ${workMonthlyPrevious}hrs`

        playDailyEl.textContent = `${playMonthlyCurrent}hrs`
        playPreviousEl.textContent = `Previous - ${playMonthlyPrevious}hrs`

        studyCurrentEl.textContent = `${studyMonthlyCurrent}hrs`
        studyPreviousEl.textContent = `Previous - ${studyMonthlyPrevious}hrs`

        exerciseCurrentEl.textContent = `${exerciseMonthlyCurrent}hrs`;
        exercisePreviousEl.textContent = `Previous - ${exerciseMonthlyPrevious}hrs`;

        socialCurrentEl.textContent = `${socialMonthlyCurrent}hrs`
        socialPreviousEl.textContent = `Previous - ${socialMonthlyPrevious}hrs`;

        selfcareCurrentEl.textContent = `${selfcareMonthlyCurrent}hrs`
        selfcarePreviousEl.textContent = `Previous - ${selfcareMonthlyPrevious}hrs`
    })
}

populate()