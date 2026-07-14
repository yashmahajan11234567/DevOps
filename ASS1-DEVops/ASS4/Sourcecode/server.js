const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(cors());

// Serve static files (dashboard HTML/CSS/JS) from project root
app.use(express.static(path.join(__dirname)));

const port = process.env.PORT || 3000;

const baseData = {
    mumbai: [
        {day:"Mon", temp:32, humidity:65, rain:12},
        {day:"Tue", temp:33, humidity:68, rain:8},
        {day:"Wed", temp:31, humidity:72, rain:22},
        {day:"Thu", temp:30, humidity:75, rain:28},
        {day:"Fri", temp:32, humidity:70, rain:15},
        {day:"Sat", temp:34, humidity:60, rain:5},
        {day:"Sun", temp:35, humidity:55, rain:2}
    ],
    pune: [
        {day:"Mon", temp:24, humidity:55, rain:5},
        {day:"Tue", temp:25, humidity:58, rain:8},
        {day:"Wed", temp:22, humidity:62, rain:18},
        {day:"Thu", temp:20, humidity:68, rain:32},
        {day:"Fri", temp:23, humidity:65, rain:20},
        {day:"Sat", temp:26, humidity:52, rain:3},
        {day:"Sun", temp:28, humidity:48, rain:1}
    ],
    delhi: [
        {day:"Mon", temp:40, humidity:25, rain:0},
        {day:"Tue", temp:42, humidity:22, rain:0},
        {day:"Wed", temp:39, humidity:30, rain:0},
        {day:"Thu", temp:38, humidity:35, rain:2},
        {day:"Fri", temp:41, humidity:28, rain:0},
        {day:"Sat", temp:43, humidity:20, rain:0},
        {day:"Sun", temp:44, humidity:18, rain:0}
    ],
    bangalore: [
        {day:"Mon", temp:27, humidity:65, rain:4},
        {day:"Tue", temp:28, humidity:63, rain:6},
        {day:"Wed", temp:26, humidity:68, rain:10},
        {day:"Thu", temp:25, humidity:72, rain:16},
        {day:"Fri", temp:27, humidity:68, rain:8},
        {day:"Sat", temp:29, humidity:60, rain:2},
        {day:"Sun", temp:30, humidity:58, rain:1}
    ],
    kolkata: [
        {day:"Mon", temp:31, humidity:78, rain:18},
        {day:"Tue", temp:32, humidity:80, rain:24},
        {day:"Wed", temp:30, humidity:82, rain:28},
        {day:"Thu", temp:29, humidity:85, rain:35},
        {day:"Fri", temp:31, humidity:80, rain:22},
        {day:"Sat", temp:33, humidity:75, rain:10},
        {day:"Sun", temp:34, humidity:72, rain:6}
    ],
    hyderabad: [
        {day:"Mon", temp:33, humidity:50, rain:3},
        {day:"Tue", temp:35, humidity:45, rain:1},
        {day:"Wed", temp:32, humidity:55, rain:7},
        {day:"Thu", temp:31, humidity:60, rain:12},
        {day:"Fri", temp:34, humidity:48, rain:2},
        {day:"Sat", temp:36, humidity:40, rain:0},
        {day:"Sun", temp:38, humidity:38, rain:0}
    ],
    chennai: [
        {day:"Mon", temp:34, humidity:80, rain:6},
        {day:"Tue", temp:35, humidity:82, rain:9},
        {day:"Wed", temp:33, humidity:85, rain:14},
        {day:"Thu", temp:32, humidity:87, rain:20},
        {day:"Fri", temp:34, humidity:83, rain:11},
        {day:"Sat", temp:36, humidity:78, rain:4},
        {day:"Sun", temp:37, humidity:75, rain:2}
    ]
};

function rnd(val, variation=0.08) {
    // apply small random variation
    const change = (Math.random() * 2 - 1) * variation * val;
    return Math.round((val + change) * 10) / 10;
}

function generate(city) {
    const base = baseData[city] || baseData['mumbai'];
    return base.map(d => ({
        day: d.day,
        temp: rnd(d.temp, 0.05),
        humidity: Math.max(0, Math.min(100, rnd(d.humidity, 0.06))),
        rain: Math.max(0, Math.round(rnd(d.rain, 0.4)))
    }));
}

// Real data using Open-Meteo (no API key required)
const cityCoords = {
    mumbai: {lat:19.075983, lon:72.877655},
    pune: {lat:18.520430, lon:73.856743},
    delhi: {lat:28.704060, lon:77.102493},
    bangalore: {lat:12.971599, lon:77.594566},
    kolkata: {lat:22.572645, lon:88.363892},
    hyderabad: {lat:17.385044, lon:78.486671},
    chennai: {lat:13.082680, lon:80.270718}
};

const https = require('https');

function fetchJson(url){
    return new Promise((resolve, reject)=>{
        https.get(url, (res)=>{
            let data = '';
            res.on('data', chunk=> data += chunk);
            res.on('end', ()=>{
                try{
                    const parsed = JSON.parse(data);
                    resolve(parsed);
                }catch(e){
                    reject(e);
                }
            });
        }).on('error', err => reject(err));
    });
}

async function generateReal(city){
    const coords = cityCoords[city];
    if(!coords) return generate(city);
    // build dates for next 7 days
    const now = new Date();
    const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const end = new Date(start);
    end.setDate(start.getDate()+6);
    const pad = d=>d.toISOString().slice(0,10);
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&hourly=relativehumidity_2m&timezone=auto&start_date=${pad(start)}&end_date=${pad(end)}`;
    try{
        const j = await fetchJson(url);
        if(!j) throw new Error('fetch-failed');
        const days = j.daily.time || [];
        const tempsMax = j.daily.temperature_2m_max || [];
        const tempsMin = j.daily.temperature_2m_min || [];
        const rains = j.daily.precipitation_sum || [];
        const hourlyTimes = j.hourly?.time || [];
        const hourlyHum = j.hourly?.relativehumidity_2m || [];
        // group hourly humidity by day
        const humByDay = {};
        for(let i=0;i<hourlyTimes.length;i++){
            const day = hourlyTimes[i].slice(0,10);
            humByDay[day] = humByDay[day] || [];
            humByDay[day].push(hourlyHum[i]);
        }
        const result = days.map((d,idx)=>{
            const max = tempsMax[idx] ?? null;
            const min = tempsMin[idx] ?? null;
            const temp = (max!=null && min!=null) ? Math.round(((max+min)/2)*10)/10 : (max||min||0);
            const humArr = humByDay[d] || [];
            const humidity = humArr.length ? Math.round((humArr.reduce((s,v)=>s+v,0)/humArr.length)*10)/10 : null;
            const rain = Math.round((rains[idx]||0)*10)/10;
            const dayName = new Date(d).toLocaleDateString('en-US', {weekday:'short'});
            return { day: dayName, temp, humidity, rain };
        });
        return result;
    }catch(e){
        console.warn('Open-Meteo fetch failed, falling back to synthetic', e && e.message ? e.message : e);
        return generate(city);
    }
}

app.get('/api/weather', (req, res) => {
    (async ()=>{
        const city = (req.query.city || 'mumbai').toLowerCase();
        if (!baseData[city]) return res.status(400).json({ error: 'unknown city' });
        // If USE_REAL=1 env var is set, fetch from Open-Meteo
        if(process.env.USE_REAL === '1'){
            const data = await generateReal(city);
            return res.json(data);
        }
        // return slightly different values each request to simulate real-time updates
        res.json(generate(city));
    })();
});

app.get('/', (req, res) => {
    // Serve the dashboard HTML as the root page
    res.sendFile(path.join(__dirname, 'Ass2_part2(FSDL).html'));
});

app.listen(port, () => console.log(`Weather API listening on http://localhost:${port}`));
