enum Planet {
    Mercury = 'mercury',
    Venus   = 'venus',
    Earth   = 'earth',
    Mars    = 'mars',
    Jupiter = 'jupiter',
    Saturn  = 'saturn',
    Uranus  = 'uranus',
    Neptune = 'neptune',
  };
  const SECONDS_TO_EARTH_YEARS = 31_557_600;
  const EARTH_YEARS_TO_PLANET_YEARS = {
    [Planet.Mercury]: 0.2408467,
    [Planet.Venus]:   0.61519726,
    [Planet.Earth]:   1.0,
    [Planet.Mars]:    1.8808158,
    [Planet.Jupiter]: 11.862615,
    [Planet.Saturn]:  29.447498,
    [Planet.Uranus]:  84.016846,
    [Planet.Neptune]: 164.79132,
  };
  export function age(planet: Planet, seconds: number): number {
    const earthYears = seconds / SECONDS_TO_EARTH_YEARS;
    const planetYears = earthYears / EARTH_YEARS_TO_PLANET_YEARS[planet];
    return Number(planetYears.toFixed(2));
  }
  