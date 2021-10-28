// This is file which will take care of all the routes coming from different files
const core = require('./core');
const ship = require('./ship');
const launch = require('./launch');
const dragon = require('./dragon');
const rocket = require('./rocket');
const capsule = require('./capsule');
const mission = require('./mission');
const payload = require('./payload');
const roadster = require('./roadster');
const launchPad = require('./launchpad');
const landingPad = require('./landingpad');
const historicalEvent = require('./history');
const aboutCompany = require('./companyinfo');

module.exports = (app) => {
    const apiBase = '/spacex/api/v1';

    // --- CAPSULES ROUTES ---
    app.get(`${apiBase}/capsules/all`, capsule.allCapsules);
    app.get(`${apiBase}/capsules/past`, capsule.pastCapsules);
    app.get(`${apiBase}/capsules/upcoming`, capsule.upcomingCapsules);
    app.get(`${apiBase}/capsules/capsule_serial/:capsule_serial`, capsule.oneCapsule);


    // --- CORE ROUTES ---
    app.get(`${apiBase}/cores/all`, core.allCores);
    app.get(`${apiBase}/cores/past`, core.pastCores);
    app.get(`${apiBase}/cores/upcoming`, core.upcomingCores);
    app.get(`${apiBase}/cores/core_serial/:core_serial`, core.oneCore);

    // --- DRAGON ROUTES ---
    app.get(`${apiBase}/dragons/all`, dragon.allDragons);
    app.get(`${apiBase}/dragons/dragon_id/:dragon_id`, dragon.oneDragon);

    // --- HISTORY EVENTS ROUTES ---
    app.get(`${apiBase}/history/all`, historicalEvent.allHistoricalEvents);
    app.get(`${apiBase}/history/history_id/:history_id`, historicalEvent.oneHistoricalEvent);

    // --- COMPANY INFO ROUTE ---
    app.get(`${apiBase}/about`, aboutCompany);

    // --- ROADSTER ROUTE ---
    app.get(`${apiBase}/roadster`, roadster);

    // --- LANDING PADS ROUTES ---
    app.get(`${apiBase}/landingpads/all`, landingPad.allLandingPads);
    app.get(`${apiBase}/landingpads/landpad_id/:landpad_id`, landingPad.oneLandingPad);

    // --- LAUNCH PADS ROUTES ---
    app.get(`${apiBase}/launchpads/all`, launchPad.allLaunchPads);
    app.get(`${apiBase}/launchpads/site_id/:site_id`, launchPad.oneLaunchPad);

    // --- MISSIONS ROUTES ---
    app.get(`${apiBase}/missions/all`, mission.allMissions);
    app.get(`${apiBase}/missions/mission_id/:mission_id`, mission.oneMission);

    // --- PAYLOADS ROUTES ---
    app.get(`${apiBase}/payloads/all`, payload.allPayloads);
    app.get(`${apiBase}/payloads/payload_id/:payload_id`, payload.onePayload);

    // --- ROCKETS ROUTES ---
    app.get(`${apiBase}/rockets/all`, rocket.allRockets);
    app.get(`${apiBase}/rockets/rocket_id/:rocket_id`, rocket.oneRocket);

    // --- SHIPS ROUTES ---
    app.get(`${apiBase}/ships/all`, ship.allShips);
    app.get(`${apiBase}/ships/ship_id/:ship_id`, ship.oneShip);

    // --- LAUNCHES ROUTES ---
    app.get(`${apiBase}/launches/all`, launch.allLaunches);
    app.get(`${apiBase}/launches/next`, launch.nextLaunch);
    app.get(`${apiBase}/launches/past`, launch.pastLaunches);
    app.get(`${apiBase}/launches/latest`, launch.latestLaunch);
    app.get(`${apiBase}/launches/upcoming`, launch.upcomingLaunches);
    app.get(`${apiBase}/launches/flight_number/:flight_number`, launch.oneLaunch);
};