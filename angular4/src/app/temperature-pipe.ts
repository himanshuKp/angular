import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {

  transform(value: string | number, input: 'celsius' | 'fahrenheit', output: 'celsius' | 'fahrenheit') {
    let temperature: number;
    if (typeof  value === 'string') {
      temperature = parseFloat(value);
    } else {
      temperature = value;
    }

    if (input === output) {
      return temperature.toFixed(2);
    } else if (input === 'celsius' && output === 'fahrenheit') {
      const fahrenheit = temperature * 9 / 5 + 32;
      return `${fahrenheit.toFixed(2)} °F`;
    } else if (input === 'fahrenheit' && output === 'celsius') {
      const celsius = (temperature - 32) * 5 / 9;
      return `${celsius.toFixed(2)} °C`;
    }

    return temperature;
  }

}
