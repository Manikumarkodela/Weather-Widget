import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './search.css';

export default function Searchbox({ updatedData }) {
    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(false);
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
    const API_KEY = 'f70e26c720056a0530dfe1375baa51fd';

    const fetchWeather = async (q) => {
        setLoading(true);
        try {
            const res = await fetch(`${API_URL}?q=${encodeURIComponent(q)}&appid=${API_KEY}`);
            if (!res.ok) {
                const txt = await res.text();
                throw new Error(txt || `API error ${res.status}`);
            }
            const data = await res.json();
            const result = {
                name: data.name,
                temp: data.main?.temp,
                feelsLike: data.main?.feels_like,
                temp_min: data.main?.temp_min,
                temp_max: data.main?.temp_max,
                humidity: data.main?.humidity,
                pressure: data.main?.pressure,
                description: data.weather?.[0]?.description
            };
            if (typeof updatedData === 'function') updatedData(result);
            return result; 
        } catch (err) {
            console.error('no such city found', err);
            return null;
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => setCity(e.target.value);

    const handleSubmit = async (e) => {
        try{
        e.preventDefault();
        const q = city.trim();
        if (!q) return;
        await fetchWeather(q);
        setCity('');
        }
        catch(err){
            console.error("NO SUCH CITY FOUND",err);
        }
    };

    return (
        <div className='searchbox'>
            <h2>weather widget</h2>
            <h4 className="latest">latest weather updates</h4>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
                
                <Button variant="contained" type='submit' disabled={loading}>
                  { 'Search'}
                </Button>
            </form>
        </div>
    );
}