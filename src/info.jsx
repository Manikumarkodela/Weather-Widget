import React from 'react';
import './info.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Info({ info }) {
    const fallback = {
        name: "Mumbai",
        feelsLike: 306,
        temp: 304.14,
        temp_min: 302.14,
        temp_max: 306.14,
        humidity: 55,
        pressure: 1009,
        description: "haze"
    };
    const weatherData = info || fallback;

    const kelvinToCelsius = (k) => (k ? Math.round(k - 273.15) : null);
    const INIT_URL = "https://images.unsplash.com/photo-1530449855430-8cc53e18b3ec?q=60&w=600&auto=format&fit=crop";
    const hot_url = "https://images.unsplash.com/photo-1560319003-24094e042e10?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdCUyMGluJTIwdGhlJTIwY2l0eSUyMGluZGlhfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600";
    const cold_url = "https://images.unsplash.com/photo-1614964494722-0546c3ce4b63?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMGluJTIwdGhlJTIwY2l0eSUyMGluZGlhfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600";
    const rainy_url = "https://images.unsplash.com/photo-1751957855600-20d38995d22e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbiUyMGluJTIwdGhlJTIwY2l0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600";
    return (
        <div className="Info">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 200 }}
                    image={weatherData.humidity > 70 ? rainy_url : kelvinToCelsius(weatherData.temp) > 25 ? hot_url : cold_url}
                    title="weather image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {weatherData.name} {weatherData.description ? `— ${weatherData.description}` : ''}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Temp: {kelvinToCelsius(weatherData.temp)}°C
                        {weatherData.feelsLike != null && ` • Feels like: ${kelvinToCelsius(weatherData.feelsLike)}°C`}
                        <br />
                        Min: {kelvinToCelsius(weatherData.temp_min)}°C • Max: {kelvinToCelsius(weatherData.temp_max)}°C
                        <br />
                        Humidity: {weatherData.humidity}% • Pressure: {weatherData.pressure} hPa
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

